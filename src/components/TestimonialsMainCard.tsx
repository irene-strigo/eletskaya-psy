import React from 'react';
import { TestimonialsCardContainer, TestimonialsCardText } from './CommonStyles';

type Props = {
  id: number;
  text: string;
  signature: string;
};

const TestimonialsMainCard = ({ id, text, signature }: Props) => {
  return (
    <TestimonialsCardContainer id={String(id)}>
      <TestimonialsCardText>{text}</TestimonialsCardText>
      <div>{signature}</div>
    </TestimonialsCardContainer>
  );
};

export default TestimonialsMainCard;
