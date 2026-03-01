import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { applicationsApi } from '@/api/applications';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const applySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  resume_link: z.string().url('Resume link must be a valid URL'),
});

type ApplyFormData = z.infer<typeof applySchema>;

interface ApplyFormProps {
  jobId: string;
  onSuccess?: () => void;
}

export const ApplyForm = ({ jobId, onSuccess }: ApplyFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ApplyFormData>({
    resolver: zodResolver(applySchema),
  });

  const onSubmit = async (data: ApplyFormData) => {
    setIsSubmitting(true);
    try {
      const { success, error } = await applicationsApi.createApplication({
        job_id: jobId,
        ...data,
      });

      if (success) {
        toast.success('Application submitted successfully!');
        reset();
        onSuccess?.();
      } else {
        toast.error(error?.message || 'Failed to submit application');
      }
    } catch (error) {
      toast.error('An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          {...register('name')}
          placeholder="John Doe"
        />
        {errors.name && (
          <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          placeholder="john@example.com"
        />
        {errors.email && (
          <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="resume_link">Resume Link</Label>
        <Input
          id="resume_link"
          {...register('resume_link')}
          placeholder="https://drive.google.com/..."
        />
        {errors.resume_link && (
          <p className="text-sm text-destructive mt-1">{errors.resume_link.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? 'Submitting...' : 'Submit Application'}
      </Button>
    </form>
  );
};
