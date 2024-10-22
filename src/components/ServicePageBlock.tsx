import React from 'react';
import { ServicesMainCardPicture } from './CommonStyles';

type Props = {
  title: string;
  descriptionDetailed?: string;
  picture?: string;
  id: string | undefined;
};
const ServicePageBlock = ({ descriptionDetailed, title, picture, id }: Props) => {
  return (
    <div id={id}>
      <h3>{title}</h3>
      <ServicesMainCardPicture src={picture} />
      <div>подробное описание: {descriptionDetailed}</div>
    </div>
  );
};

export default ServicePageBlock;
