import React from 'react';
import { Header, Footer } from '../components';
import { PageWrapper } from './PagesStyles';
import ContactForm from '../components/Form';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactsContainer } from '../components/CommonStyles';

const ContactsPage = () => {
  return (
    <PageWrapper>
      <Header />
      <ContactsContainer>
        <h2>КОНТАКТЫ</h2>
        <ol>
          Чтобы записаться на консультацию или задать вопрос можно:
          <li>Воспользоваться формой для связи:</li>
          <ContactForm />
          <ToastContainer />
          <li>Написать мне напрямую сообщение или письмо:</li>
        </ol>

        <ul>
          <li>WhatsApp или Viber: +333 33333</li>
          <li>Telegram: @leralera</li>
          <li>Skype: lera2</li>
          <li>Email: lera@gmail.com</li>
        </ul>

        <p>
          Я не всегда имею возможность ответить сразу, поскольку ваш звонок или сообщение может
          прийтись на время консультации. Я свяжусь с вами чуть позже и мы договоримся.
        </p>
      </ContactsContainer>
      <Footer />
    </PageWrapper>
  );
};

export default ContactsPage;
