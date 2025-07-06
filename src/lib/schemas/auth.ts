import { z } from "zod";

export const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
});

export type RegisterInput = z.infer<typeof RegisterSchema>;
