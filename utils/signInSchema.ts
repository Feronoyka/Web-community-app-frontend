import { z } from 'zod';

export const signInSchema = z.object({
  email: z
    .email('Invalid email address')
    .transform((value) => value.trim().toLowerCase()),

  password: z
    .string()
    .trim()
    .min(6, 'Password must be at least 6 characters long')
    .regex(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&_])[A-Za-z\d@$!%*#?&_]+$/,
      'Password must contain at least one uppercase letter and one number and one special character',
    )
    .transform((value) => value.trim()),
});

export type SignInForm = z.infer<typeof signInSchema>;
