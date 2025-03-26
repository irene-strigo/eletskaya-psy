import React, { useState } from 'react';
import { PageWrapper } from './PagesStyles';
import Header from '../components/Header';
import Footer from '../components/Footer';

import 'react-responsive-modal/styles.css';
import {
  BraveData,
  LoveLangData,
  PassionTestData,
  TravelTestData,
} from '../gamesComponents/gamesData/ArtTestsData';
import ArtTestCard from '../gamesComponents/ArtTestCard';
import {
  ArtTestBannerPicture,
  ArtTestContainer,
  ArtTestTextContainer,
  BannerPortrait,
  GamesPageWrapper,
  ItalicText,
  TestButtonContainer,
  TestimonialsCardText,
  TextBlockContainer,
} from '../components/CommonStyles';
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
      case id === 4:
        return BraveData;
      default:
        return null;
    }
  };

  return (
    <PageWrapper>
      <Header />

      <GamesPageWrapper>
        {!isTestOpen && (
          <>
            <TextBlockContainer>
              <ItalicText>
                Термин «арт-терапия» (буквально: лечение искусством) ввёл в употребление художник
                Адриан Хилл в 1938 году при описании своей работы с туберкулезными больными в
                санаториях. Эти методы были применены в США в работе с детьми, вывезенными из
                нацистских лагерей во время Второй мировой войны. В начале своего развития
                арт-терапия отражала психоаналитические взгляды З. Фрейда и К. Г. Юнга, по которым
                конечный продукт художественной деятельности клиента (будь то рисунок, скульптура,
                инсталляция) выражает его неосознаваемые психические процессы. В 1969 г. в Америке
                была создана Американская арт-терапевтическая ассоциация.
              </ItalicText>
            </TextBlockContainer>
            <ArtTestBannerPicture src="/assets/images/jpgs/art-test-banner.jpg"></ArtTestBannerPicture>
            <TestContentsList
              onClick={(e) => {
                setIsTestOpen(true);
                setActualTestId(Number(e.currentTarget.id));
              }}
              id={actualTestId}
            />
          </>
        )}
        {isTestOpen && (
          <>
            <ArtTestContainer>
              <TestButtonContainer>
                <CloseTestButton
                  onClick={(e) => {
                    e.preventDefault();
                    setIsTestOpen(false);
                  }}
                  title={'вернуться к оглавлению'}
                />
                <TestimonialsCardText>Для выбора картинки нажмите на неё</TestimonialsCardText>
              </TestButtonContainer>
              {ActualTestData(actualTestId)?.map((data) => {
                return (
                  <>
                    <ArtTestTextContainer>{data.heading}</ArtTestTextContainer>

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
          </>
        )}
      </GamesPageWrapper>
      <Footer />
    </PageWrapper>
  );
};

export default GamesPage;
