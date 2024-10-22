import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { PageWrapper } from './PagesStyles';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-modal/styles.css';
import {
  Banner,
  BannerPortrait,
  HeadingBigText,
  HeadingSmallText,
  MainBannerHeading,
  MainWrapper,
  Services,
  SliderBlockContainer,
  SliderPicture,
  SliderText,
} from '../components/CommonStyles';
import { ServicesData } from '../PersonalDataInfo/ServicesData';
import ServiceMainCard from '../components/ServiceMainCard';
const MainPage = () => {
  const [isModal, setIsModal] = useState(false);
  return (
    <PageWrapper>
      <Header />
      <MainWrapper>
        <Banner>
          <BannerPortrait src="/assets/images/jpgs/banner-portrait1.jpg"></BannerPortrait>
          <MainBannerHeading>
            <div>
              <HeadingBigText>Валерия Елецкая</HeadingBigText>
              <HeadingSmallText>
                <ul>
                  <li>Практикующий психолог</li>
                  <li>Психолог-тренер</li>
                  <li> Автор диагностики личности</li>
                  <li>Спикер</li>
                </ul>
              </HeadingSmallText>
            </div>
          </MainBannerHeading>
        </Banner>
        <Services>
          {ServicesData.map((data) => {
            return (
              <ServiceMainCard
                key={data.id}
                link={`/services#${data.id}`}
                onOpenClick={() => {
                  if (isModal) setIsModal(true);
                }}
                title={data.title}
                descriptionShort={data.descriptionShort}
                picture={`/assets/Icons/${data.picture}.png`}
              ></ServiceMainCard>
            );
          })}
        </Services>
        <Carousel
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
        >
          <div>
            <SliderBlockContainer>
              <SliderPicture src="/assets/images/jpgs/slider-portrait1.jpg" />
              <SliderText>
                Люди довольно часто входят в отношения даже не из-за страха одиночества, а из-за
                того, что им с собой невыносимо. Они постоянно нападают на себя, критикуют,
                припоминают ошибки и упущенные возможности, но…как только вы сможете договориться с
                Внутренним зверем-критиком и найдете в сердце больше тепла и любви для себя, то
                внутри станет спокойно, тихо, безопасно и светло. Из этого состояния вам уже не
                потребуются «какие-нибудь» люди для «каких-нибудь» отношений. Звучать искренне
                станет намного проще, а уязвимость вы уже не будете больше считать слабостью, а
                скорее огромной силой, настоящим искусством быть живым человеком.
              </SliderText>
            </SliderBlockContainer>
          </div>
          <div>
            <SliderBlockContainer>
              <SliderPicture src="/assets/images/jpgs/slider-portrait2.jpg" />
              <SliderText>
                Каждый человек – изобретатель. Ему предстоит изобрести свою жизнь, семью, профессию,
                окружение.
              </SliderText>
            </SliderBlockContainer>
          </div>
          <div>
            <SliderBlockContainer>
              <SliderPicture src="/assets/images/jpgs/slider-portrait3.jpg" />
              <SliderText>
                В вопросе «Как сделать легко?» все-таки живет глагол. Действовать и можно, и важно,
                но вот каким именно способом – выбор остается за человеком.
              </SliderText>
            </SliderBlockContainer>
          </div>
        </Carousel>
      </MainWrapper>
      <Footer />
    </PageWrapper>
  );
};

export default MainPage;
