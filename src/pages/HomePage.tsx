import React from 'react';
import { Box, Typography } from '@mui/material';
import NavBar from '../components/NavBar';
import { ICoin } from '../interfaces/coin.interface';
import { Link } from 'react-router-dom';

interface CoinProps {
  coinData: ICoin;
}

const HomePage: React.FC<CoinProps> = ({ coinData }) => {
  const { time, disclaimer, chartName, bpi } = coinData;

  return (
    <Box>
      <NavBar />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px', padding: '50px' }}>
        {Object.entries(time).map(([key, value]) => (
          <Typography key={key} variant="h6">
            {`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`}
          </Typography>
        ))}
        <Typography variant="h4">{disclaimer}</Typography>
        <Typography variant="h1">{chartName}</Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-evenly', padding: '20px' }}>
        {Object.entries(bpi).map(([currency, details]) => (
          <Link to={`/${currency}`} key={currency} style={{ textDecoration: 'none' }}>
            <Typography variant="h1">{details.code}</Typography>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default HomePage;
