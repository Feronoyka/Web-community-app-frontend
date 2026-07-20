import z from 'zod';
import { Pronouns } from './enums';

export const editUserProfileSchema = z.object({
  nickname: z
    .string()
    .trim()
    .min(3, 'nickname should be at least 3 characters')
    .max(30, 'nickname should not be exceed 30 characters')
    .optional()
    .transform((value) => value?.trim()),

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
    .max(620, 'Description should not be exceed 620 characters')
    .optional(),

  avatarUrl: z
    .instanceof(File)
    .refine((file) => file.size < 5 * 1024 * 1024, 'Max 5MB')
    .refine(
      (file) => ['image/jpeg', 'image/png', 'image/webp'].includes(file.type),
      'Only jpg, png, webp',
    )
    .optional(),
});

export type EditUserProfileSchema = z.infer<typeof editUserProfileSchema>;
