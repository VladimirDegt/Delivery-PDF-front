import { AppBar, Box, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import { LoginButton } from '@/components/LoginButton/LoginButton';
import Logo from '../../../public/assets/favicon/logo.png';
import cls from './Header.module.scss';
import { NavigationBlock } from '@/components/NavigationBlock/NavigationBlock';
import { LanguageButton } from '@/components/LanguageButton/LanguageButton';

export const Header = () => {
    return (
        <AppBar position='fixed' data-testid='header'>
            <nav className={cls.container_nav}>
                <Link href='#' className={cls.link} rel='noopener noreferrer'>
                    <Button>
                        <Image src={Logo} alt='Logo' className={cls.logo} data-testid='logo' />
                    </Button>
                </Link>
                <NavigationBlock />
                <Box display='flex' alignItems='center' gap={2} height={80}>
                    <LanguageButton />
                    <LoginButton />
                </Box>
            </nav>
        </AppBar>
    );
};
