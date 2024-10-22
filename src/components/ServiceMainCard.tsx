import React, { useState } from 'react';
import { ServiceCardContainer, ServicesMainCardPicture } from './CommonStyles';
import { Modal } from 'react-responsive-modal';

type Props = {
  title: string;
  descriptionShort?: string;
  picture?: string;
  onOpenClick: (e: React.MouseEvent<HTMLElement>) => void;

  link: string;
};
const ServiceMainCard = ({ onOpenClick, descriptionShort, title, picture, link }: Props) => {
  const [isModal, setIsModal] = useState(false);
  return (
    <>
      <Modal open={isModal} onClose={() => setIsModal(false)} center>
        <div onClick={onOpenClick}>
          <h3>{title}</h3>
          <ServicesMainCardPicture src={picture} />
          <div>краткое описание: {descriptionShort} </div>
        </div>
        <a href={`${link}`}>перейти к подробному описанию</a>
      </Modal>

      <ServiceCardContainer onClick={() => setIsModal(true)}>
        <h3>{title}</h3>
        <ServicesMainCardPicture src={picture} />
      </ServiceCardContainer>
    </>
  );
};

export default ServiceMainCard;
