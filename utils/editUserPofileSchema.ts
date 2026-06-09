import z from 'zod';
import { Pronouns } from './enums';

export const editUserProfileSchema = z.object({
  username: z
    .string()
    .trim()
    .min(3, 'username should be at least 3 characters')
    .max(30, 'username should not be exceed 30 characters')
    .optional()
    .transform((value) => value?.trim()),

  pronouns: z.enum(Pronouns).optional(),

  description: z
    .string()
    .max(650, 'Description should not be exceed 650 characters')
    .optional(),

  avatarUrl: z.string().optional(),
});

export type EditUserProfileSchema = z.infer<typeof editUserProfileSchema>;
