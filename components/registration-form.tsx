'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { registrationSchema } from '@/lib/validation-schemas';
import { CricketFormFields } from './cricket-form-fields';
import type { z } from 'zod';

export function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof registrationSchema>>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      aadhar: '',
      role: '',
      battingStyle: '',
      bowlingStyle: '',
    },
  });

  async function onSubmit(values: z.infer<typeof registrationSchema>) {
    try {
      setIsSubmitting(true);
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error('Registration failed');

      toast({
        title: 'Registration Successful!',
        description: 'You have been registered for the tournament.',
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: 'Registration Failed',
        description: 'Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="register" className="py-16">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Player Registration</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <CricketFormFields control={form.control} />
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Registering...' : 'Register'}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}