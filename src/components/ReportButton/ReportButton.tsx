'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import cls from './ReportButton.module.scss';
import { useTranslations } from 'use-intl';

enum Route {
    HOME_UA = '/ua',
    HOME_EN = '/en',
    REPORT_UA = '/ua/report',
    REPORT_EN = '/en/report'
}

export const ReportButton = () => {
    const pathname = usePathname();
    const t = useTranslations('Header');

    const redirectMap: Record<string, string> = {
        [Route.HOME_UA]: Route.REPORT_UA,
        [Route.HOME_EN]: Route.REPORT_EN,
        [Route.REPORT_UA]: Route.HOME_UA,
        [Route.REPORT_EN]: Route.HOME_EN
    };

    const redirectTo = (pathname: string) => {
        return redirectMap[pathname] || pathname;
    };
    return (
        <Link href={redirectTo(pathname)} className={cls.btn} data-testid='bntReport'>
            {pathname === Route.HOME_UA || pathname === Route.HOME_EN ? (
                <ForwardToInboxIcon />
            ) : (
                <HomeIcon />
            )}
            <Typography>
                {pathname === Route.HOME_UA || pathname === Route.HOME_EN
                    ? t('redirect_report')
                    : t('redirect_home')}
            </Typography>
        </Link>
    );
};
