import { z } from 'zod';

export const signUpSchema = z.object({
  domainName: z
    .string()
    .min(6, 'Domain name must be at least 6 characters long')
    .max(16)
    .regex(
      /^[A-Za-z0-9]+$/,
      'Domain name can only contains letters and numbers',
    ),

  email: z
    .email('Invalid email address')
    .transform((value) => value.trim().toLocaleLowerCase()),

  password: z
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .regex(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&_])[A-Za-z\d@$!%*#?&_]+$/,
      'Password must contain at least one letter and one number',
    ),
});

export type SignUpForm = z.infer<typeof signUpSchema>;
