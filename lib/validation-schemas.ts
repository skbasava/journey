import * as z from 'zod';

export const registrationSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string()
    .min(10, 'Phone number must be 10 digits')
    .max(10, 'Phone number must be 10 digits')
    .regex(/^[0-9]+$/, 'Phone number must contain only digits'),
  aadhar: z.string()
    .length(12, 'Aadhar number must be 12 digits')
    .regex(/^[0-9]+$/, 'Aadhar number must contain only digits'),
  role: z.string().min(1, 'Please select your role'),
  battingStyle: z.string().min(1, 'Please select your batting style'),
  bowlingStyle: z.string().optional(),
});