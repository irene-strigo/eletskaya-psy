import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  EmailInput,
  FormHeading,
  LoginInput,
  MessageField,
  MyForm,
  SubmitFormBtn,
} from './CommonStyles';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ContactForm = () => {
  useEffect(() => emailjs.init('Uew8-oeXFwdsXiM4K'), []);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);
  const [loading, setLoading] = useState(false);
  const initialFormState = {
    login: '',
    email: '',
    message: '',
  };
  const [enteredForm, setEnteredForm] = useState(initialFormState);
  const formChangeHandler = (name: string, value: string) => {
    setEnteredForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const showToast = (message: string) => {
    toast.success(message, {
      position: 'top-center',
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const serviceId = 'service_jqqyc4l';
    const templateId = 'template_22enw2o';
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        to_name: 'Валерия',
        from_name: nameRef.current?.value,
        from_email: emailRef.current?.value,
        message: messageRef.current?.value,
      });
      setEnteredForm(initialFormState);
      showToast('сообщение отправлено');
    } catch (error) {
      console.log(error);
      showToast('сообщение не отправлено');
    } finally {
      setLoading(false);
    }
  };
  return (
    <section>
      <aside></aside>
      <MyForm onSubmit={handleSubmit}>
        <FormHeading>Связаться со мной</FormHeading>
        <div>
          <LoginInput
            ref={nameRef}
            name="login "
            placeholder="ваше имя"
            required
            value={enteredForm.login}
            onChange={(e) => formChangeHandler('login', e.target.value)}
          />
        </div>
        <div>
          <EmailInput
            ref={emailRef}
            type="email"
            placeholder="ваш электронный адрес"
            required
            value={enteredForm.email}
            onChange={(e) => formChangeHandler('email', e.target.value)}
          />
        </div>
        <MessageField
          ref={messageRef}
          placeholder="ваше сообщение"
          name="message"
          required
          autoComplete="off"
          value={enteredForm.message}
          onChange={(e) => formChangeHandler('message', e.target.value)}
        ></MessageField>
        <SubmitFormBtn className="btn" disabled={loading}>
          отправить
        </SubmitFormBtn>
      </MyForm>
    </section>
  );
};
export default ContactForm;
