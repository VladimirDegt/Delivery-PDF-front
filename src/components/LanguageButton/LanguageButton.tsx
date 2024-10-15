'use client';

import { useTransition } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import LanguageIcon from '@mui/icons-material/Language';
import { Box, Typography } from '@mui/material';

import cls from './LanguageButton.module.scss';
import { useTranslations } from 'use-intl';
import { Spinner } from '@/shared/Spinner/Spinner';

export const LanguageButton = () => {
    const [isPending, startTransition] = useTransition();
    const t = useTranslations('Header');
    const router = useRouter();
    const pathname = usePathname();
    const localActive = useLocale();

    const handleSwitcher = () => {
        const newLocale = localActive === 'ua' ? 'en' : 'ua';
        const pathWithoutLocale = pathname.replace(`/${localActive}`, '');
        const newPath = `/${newLocale}${pathWithoutLocale}`;
        startTransition(() => {
            router.replace(newPath);
        });
    };

    if (isPending)
        return (
            <Box display='flex' alignItems='center' justifyContent='center' className={cls.btn}>
                <Spinner color='#fafafa' size='30px' />
            </Box>
        );

    return (
        <button className={cls.btn} onClick={handleSwitcher} data-testid='bntLang'>
            <LanguageIcon />
            <Typography>{t('language')}</Typography>
        </button>
    );
};
