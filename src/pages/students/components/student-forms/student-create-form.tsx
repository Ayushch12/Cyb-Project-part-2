import Heading from '@/components/shared/heading';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];
const maxFileSize = 1 * 1024 * 1024 * 1024;
const studentFormSchema = z
  .object({
    firstname: z.string().min(1, { message: 'firstname is required' }),
    lastname: z.string().min(1, { message: 'lastname is required' }),
    username: z.string().min(1, { message: 'username is required' }),
    school: z.string().min(1, { message: 'school is required' }),
    email: z.string().email({ message: 'Enter a valid email address' }),
    phone: z.string().email({ message: 'Enter a valid phone number' }),
    password: z.string().min(1, { message: 'Password is required' }),
    confirmPassword: z
      .string()
      .min(1, { message: 'Confirm Password is required' }),
    file: z
      .custom()
      .refine((fileList: any) => fileList?.length === 1, 'Expected file')
      .transform((file: any) => file[0])
      .refine((file) => {
        return file?.size <= maxFileSize;
      }, `File size should be less than 1gb.`)
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        'Only these types are allowed .jpg, .jpeg, .png, .webp and mp4'
      )
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword']
  });

type StudentFormSchemaType = z.infer<typeof studentFormSchema>;

const StudentCreateForm = ({ modalClose }: { modalClose: () => void }) => {
  const form = useForm<StudentFormSchemaType>({
    resolver: zodResolver(studentFormSchema),
    defaultValues: {}
  });

  const onSubmit = (values: StudentFormSchemaType) => {

    console.log(values);
  };

  return (
    <div className="px-2">
      <div className="flex items-center justify-center text-2xl font-bold">

      </div>

      <Heading
        title={'Add new Employe list'}
        description={
          "Welcome to the Our Team Cyberdian Groupe."
        }
        className="space-y-2 py-4 text-center"
      />

    </div>
  );
};

export default StudentCreateForm;
