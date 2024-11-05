import React, { useState } from 'react';
import { PageWrapper } from './PagesStyles';
import Header from '../components/Header';
import Footer from '../components/Footer';

import 'react-responsive-modal/styles.css';
import { TravelTestData } from '../gamesComponents/gamesData/ArtTestsData';
import ArtTestCard from '../gamesComponents/ArtTestCard';
import { ArtTestContainer } from '../components/CommonStyles';
import TestContentsList from '../components/TestContentsList';
import CloseTestButton from '../components/CloseTestButton';

const GamesPage = () => {
  const [isModal, setIsModal] = useState(false);
  const [isTestOpen, setIsTestOpen] = useState(false);
  /*const [actualTestId, setActualTestId] = useState(0);*/

  /*const ActualTestData = (id: number) => {
    switch (true) {
      case id === 1:
        return PassionTestData;
      case id === 2:
        return TravelTestData;
      case id === 3:
        return 'drink coke';
      default:
        return 'drink toddy';
    }
  };
*/
  return (
    <PageWrapper>
      <Header />
      <>
        {!isTestOpen && (
          <TestContentsList
            onClick={() => {
              setIsTestOpen(true);
              //setActualTestId(1);
            }}
            id={0}
          />
        )}
        {isTestOpen && (
          <ArtTestContainer>
            <CloseTestButton
              onClick={(e) => {
                e.preventDefault();
                setIsTestOpen(false);
              }}
            />
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
        )}
      </>
      <Footer />
    </PageWrapper>
  );
};

export default GamesPage;
