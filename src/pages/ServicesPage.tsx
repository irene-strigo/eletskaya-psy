import React from 'react';
import { Header, Footer } from '../components';
import { PageWrapper } from './PagesStyles';
import ServicePageBlock from '../components/ServicePageBlock';
import { ServicesData } from '../PersonalDataInfo/ServicesData';

const ServicesPage = () => {
  return (
    <PageWrapper>
      <Header />

      <div>
        {ServicesData.map((data) => {
          return (
            <ServicePageBlock
              key={data.id}
              id={String(data.id)}
              title={data.title}
              descriptionDetailed={data.descriptionDetailed}
              picture={`/assets/Icons/${data.picture}.png`}
            ></ServicePageBlock>
          );
        })}
      </div>
      <Footer />
    </PageWrapper>
  );
};

export default ServicesPage;
