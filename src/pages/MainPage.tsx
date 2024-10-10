import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { PageWrapper } from './PagesStyles';
import { Banner, BannerPortrait } from '../components/CommonStyles';

const MainPage = () => {
  return (
    <PageWrapper>
      <Header />
      <Banner>
        <BannerPortrait src="assets/images/jpgs/banner-portrait1.jpg"></BannerPortrait>
      </Banner>
      <Footer />
    </PageWrapper>
  );
};

export default MainPage;
