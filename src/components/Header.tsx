import React, { useState } from 'react';

import NavigationButton from './NavigationButton';
import { HeaderButtonsContainer, HeaderLogoImg, HeaderWrapper } from './CommonStyles';
import BurgerButton from './BurgerButton';
import BurgerComponent from './BurgerComponent';

export type Button = {
  id: number;
  link: string;
  label: string;
};
export const headerButtons: Button[] = [
  { id: 1, link: '/main', label: 'Главная страница' },
  { id: 2, link: '/about-me', label: 'Обо мне' },
  { id: 3, link: '/services', label: 'Услуги' },
  { id: 4, link: '/testimonials', label: 'Отзывы' },
  { id: 5, link: '/contacts', label: 'Контакты' },
  { id: 6, link: '/games', label: 'Игры' },
];
const Header = () => {
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  function processBurger() {
    return isBurgerOpen ? setBurgerOpen(false) : setBurgerOpen(true);
  }

  return (
    <HeaderWrapper>
      <a href="/main">
        <HeaderLogoImg src="/assets/images/pngs/brain-icon.png"></HeaderLogoImg>
      </a>
      <HeaderButtonsContainer>
        {headerButtons.map((button) => (
          <NavigationButton key={button.id} link={button.link} label={button.label} />
        ))}
      </HeaderButtonsContainer>
      {isBurgerOpen && (
        <>
          <BurgerComponent isOpen={isBurgerOpen}></BurgerComponent>
        </>
      )}
      <BurgerButton
        sign={isBurgerOpen ? <>&times;</> : <>&equiv;</>}
        isOpen={false}
        onClick={() => {
          processBurger();
        }}
      ></BurgerButton>
    </HeaderWrapper>
  );
};

export default Header;
