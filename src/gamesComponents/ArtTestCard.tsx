import React, { useState } from 'react';
import {
  ArtTestCardContainer,
  ArtTestCardPicture,
  ServiceCardTitle,
  ServiceDerscriptionContainer,
  ServicesMainCardPicture,
} from '../components/CommonStyles';
import Modal from 'react-responsive-modal';

type Props = {
  id?: number;
  picture: string;
  heading?: string;
  description?: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
};

const ArtTestCard = ({ picture, onClick, heading, description }: Props) => {
  const [isModal, setIsModal] = useState(false);
  return (
    <>
      <Modal open={isModal} onClose={() => setIsModal(false)} center>
        <div
          onClick={() => {
            return onClick;
          }}
        >
          <ServiceCardTitle>{heading}</ServiceCardTitle>
          <ServicesMainCardPicture src={picture} />
          <ServiceDerscriptionContainer>{description}</ServiceDerscriptionContainer>
        </div>
      </Modal>

      <ArtTestCardContainer onClick={() => setIsModal(true)}>
        <ServiceCardTitle>{heading}</ServiceCardTitle>
        <ArtTestCardPicture src={picture} />
      </ArtTestCardContainer>
    </>
  );
};

export default ArtTestCard;
