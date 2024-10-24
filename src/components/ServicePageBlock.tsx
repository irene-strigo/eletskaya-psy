import React, { ReactNode } from 'react';
import {
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
      <h3>{title}</h3>
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
