import React, { useState } from 'react';
import {
  ArtTestCardContainer,
  ArtTestCardPicture,
  ModalBigTestPicture,
  ModalButtonsContainer,
  ServiceDerscriptionContainer,
  ServicesMainCardPicture,
} from '../components/CommonStyles';
import Modal from 'react-responsive-modal';
import CloseTestButton from '../components/CloseTestButton';

type Props = {
  id?: number;
  picture: string;
  heading?: string;
  description?: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
};

const ArtTestCard = ({ picture, onClick, description }: Props) => {
  const [isModal, setIsModal] = useState(false);
  const [isKeyOpen, setisKeyOpen] = useState(false);
  return (
    <>
      <Modal
        open={isModal}
        onClose={() => {
          setIsModal(false);
        }}
        center
      >
        <div
          onClick={() => {
            return onClick;
          }}
        >
          {!isKeyOpen && (
            <>
              <ModalBigTestPicture src={picture} />
              <ModalButtonsContainer>
                <CloseTestButton
                  onClick={(e) => {
                    e.preventDefault();
                    setIsModal(false);
                  }}
                  title={'вернуться к тесту'}
                />
                <CloseTestButton
                  onClick={(e) => {
                    e.preventDefault();
                    setisKeyOpen(true);
                  }}
                  title={'выбрать этот вариант'}
                />
              </ModalButtonsContainer>
            </>
          )}
          {isKeyOpen && (
            <>
              <ServicesMainCardPicture src={picture} />
              <ServiceDerscriptionContainer>{description}</ServiceDerscriptionContainer>
            </>
          )}
        </div>
      </Modal>

      <ArtTestCardContainer
        onClick={() => {
          setIsModal(true);
          setisKeyOpen(false);
        }}
      >
        <ArtTestCardPicture src={picture} />
      </ArtTestCardContainer>
    </>
  );
};

export default ArtTestCard;
