CREATE TABLE IF NOT EXISTS "ContactUS" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"fisrtName" varchar(255) NOT NULL,
	"lastName" varchar(255) NOT NULL,
	"email" text NOT NULL,
	"phoneNumber" varchar NOT NULL,
	"message" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "ContactUS_email_unique" UNIQUE("email")
);
