import React, { useEffect, useState } from 'react';
import Navbar from '../../common/Navbar';
import Banner from '../../components/Banner';
import Features from '../../components/Features';
import Category from '../../components/ Category';
import LoadingPage from '../LoadingPage';

export const HomePage = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 500);
  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          <Banner />
          <Features />
          <Category />
        </>
      )}
    </>
  );
};
