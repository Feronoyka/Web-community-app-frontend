import { z } from 'zod';

export const resetConfirmSchema = z
  .object({
    password: z
      .string()
      .min(6, 'Password must be at least 6 characters')
      .regex(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&_])[A-Za-z\d@$!%*#?&_]+$/,
        'Password must contain atleast uppercase letter and character',
      )
      .trim()
      .transform((value) => value.trim()),

    confirmPassword: z
      .string()
      .min(6, 'Please confirm your password')
      .trim()
      .transform((value) => value.trim()),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Password do not match',
    path: ['confirmPassword'],
  });
