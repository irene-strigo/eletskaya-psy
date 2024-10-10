import React, { ReactElement } from 'react';
import { BurgerSignContainer } from './CommonStyles';
type Props = {
  sign: ReactElement;
  isOpen: boolean;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
};
const BurgerButton = ({ sign, onClick }: Props) => {
  return <BurgerSignContainer onClick={onClick}>{sign}</BurgerSignContainer>;
};

export default BurgerButton;
