import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { IBpiCurrency } from '../interfaces/coin.interface';
import NavBar from '../components/NavBar';

interface BpiProps {
  bpiData: { [key: string]: IBpiCurrency };
}

const CoinPage: React.FC<BpiProps> = ({ bpiData }) => {
  const { currency } = useParams();

  if (!currency || !bpiData[currency]) {
    return <div>Invalid currency</div>;
  }

  const { code, symbol, rate, description, rate_float } = bpiData[currency];

  return (
    <Box>
      <NavBar />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', border: 'solid 2px blue', borderRadius: '10px', padding: '25px' }}>
        <Typography variant="h4">{code}</Typography>
        <Typography variant="h6">
            Symbol: {symbol}
        </Typography>
        <Typography variant="h6">
            Rate: {rate}
        </Typography>
        <Typography variant="body1">Description: {description}</Typography>
        <Typography variant="body2">Rate Float: {rate_float}</Typography>
      </Box>
    </Box>
  );
};

export default CoinPage;
