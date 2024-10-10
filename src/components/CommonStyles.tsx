import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavButton = styled(Link)`
  max-height: 40px;
  border-bottom: 1px solid #73bfa6;
  color: #73bfa6;
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
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid black;
  @media screen and (max-width: 900px) {
    justify-content: space-between;
  }
`;
export const FooterWrapper = styled.div`
  padding: 10px;
  border-top: 1px solid black;
  display: flex;

  justify-content: center;
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
justify-content: center;
  @media screen and (max-width: 495px) {
    display: none;
    
    }
  }
 `;
export const BurgerButtonsContainer = styled.div`
 display: none;

 @media screen and (max-width: 495px) {
   display: flex;
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
  }
`;
export const Banner = styled.div`
  width: 100%;
  text-align: center;
`;
export const BannerPortrait = styled.img`
  max-width: 100%;
`;
