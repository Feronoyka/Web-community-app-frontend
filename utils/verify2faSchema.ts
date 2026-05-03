import z from 'zod';

export const verify2faSchema = z.object({
  otp: z.string().length(6, 'OTP must be 6 digits'),
  trustDevice: z.boolean().optional(),
});

export const verifyResetOtpSchema = z.object({
  otp: z.string().length(6, 'OTP must be 6 digits'),
});
