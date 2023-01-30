import React, { useEffect } from 'react';
import Navbar from '../../common/Navbar';
import Banner from '../../components/Banner';
import Features from '../../components/Features';
import Category from '../../components/ Category';

export const HomePage = () => {
  return (
    <>
      <Banner />
      <Features />
      <Category />
    </>
  );
};
