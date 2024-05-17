import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string(),
  FRONT_END_ORIGIN: z.string(),
  PORT: z.coerce.number(),
});

export const env = envSchema.parse(process.env);
