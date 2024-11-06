import React, { useState } from 'react';
import { PageWrapper } from './PagesStyles';
import Header from '../components/Header';
import Footer from '../components/Footer';

import 'react-responsive-modal/styles.css';
import {
  LoveLangData,
  PassionTestData,
  TravelTestData,
} from '../gamesComponents/gamesData/ArtTestsData';
import ArtTestCard from '../gamesComponents/ArtTestCard';
import { ArtTestContainer, GamesPageWrapper } from '../components/CommonStyles';
import TestContentsList from '../components/TestContentsList';
import CloseTestButton from '../components/CloseTestButton';

const GamesPage = () => {
  const [isModal, setIsModal] = useState(false);
  const [isTestOpen, setIsTestOpen] = useState(false);

  const [actualTestId, setActualTestId] = useState(0);

  const ActualTestData = (id: number) => {
    switch (true) {
      case id === 1:
        return TravelTestData;
      case id === 2:
        return PassionTestData;
      case id === 3:
        return LoveLangData;
      default:
        return null;
    }
  };

  return (
    <PageWrapper>
      <Header />
      <GamesPageWrapper>
        {!isTestOpen && (
          <TestContentsList
            onClick={(e) => {
              setIsTestOpen(true);
              setActualTestId(Number(e.currentTarget.id));
            }}
            id={actualTestId}
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
            {ActualTestData(actualTestId)?.map((data) => {
              return (
                <>
                  <div>{data.heading}</div>
                  <ArtTestCard
                    key={data.id}
                    onClick={() => {
                      if (isModal) setIsModal(true);
                    }}
                    picture={`/assets/gamesPictures/artTestsPictures/${data.picture}.jpg`}
                    description={data.description}
                  />
                </>
              );
            })}
          </ArtTestContainer>
        )}
      </GamesPageWrapper>
      <Footer />
    </PageWrapper>
  );
};

export default GamesPage;
