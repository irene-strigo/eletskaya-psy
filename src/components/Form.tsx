/*import React, { ReactElement } from 'react';
import { MyForm, EmailInput, LoginInput, MessageField, SubmitFormBtn } from './CommonStyles';

type Props = {
  children: ReactElement[]
  onClick: (e: React.MouseEvent<HTMLElement>) => void;

};
const Form = ({ onClick }: Props) => {
  return <MyForm onClick={onClick} id='contact-form'>
    <h4>Связаться со мной</h4>
    <LoginInput type='text' placeholder='ваше имя' name='user_name' required autoComplete='off'></LoginInput>
    <EmailInput type='email' placeholder='ваш электронный адрес' name='user-email' required autoComplete='off'></EmailInput>
    <MessageField placeholder='ваше сообщение' name='message' required autoComplete='off'></MessageField>
    <SubmitFormBtn type='submit'>отправить</SubmitFormBtn>
  </MyForm>
};

export default Form;*/
/*import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form: React.MutableRefObject<undefined> = useRef();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm('service_jqqyc4l', 'template_128uwwm', e.currentTarget, {
        publicKey: 'Uew8-oeXFwdsXiM4K',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
*/

import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { EmailInput, LoginInput, MessageField, MyForm, SubmitFormBtn } from './CommonStyles';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ContactForm = () => {
  useEffect(() => emailjs.init('Uew8-oeXFwdsXiM4K'), []);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const serviceId = 'service_jqqyc4l';
    const templateId = 'template_22enw2o';
    const showToast = (message: string) => {
      toast.success(message, {
        position: 'top-center',
      });
    };
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        to_name: 'Валерия',
        from_name: nameRef.current?.value,
        from_email: emailRef.current?.value,
        message: messageRef.current?.value,
      });
      showToast('сообщение отправлено');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section>
      <aside></aside>
      <MyForm className="for" onSubmit={handleSubmit}>
        <h4>Связаться со мной</h4>
        <div className="form_group">
          <LoginInput ref={nameRef} placeholder="ваше имя" />
        </div>
        <div className="form_group">
          <EmailInput ref={emailRef} type="email" placeholder="ваш электронный адрес" />
        </div>
        <MessageField
          ref={messageRef}
          placeholder="ваше сообщение"
          name="message"
          required
          autoComplete="off"
        ></MessageField>
        <SubmitFormBtn className="btn" disabled={loading}>
          отправить
        </SubmitFormBtn>
      </MyForm>
    </section>
  );
};
export default ContactForm;
