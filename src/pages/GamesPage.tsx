import React from 'react';
import { PageWrapper } from './PagesStyles';
import Header from '../components/Header';
import Footer from '../components/Footer';

import 'react-responsive-modal/styles.css';

const GamesPage = () => {
  return (
    <PageWrapper>
      <Header />

      <Footer />
    </PageWrapper>
  );
};

export default GamesPage;
