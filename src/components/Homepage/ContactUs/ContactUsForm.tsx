import checkContactData, { ContactUsFormErrors } from '@/lib/contactFormValidation';
import emailjs from '@emailjs/browser';
import { ChangeEvent, useState } from 'react';
import Failure from './Failure';
import Form from './Form';
import Loader from './Loader';
import Success from './Success';

const initialFormData: ContactUsFormData = {
  fullName: '',
  email: '',
  text: ''
};
interface ContactUsFormProps {
  className?: string;
}

export interface ContactUsFormData {
  fullName: string;
  email: string;
  text: string;
  phone?: string;
  company?: string;
}

export default function ContactUsForm(props: ContactUsFormProps) {
  const { className } = props;
  const [formData, setFormData] = useState<ContactUsFormData>(initialFormData);
  const [formErrors, setFormErrors] = useState<ContactUsFormErrors>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [showForm, setShowForm] = useState<boolean>(true);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSend = () => {
    const errors = checkContactData(formData);
    if (errors) {
      setFormErrors(errors);
    } else {
      setShowForm(false);
      setLoading(true);
      emailjs.init(process.env.emailjsPublicKey as string);
      emailjs
        .send(
          process.env.emailjsServiceId as string,
          process.env.emailjsTemplateId as string,
          formData as unknown as Record<string, unknown>
        )
        .then(
          function (response) {
            setLoading(false);
            setIsSuccess(true);
            console.log('SUCCESS!', response.status, response.text);
          },
          function (err) {
            setLoading(false);
            setIsSuccess(false);
            console.log('FAILED...', err);
          }
        );
    }
  };

  return (
    <div
      id='contactUs'
      className={`${className} relative flex h-full w-full flex-col items-center justify-center border-b-4 border-b-primary p-2 py-10 pb-16 font-dongle text-secondary`}
    >
      <div className='spotlight spotlight-left'></div>
      {showForm && <Form onChange={onChange} onSend={onSend} formErrors={formErrors} />}
      {loading && <Loader />}
      {isSuccess && <Success />}
      {!isSuccess && !showForm && !loading && <Failure setShowForm={setShowForm} />}
    </div>
  );
}
