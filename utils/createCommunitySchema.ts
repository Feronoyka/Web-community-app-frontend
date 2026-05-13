import { z } from 'zod';

export const createCommunitySchema = z.object({
  name: z.string().min(3).max(30).nonempty(),
  description: z.string().max(650),
});
