import React from 'react';
import { CloseTestBtn } from './CommonStyles';
type Props = {
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
};
const CloseTestButton = ({ onClick }: Props) => {
  return <CloseTestBtn onClick={onClick}>вернуться к оглавлению</CloseTestBtn>;
};

export default CloseTestButton;
