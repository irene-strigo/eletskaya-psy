import React from 'react';
import { FooterDate, FooterWrapper, HeaderLogoImg } from './CommonStyles';
const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <HeaderLogoImg src="/assets/images/pngs/brain-b-w.png" />
        <FooterDate>2024</FooterDate>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
