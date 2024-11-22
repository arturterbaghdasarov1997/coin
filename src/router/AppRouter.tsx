import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CoinPage from '../pages/CoinPage';
import { ICoin, IBpiCurrency } from '../interfaces/coin.interface';

const AppRouter: React.FC = () => {
  const [coinData, setCoinData] = useState<ICoin | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        setCoinData(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCoinData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const isOnCoinPage = location.pathname !== '/';

  return (
    <Routes>
      <Route path="/" element={coinData && <HomePage coinData={coinData} />} />
      <Route
        path="/:currency"
        element={isOnCoinPage && coinData && <CoinPage bpiData={coinData.bpi} />}
      />
    </Routes>
  );
};

export default AppRouter;
