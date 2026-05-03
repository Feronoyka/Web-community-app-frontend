import { z } from 'zod';

export const signInSchema = z.object({
  email: z
    .email('Invalid email address')
    .transform((value) => value.trim().toLowerCase()),

  password: z
    .string()
    .trim()
    .regex(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&_])[A-Za-z\d@$!%*#?&_]+$/,
      'Invalid email or address',
    )
    .transform((value) => value.trim()),
});

export type SignInForm = z.infer<typeof signInSchema>;
