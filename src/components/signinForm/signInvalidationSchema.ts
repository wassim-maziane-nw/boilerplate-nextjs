import * as z from "zod";

export const signInValidationSchema = z.object({
  email: z.email().endsWith("@theodo.com"),
  password: z.string().min(4),
});

export type signInValidationType = z.infer<typeof signInValidationSchema>;
