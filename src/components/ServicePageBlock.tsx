import React, { ReactNode } from 'react';
import {
  ServiceCardTitle,
  ServiceDerscriptionContainer,
  ServicePageBlockContainer,
  ServicesMainCardPicture,
} from './CommonStyles';
import NavigationButton from './NavigationButton';

type Props = {
  title?: string;
  descriptionDetailed?: string;
  picture?: string;
  id?: string | undefined;
  children?: ReactNode;
};
const ServicePageBlock = ({ descriptionDetailed, title, picture, id, children }: Props) => {
  return (
    <ServicePageBlockContainer id={id}>
      <ServiceCardTitle>{title}</ServiceCardTitle>
      <ServicesMainCardPicture src={picture} />
      <ServiceDerscriptionContainer>
        подробное описание: {descriptionDetailed}
      </ServiceDerscriptionContainer>
      {children}
      <NavigationButton link={'/'} label={'вернуться на главную страницу'} />
    </ServicePageBlockContainer>
  );
};

export default ServicePageBlock;
