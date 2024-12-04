import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const NavBar: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isOnCoinPage = /\/\w+/.test(location.pathname);

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <AppBar position="fixed">
            <Toolbar sx={{ display: 'flex', justifyContent: 'flex-start', gap: '10px' }}>
                {isOnCoinPage && (
                    <Button startIcon={<ArrowBackIcon />} color="inherit" onClick={handleBack}>
                        
                    </Button>
                )}
                <Typography variant="h6">COINS</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
