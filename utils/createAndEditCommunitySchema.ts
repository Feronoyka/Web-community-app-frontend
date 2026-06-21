import { z } from 'zod';

export const createAndEditCommunitySchema = z.object({
  name: z.string().min(3).max(30).nonempty(),
  description: z.string().max(650),
  avatarUrl: z
    .instanceof(File)
    .refine((file) => file.size < 5 * 1024 * 1024, 'Max 5MB')
    .refine(
      (file) => ['image/jpeg', 'image/png', 'image/webp'].includes(file.type),
      'Only jpg, png, webp allowed',
    )
    .optional(),
});
