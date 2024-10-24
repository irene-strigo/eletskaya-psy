import React from 'react';
import { CertificateImage } from './CommonStyles';

type Props = {
  id: number;
  picture: string;
  description?: string;
};

const EducationMainCard = ({ id, picture }: Props) => {
  return (
    <div id={String(id)}>
      <CertificateImage src={`/assets/images/jpgs/${picture}.jpg`}></CertificateImage>
    </div>
  );
};

export default EducationMainCard;
