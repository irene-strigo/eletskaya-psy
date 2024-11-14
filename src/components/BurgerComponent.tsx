import React from 'react';
import { BurgerButtonsContainer } from './CommonStyles';
import NavigationButton from './NavigationButton';
import { headerButtons } from './Header';
type Props = {
  isOpen: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
};
const BurgerComponent = ({ isOpen, onClick }: Props) => {
  return (
    <BurgerButtonsContainer>
      {isOpen}
      {headerButtons.map((button) => (
        <NavigationButton
          key={button.id}
          link={button.link}
          label={button.label}
          onClick={onClick}
        />
      ))}
    </BurgerButtonsContainer>
  );
};

export default BurgerComponent;
