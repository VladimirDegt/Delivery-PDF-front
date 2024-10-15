'use client';

import { Box, Typography } from '@mui/material';
import { useTranslations } from 'use-intl';

export const Footer = () => {
    const t = useTranslations('Footer');
    return (
        <Box
            component='footer'
            sx={{
                backgroundColor: 'rgb(48, 56, 70)',
                paddingTop: 3,
                paddingBottom: 3,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'fixed',
                bottom: 0,
                width: '100%'
            }}
            data-testid='footer'
        >
            <Typography variant='body2' color='#fff' data-testid='titleFooter'>
                {t('copyright')}
            </Typography>
        </Box>
    );
};
