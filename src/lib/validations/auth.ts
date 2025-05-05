import { z } from "zod";

export const signinSchema = z.object({
  email: z.string().email().min(10),
  password: z.string().min(6),
});
