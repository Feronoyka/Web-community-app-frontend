import { z } from 'zod';

export const signUpSchema = z.object({
  nickname: z
    .string()
    .min(3, 'Domain name must be at least 3 characters long')
    .max(30)
    .regex(
      /^[A-Za-z0-9]+$/,
      'Domain name can only contains letters and numbers',
    )
    .transform((value) => value.trim()),

  email: z
    .email('Invalid email address')
    .transform((value) => value.trim().toLowerCase()),

  password: z
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .regex(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&_])[A-Za-z\d@$!%*#?&_]+$/,
      'Password must contain at least one letter and one number',
    )
    .transform((value) => value.trim()),
});

export type SignUpForm = z.infer<typeof signUpSchema>;
