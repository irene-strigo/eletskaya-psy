import React from 'react';
import { CloseTestBtn } from './CommonStyles';
type Props = {
  title: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
};
const CloseTestButton = ({ onClick, title }: Props) => {
  return <CloseTestBtn onClick={onClick}>{title}</CloseTestBtn>;
};

export default CloseTestButton;
