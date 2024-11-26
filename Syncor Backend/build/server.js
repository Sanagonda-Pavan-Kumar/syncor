// src/server.ts
import process3 from "node:process";
import consola3 from "consola";
import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import { mw as requestIp } from "request-ip";

// src/utils/logger.ts
import consola from "consola";
function logger(req, _res, next) {
  const ip = req.ip;
  const method = req.method;
  const url = req.url;
  const version = req.httpVersion;
  const userAgent = req.headers["user-agent"];
  const message = `${ip} [${method}] ${url} HTTP/${version} ${userAgent}`;
  consola.log(message);
  next();
}

// src/utils/errors.ts
import consola2 from "consola";
import postgres from "postgres";
import { ZodError } from "zod";
function getStatusFromErrorCode(code) {
  switch (code) {
    case "BAD_REQUEST":
    case "VALIDATION_ERROR":
      return 400;
    case "UNAUTHORIZED":
    case "INVALID_PASSWORD":
      return 401;
    case "NOT_FOUND":
    case "USER_NOT_FOUND":
      return 404;
    case "METHOD_NOT_ALLOWED":
      return 405;
    case "NOT_ACCEPTABLE":
      return 406;
    case "REQUEST_TIMEOUT":
      return 408;
    case "CONFLICT":
      return 409;
    case "GONE":
      return 410;
    case "LENGTH_REQUIRED":
      return 411;
    case "PRECONDITION_FAILED":
      return 412;
    case "PAYLOAD_TOO_LARGE":
      return 413;
    case "URI_TOO_LONG":
      return 414;
    case "UNSUPPORTED_MEDIA_TYPE":
      return 415;
    case "RANGE_NOT_SATISFIABLE":
      return 416;
    case "EXPECTATION_FAILED":
      return 417;
    case "TEAPOT":
      return 418;
    case "INTERNAL_ERROR":
      return 500;
    default:
      return 500;
  }
}
function getMessageFromErrorCode(code) {
  switch (code) {
    case "BAD_REQUEST":
      return "The request is invalid.";
    case "VALIDATION_ERROR":
      return "The request contains invalid or missing fields.";
    case "UNAUTHORIZED":
      return "You are not authorized to access this resource.";
    case "NOT_FOUND":
      return "The requested resource was not found.";
    case "USER_NOT_FOUND":
      return "The user was not found.";
    case "INTERNAL_ERROR":
      return "An internal server error occurred.";
    case "CONFLICT":
      return "The request conflicts with the current state of the server.";
    case "INVALID_PASSWORD":
      return "The password is incorrect.";
    default:
      return "An internal server error occurred.";
  }
}
function handleValidationError(err) {
  const invalidFields = [];
  const requiredFields = [];
  for (const error of err.errors) {
    if (error.code === "invalid_type")
      invalidFields.push(error.path.join("."));
    else if (error.message === "Required")
      requiredFields.push(error.path.join("."));
  }
  return {
    invalidFields,
    requiredFields
  };
}
var BackendError = class extends Error {
  code;
  details;
  constructor(code, {
    message,
    details
  } = {}) {
    super(message ?? getMessageFromErrorCode(code));
    this.code = code;
    this.details = details;
  }
};
function errorHandler(error, req, res, _next) {
  let statusCode = 500;
  let code;
  let message;
  let details;
  const ip = req.ip;
  const url = req.originalUrl;
  const method = req.method;
  if (error instanceof BackendError) {
    message = error.message;
    code = error.code;
    details = error.details;
    statusCode = getStatusFromErrorCode(code);
  }
  if (error instanceof postgres.PostgresError) {
    code = "INTERNAL_ERROR";
    message = "The DB crashed maybe because they dont like you :p";
    statusCode = getStatusFromErrorCode(code);
    details = error;
  }
  if (error instanceof ZodError) {
    code = "VALIDATION_ERROR";
    message = getMessageFromErrorCode(code);
    details = handleValidationError(error);
    statusCode = getStatusFromErrorCode(code);
  }
  if (error.code === "ECONNREFUSED") {
    code = "INTERNAL_ERROR";
    message = "The DB crashed maybe because they dont like you :p";
    details = error;
  }
  code = code ?? "INTERNAL_ERROR";
  message = message ?? getMessageFromErrorCode(code);
  details = details ?? error;
  consola2.error(`${ip} [${method}] ${url} ${code} - ${message}`);
  res.status(statusCode).json({
    code,
    message,
    details
  });
}
function handle404Error(_req, res) {
  const code = "NOT_FOUND";
  res.status(getStatusFromErrorCode(code)).json({
    code,
    message: "Route not found",
    details: "The route you are trying to access does not exist"
  });
}

// src/services/user-services.ts
import "drizzle-orm";

// src/utils/db.ts
import process2 from "node:process";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres2 from "postgres";

// src/utils/env.ts
import process from "node:process";
import { ZodError as ZodError2, z } from "zod";
import "dotenv/config";
var configSchema = z.object({
  PORT: z.string().regex(/^\d{4,5}$/).optional().default("3000"),
  API_BASE_URL: z.string().url().default("/api"),
  DB_URL: z.string().url().refine(
    (url) => url.startsWith("postgres://") || url.startsWith("postgresql://"),
    "DB_URL must be a valid postgresql url"
  )
  // FROM_NAME: z.string().default('Verify'),
  // FROM_EMAIL: z.string().email(),
  // AWS_ACCESS_KEY: z.string(),
  // AWS_SECRET_ACCESS_KEY: z.string(),
  // AWS_REGION: z.string(),
  // JWT_SECRET: z.string(),
});
try {
  configSchema.parse(process.env);
} catch (error) {
  if (error instanceof ZodError2)
    console.error(error.errors);
  process.exit(1);
}

// src/utils/db.ts
var db = drizzle(postgres2(process2.env.DB_URL));

// src/schema/Contactus.ts
import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { createSelectSchema } from "drizzle-zod";
import { z as z2 } from "zod";
var Contactus = pgTable("ContactUS", {
  id: uuid("id").notNull().primaryKey().defaultRandom(),
  firstName: varchar("fisrtName", { length: 255 }).notNull(),
  lastName: varchar("lastName", { length: 255 }).notNull(),
  email: text("email").notNull().unique(),
  phoneNumber: varchar("phoneNumber").notNull(),
  message: varchar("message", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow()
});
var selectContatctusSchema = createSelectSchema(Contactus, {
  email: (schema) => schema.email.email().regex(/^([\w.%-]+@[a-z0-9.-]+\.[a-z]{2,6})*$/i)
});
var addContatctusSchema = z2.object({
  body: selectContatctusSchema.pick({
    firstName: true,
    lastName: true,
    email: true,
    phoneNumber: true,
    message: true
  })
});

// src/services/user-services.ts
async function addContactus(firstName, lastName, email, phoneNumber, message) {
  console.log("checking");
  const newContact = await db.insert(Contactus).values({ firstName, lastName, email, phoneNumber, message });
  if (!newContact) {
    throw new BackendError("INTERNAL_ERROR", {
      message: "Failed to add employee"
    });
  }
  return newContact;
}

// src/utils/create.ts
import { Router } from "express";
function createRouter(callback) {
  const router = Router();
  callback(router);
  return router;
}
function createHandler(schemaOrHandler, handler) {
  return async (req, res, next) => {
    try {
      if (handler) {
        const schema = schemaOrHandler;
        schema.parse(req);
        await handler(req, res, next);
      } else {
        const handler2 = schemaOrHandler;
        await handler2(req, res, next);
      }
    } catch (error) {
      next(error);
    }
  };
}

// src/controllers/user-controllers.ts
var handleContactus = createHandler(
  addContatctusSchema,
  async (req, res) => {
    const { firstName, lastName, email, phoneNumber, message } = req.body;
    console.log("Handling Contact Us request");
    if (!firstName || !lastName || !email || !phoneNumber || !message) {
      throw new BackendError("BAD_REQUEST", {
        message: "All fields are required"
      });
    }
    const addedContactus = await addContactus(
      firstName,
      lastName,
      email,
      phoneNumber,
      message
    );
    res.status(201).json({
      message: "User Contact Details",
      user: addedContactus
    });
  }
);

// src/routes/user-routes.ts
var user_routes_default = createRouter((router) => {
  router.post("/register/contactus", handleContactus);
});

// src/routes/routes.ts
var routes_default = createRouter((router) => {
  router.use("/user", user_routes_default);
});

// src/server.ts
var { PORT, ENV } = process3.env;
var app = express();
app.use(express.json());
app.use(cors());
app.use(requestIp());
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1e3,
    max: 1e3,
    handler: (req, res) => {
      consola3.warn(`DDoS Attempt from ${req.ip}`);
      res.status(429).json({
        error: "Too many requests in a short time. Please try in a minute."
      });
    }
  })
);
app.use(logger);
app.get("/", (_req, res) => {
  res.json({
    message: "Welcome to the API!"
  });
});
app.get("/healthcheck", (_req, res) => {
  res.json({
    message: "Server is running",
    uptime: process3.uptime(),
    timestamp: Date.now()
  });
});
app.use("/api/v1", routes_default);
app.all("*", handle404Error);
app.use(errorHandler);
app.listen(PORT, () => {
  consola3.info(`Server running at http://localhost:${PORT}`);
});
