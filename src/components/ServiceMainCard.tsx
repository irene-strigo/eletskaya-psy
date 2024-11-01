import React, { SetStateAction, useState } from 'react';
import {
  RedirectButton,
  ServiceCardContainer,
  ServiceCardTitle,
  ServiceDerscriptionContainer,
  ServicesMainCardPicture,
} from './CommonStyles';
import { Modal } from 'react-responsive-modal';

type Props = {
  title: string;
  descriptionShort?: string;
  picture?: string;
  onOpenClick: (e: React.MouseEvent<HTMLElement>) => void;
  id: SetStateAction<number>;
};

const ServiceMainCard = ({ onOpenClick, descriptionShort, title, picture, id }: Props) => {
  const [isModal, setIsModal] = useState(false);

  return (
    <>
      <Modal open={isModal} onClose={() => setIsModal(false)} center>
        <div
          onClick={() => {
            return onOpenClick;
          }}
        >
          <ServiceCardTitle>{title}</ServiceCardTitle>
          <ServicesMainCardPicture src={picture} />
          <ServiceDerscriptionContainer>
            краткое описание: {descriptionShort}{' '}
          </ServiceDerscriptionContainer>
        </div>
        <RedirectButton to={`/services/#section_${id}`} title="перейти">
          перейти
        </RedirectButton>
      </Modal>

      <ServiceCardContainer onClick={() => setIsModal(true)}>
        <ServiceCardTitle>{title}</ServiceCardTitle>
        <ServicesMainCardPicture src={picture} />
      </ServiceCardContainer>
    </>
  );
};

export default ServiceMainCard;
