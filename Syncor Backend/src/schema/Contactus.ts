import type { InferSelectModel } from 'drizzle-orm';
import { boolean, pgTable, text, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';
import { createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';

export const Contactus = pgTable('ContactUS', {
  id: uuid('id').notNull().primaryKey().defaultRandom(),
  firstName: varchar('fisrtName', { length: 255 }).notNull(),
  lastName: varchar('lastName', { length: 255 }).notNull(),
  email: text('email').notNull().unique(),
  phoneNumber: varchar('phoneNumber').notNull(),
  message: varchar('message', { length: 255 }).notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const selectContatctusSchema = createSelectSchema(Contactus, {
  email: schema =>
    schema.email.email().regex(/^([\w.%-]+@[a-z0-9.-]+\.[a-z]{2,6})*$/i),
});

export const addContatctusSchema = z.object({
  body: selectContatctusSchema.pick({
    firstName:true,
    lastName:true,
    email:true,
    phoneNumber:true,
    message:true,

  }),
});