import React, { useEffect } from 'react';
import { Header, Footer } from '../components';
import { PageWrapper } from './PagesStyles';
import ServicePageBlock from '../components/ServicePageBlock';
import { ServicesData } from '../PersonalDataInfo/ServicesData';
import { Link, useLocation } from 'react-router-dom';

const ServicesPage = () => {
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      const sectionId = Number((location.hash || '').substring(9)) || 0;
      if (sectionId) {
        const element = document.getElementById(`section_${sectionId}`);
        element?.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }, 100);
  }, [location]);

  return (
    <PageWrapper>
      <Header />
      <div>
        {ServicesData.map((data) => {
          return (
            <ServicePageBlock
              key={data.id}
              id={'section_' + String(data.id)}
              title={data.title}
              descriptionDetailed={data.descriptionDetailed}
              picture={`/assets/Icons/${data.picture}.png`}
            >
              <Link to={`/services/${data.id}`}></Link>
            </ServicePageBlock>
          );
        })}
      </div>
      <Footer />
    </PageWrapper>
  );
};

export default ServicesPage;
