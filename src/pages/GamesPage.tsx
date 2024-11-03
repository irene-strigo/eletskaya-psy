import React, { useState } from 'react';
import { PageWrapper } from './PagesStyles';
import Header from '../components/Header';
import Footer from '../components/Footer';

import 'react-responsive-modal/styles.css';
import { TravelTestData } from '../gamesComponents/gamesData/ArtTestsData';
import ArtTestCard from '../gamesComponents/ArtTestCard';
import { ArtTestContainer } from '../components/CommonStyles';

const GamesPage = () => {
  const [isModal, setIsModal] = useState(false);
  return (
    <PageWrapper>
      <Header />

      <>
        <ArtTestContainer>
          {TravelTestData.map((data) => {
            return (
              <ArtTestCard
                key={data.id}
                onClick={() => {
                  if (isModal) setIsModal(true);
                }}
                picture={`/assets/gamesPictures/artTestsPictures/${data.picture}.jpg`}
                description={data.description}
              />
            );
          })}
        </ArtTestContainer>
      </>
      <Footer />
    </PageWrapper>
  );
};

export default GamesPage;
