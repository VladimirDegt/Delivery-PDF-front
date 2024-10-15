'use client';

import { Typography } from '@mui/material';
import { useTranslations } from 'use-intl';

export const Title = ({ translationKey }: { translationKey: string }) => {
    const t = useTranslations();
    return (
        <Typography variant='h1' fontSize='32px' mb={2} mt={12} align='center'>
            {t(translationKey)}
        </Typography>
    );
};
