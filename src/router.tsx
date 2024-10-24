import React from 'react';

import { createBrowserRouter } from 'react-router-dom';

import { MainPage } from './pages';

import AboutMePage from './pages/AboutMePage';
import ServicesPage from './pages/ServicesPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactsPage from './pages/ContactsPage';
import GamesPage from './pages/GamesPage';
import ArticlesPage from './pages/ArticlesPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },

  {
    path: '/main',
    element: <MainPage />,
  },
  {
    path: '/about-me',
    element: <AboutMePage />,
  },

  {
    path: '/services',
    element: <ServicesPage />,
  },

  {
    path: '/contacts',
    element: <ContactsPage />,
  },

  {
    path: '/testimonials',
    element: <TestimonialsPage />,
  },
  {
    path: '/articles',
    element: <ArticlesPage />,
  },
  {
    path: '/games',
    element: <GamesPage />,
  },
]);
