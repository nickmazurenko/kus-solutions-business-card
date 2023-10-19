import { ContactUsFormData } from '@/components/Homepage/ContactUs/ContactUsForm';
import * as Yup from 'yup';

export type ContactUsFormErrors = {
  [K in keyof ContactUsFormData]?: string;
};

const schema = Yup.object().shape({
  fullName: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  text: Yup.string().required('Message cannot be empty')
});

const checkContactData = (formData: ContactUsFormData): ContactUsFormErrors | null => {
  try {
    schema.validateSync(formData, { abortEarly: false });
    return null; // No errors
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      const errors: ContactUsFormErrors = {};

      error.inner.forEach((err) => {
        errors[err.path as keyof ContactUsFormErrors] = err.message;
      });

      return errors;
    } else {
      // Handle other types of errors if necessary
      return {};
    }
  }
};

export default checkContactData;
