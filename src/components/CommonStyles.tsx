import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const RedirectButton = styled(Link)`
  max-height: 40px;
  border-bottom: 1px solid #80d8d8;
  color: #80d8d8;
  cursor: pointer;
  margin: 10px;
  padding: 10px 10px;
  text-align: center;
  justify-content: center;
  text-decoration: none;
  font-size: clamp(1rem, 1vw, 1.5rem);
  white-space: nowrap;
  transition: box-shadow 0.5s;

  &:hover,
  :focus {
    transform: scale(1.2);
    box-shadow: 0 5px 5px #575242;
  }
  @media screen and (max-width: 900px) {
    margin: 5px;
    font-size: clamp(0.7rem, 1vw, 1.5rem);
  }
`;

export const NavButton = styled(Link)`
  max-height: 40px;
  border-bottom: 1px solid #80d8d8;
  color: #80d8d8;
  cursor: pointer;
  margin: 10px;
  padding: 10px 10px;
  text-align: center;
  justify-content: center;
  text-decoration: none;
  font-size: clamp(1rem, 1vw, 1.5rem);
  white-space: nowrap;
  transition: box-shadow 0.5s;

  &:hover,
  :focus {
    transform: scale(1.2);
    box-shadow: 0 5px 5px #575242;
  }
  @media screen and (max-width: 900px) {
    margin: 5px;
    font-size: clamp(0.7rem, 1vw, 1.5rem);
  }
`;
export const HeaderWrapper = styled.div`
  min-height: 1em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #80d8d8;
  @media screen and (max-width: 990px) {
    grid-template-rows: 1fr 1fr;
  }
  @media screen and (max-width: 495px) {
    grid-template-rows: 1fr;
  }
`;
export const HeaderLogoLink = styled.a`
  margin: 0 10px;
  width: 30%;
  grid-row: 1;
  grid-column: 1;
`;
export const FooterWrapper = styled.div`
  padding: 10px;
  border-top: 1px solid #80d8d8;
  display: flex;
  justify-content: center;
  text-align: center;
`;
export const HeaderLogoImg = styled.img`
  width: 60px;
  &:hover,
  :focus {
    transform: scale(1.1);
  }
`;

export const FooterDate = styled.div`
  padding: 0 15px;
`;

export const PageUpLink = styled.a`
position: sticky;
  bottom: 5px;
  background-color: #f3f9a5;
  opacity: 0.6;
  
  color: #511f31;
  cursor: pointer;
    text-decoration: none;
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 2em;

    border-radius: 50%;
    margin: 0 2em;
     &:hover,
  :focus {
    background-color: #f7f9ff;
    color: #2c5777;
  }
    @media screen and (max-width: 700px) {
    width: 65px;
    font-size: 2em;
    left: 14em;
    margin: 0 5px;
  }
}
`;
export const ListLink = styled.a`
  color: black;
  text-decoration: none;
  transition: transform 0.2s;
  margin-bottom: 1em;
  &:hover,
  :focus {
    transform: scale(1.1);
    color: #ce871d;
  }
`;

export const HeaderButtonsContainer = styled.div`
display: flex;
flex-wrap: wrap;
gap: 10px;
margin: 5px;
justify-self: flex-end;
grid-row: 1;
grid-column: 1 / 3;
@media screen and (max-width: 990px) {
 grid-row: 2;
  }
  @media screen and (max-width: 495px) {
    display: none;
    
    }
  }
 `;
export const BurgerButtonsContainer = styled.div`
 display: none;

 @media screen and (max-width: 495px) {
   display: flex;
   background-color: white;
   z-index:100;
   flex-direction:column;
   position: absolute;
       width: 100%;
       top: 5.5em;
       left: 0px;
   }
 }
`;

export const BurgerSignContainer = styled.div`
  display: none;
  font-size: 3em;
  color: #511f31;
  @media screen and (max-width: 495px) {
    display: block;
    justify-self: right;
    grid-row: 1;
  }
`;
export const Banner = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
`;
export const BannerPortrait = styled.img`
  width: 100%;
  max-width: 1100px;
`;
export const MainWrapper = styled.main`
  max-width: 1440px;
`;

export const MainBannerHeading = styled.div`
  font-family: 'Playfair Display SC', serif;
  z-index: 5;
  position: absolute;
  text-shadow: 5px 2px 7px rgba(0, 0, 0, 0.3);
  top: 30%;
  left: 15%;
  color: rgb(250 248 239);
  max-width: 530px;
  font-weight: 400;
  @media screen and (max-width: 1100px) {
    top: 10%;
    left: 3%;
  }
  @media screen and (max-width: 585px) {
    display: none;
  }
`;
export const HeadingTextInSmallScreen = styled.div`
  display: none;
  @media screen and (max-width: 585px) {
    display: block;
    text-align: center;
  }
`;
export const HeadingBigText = styled.h2`
  font-size: clamp(1rem, 6vw, 3rem);
  transition: 0.5s ease-in-out;
  &:hover,
  :focus {
    transform: scale(1);
    color: #80d8d8;
  }
`;

export const HeadingSmallText = styled.div`
  margin: 20px;
  font-size: clamp(0.7rem, 2vw, 1.5rem);
  text-align: left;
  @media screen and (max-width: 768px) {
    margin: 20px 0;
  }
`;
export const BannerSmallTextSigns = styled.span`
  color: #80d8d8;
  font-size: clamp(0.8rem, 3vw, 2rem);
`;
export const BannerSmallTextUl = styled.ul`
  list-style-type: none;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  grid-row: 2;
  grid-column: 2;
  justify-self: right;
  margin: 0 1rem;
  @media screen and (max-width: 990px) {
    grid-row: 1;
  }
`;
export const SocialMediaIcon = styled.img`
  max-width: clamp(0.7rem, 30px, 2rem);
  margin: 5px;
  &:hover,
  :focus {
    transform: scale(1.2);
  }
`;
export const SliderPicture = styled.img`
  max-width: 500px;
`;
export const SliderBlockContainer = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
export const SliderText = styled.div`
  max-width: 500px;
  margin: 10px;
`;
export const ServiceCardContainer = styled.div`
  border: 1px solid #80d8d8;
  width: 20%;
  min-height: 10em;
  margin: 10px;
  padding: 10px;
  justify-content: center;
  text-align: center;
  transition: 0.5s ease-in-out;
  &:hover,
  :focus {
    transform: scale(1);
    box-shadow: 0 5px 5px #575242;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 10px 0;
  }
`;

export const Services = styled.div`
  display: flex;
  margin: 3em auto;
  max-width: 1110px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
export const ServicesMainCardPicture = styled.img`
  max-width: 100px;
`;
export const ServiceCardTitle = styled.h3`
  font-size: clamp(1rem, 1vw, 1.5rem);
`;
export const TestLink = styled(Link)`
  height: 300px;
`;
export const ServicePageBlockContainer = styled.div`
  margin: 20px;
  padding: 20px;
`;

export const ServiceDerscriptionContainer = styled.div`
  margin: 20px 0;
`;

export const MainTestimonials = styled.div`
  display: flex;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const TestimonialsCardContainer = styled.div`
  border: 1px solid #80d8d8;
  margin: 10px;
  padding: 20px;
`;
export const TestimonialsCardText = styled.div`
  font-style: italic;
  margin: 10px;
  padding: 10px;
`;
export const MainEducation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const CertificateImage = styled.img`
  max-width: 15em;
`;
export const MyForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 30em;
  min-height: 300px;
  text-align: center;
  margin: 20px auto;
  padding: 20px;
  background-color: #80d8d8;
  border: 2px solid #80d8d8;
  gap: 10px;
  border-radius: 5px;
`;
export const LoginInput = styled.input`
  min-height: 4em;
  padding: 10px;
  &:hover {
    border: 2px solid #80d8d8;
  }
  &::placeholder {
    font-style: italic;
  }
`;
export const EmailInput = styled.input`
  min-height: 4em;
  padding: 10px;
  &:hover {
    border: 2px solid #80d8d8;
  }
  &::placeholder {
    font-style: italic;
  }
`;
export const MessageField = styled.textarea`
  min-height: 10em;
  font-size: 15px;
  padding: 10px;
  &:hover {
    border: 2px solid #80d8d8;
  }
  &::placeholder {
    font-style: italic;
  }
`;
export const SubmitFormBtn = styled.button`
  background-color: #742424;
  padding: 10px;
  color: #80d8d8;
  border: 1px solid #80d8d8;
  border-radius: 5px;
  margin: 0 auto;
  transition: box-shadow 0.5s;
  &:hover,
  :focus {
    box-shadow: 0 8px 25px #575242;
  }
`;
export const ContactsContainer = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ArtTestCardContainer = styled.div`
  margin: 10px;
  max-width: fit-content;
`;
export const ArtTestCardPicture = styled.img`
  max-width: 400px;
`;
export const ArtTestContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 200px;
  justify-content: center;
  @media screen and (max-width: 800px) {
    margin: 0;
  }
`;
export const CloseTestBtn = styled.button`
  max-height: 40px;
  border: 1px solid #80d8d8;
  color: #80d8d8;
  cursor: pointer;
  margin: 10px;
  padding: 10px 10px;
  text-align: center;
  justify-content: center;
  text-decoration: none;
  font-size: clamp(1rem, 1vw, 1.5rem);
  white-space: nowrap;
  transition: box-shadow 0.5s;

  &:hover,
  :focus {
    transform: scale(1.2);
    box-shadow: 0 5px 5px #575242;
  }
  @media screen and (max-width: 900px) {
    margin: 5px;
    font-size: clamp(0.7rem, 1vw, 1.5rem);
  }
`;

export const TestListLi = styled.li`
  cursor: pointer;
  &:hover,
  :focus {
    color: #2c5777;
  }
`;
export const GamesPageWrapper = styled.div`
  padding: 20px;
`;
