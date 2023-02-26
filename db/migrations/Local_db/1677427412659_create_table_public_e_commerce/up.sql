CREATE TABLE "public"."e_commerce" ("id" text NOT NULL, "item_id" text NOT NULL, "paid" boolean NOT NULL, PRIMARY KEY ("id") , UNIQUE ("id"), UNIQUE ("item_id"));
