import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { PageWrapper } from './PagesStyles';
import { ContactsContainer, HeaderLogoLink } from '../components/CommonStyles';

const AboutMePage = () => {
  return (
    <PageWrapper>
      <Header />
      <ContactsContainer>
        <p>Такой страницы у нас нет</p>
        <p>
          вернитесь на <HeaderLogoLink to="/main">главную страницу</HeaderLogoLink>
        </p>
      </ContactsContainer>

      <Footer />
    </PageWrapper>
  );
};

export default AboutMePage;
