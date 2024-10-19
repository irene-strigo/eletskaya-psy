import React from 'react';
import { FooterDate, FooterWrapper, HeaderLogoImg } from './CommonStyles';
import SocialMedia from './SocialMedia';
const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <HeaderLogoImg src="/assets/images/pngs/brain-b-w.png" />
        <SocialMedia />
        <FooterDate>2024</FooterDate>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
