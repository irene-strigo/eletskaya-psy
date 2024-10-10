import React from 'react';
import { BurgerButtonsContainer } from './CommonStyles';
import NavigationButton from './NavigationButton';
import { headerButtons } from './Header';
type Props = {
  isOpen: boolean;
};
const BurgerComponent = ({ isOpen }: Props) => {
  return (
    <BurgerButtonsContainer>
      {isOpen}
      {headerButtons.map((button) => (
        <NavigationButton key={button.id} link={button.link} label={button.label} />
      ))}
    </BurgerButtonsContainer>
  );
};

export default BurgerComponent;
