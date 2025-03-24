import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ContentWrapper, PageWrapper } from './PagesStyles';

const AboutMePage = () => {
  return (
    <PageWrapper>
      <Header />
      <ContentWrapper>
        <h4>
          Меня зовут Лера Елецкая. Я - психолог, соавтор клуба ARTIZAN. Веду лекции, консультации
          онлайн и очно.
        </h4>
        <p>
          Моя опора - работа с людьми. Когда я вижу, что клиент уходит из кабинета с улыбкой. Как
          разорванный на куски, он собирается в целое. Как он снова может смеяться и чувствовать
          себя живым.
        </p>
        <p>
          Mы сейчас входим в эпоху перемен в глобальном смысле. И психология тоже должна измениться.
          Нет уже больше времени на долгие "раскопки" прошлого, накопление обид, нет душевных сил
          идти через боль к возможному освобождению. Пришло время быстрых, но КАЧЕСТВЕННЫХ решений.
          Бережных, но ДЕЙСТВУЮЩИХ методик.
        </p>
      </ContentWrapper>
      <Footer />
    </PageWrapper>
  );
};

export default AboutMePage;
