import React, { SetStateAction, useState } from 'react';
import {
  RedirectButton,
  ServiceCardContainer,
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
          <h3>{title}</h3>
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
        <h3>{title}</h3>
        <ServicesMainCardPicture src={picture} />
      </ServiceCardContainer>
    </>
  );
};

export default ServiceMainCard;
