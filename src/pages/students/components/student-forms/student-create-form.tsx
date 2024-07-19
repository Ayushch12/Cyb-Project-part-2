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

  })

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

    </div>
  );
};

export default StudentCreateForm;
