'use client';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { IconButton, Typography } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

import cls from './LoginButton.module.scss';
import { Modal } from '@/shared/Modal/Modal';
import CloseIcon from '@mui/icons-material/Close';
import LogoutIcon from '@mui/icons-material/Logout';
import { LoginForm } from '@/components/LoginForm/LoginForm';
import { getToken } from '@/store/features/profileSlice';
import { Loader } from '@/shared/Loader/Loader';
import { useTranslations } from 'use-intl';
import { useLazyLogoutQuery } from '@/store/services/profile';

export const LoginButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [triggerLogout, { isLoading }] = useLazyLogoutQuery();
    const token = useSelector(getToken);
    const t = useTranslations('Header');

    const handleModalOpen = () => {
        if (token) {
            triggerLogout({});
            return;
        }
        setIsOpen(true);
    };

    if (isLoading)
        return (
            <div className={cls.loader}>
                <Loader />
            </div>
        );

    return (
        <>
            <button
                className={token ? cls.btn_logout : cls.btn_login}
                data-testid='bntLogin'
                onClick={handleModalOpen}
            >
                {token ? <LogoutIcon /> : <LoginIcon />}
                <Typography>{token ? t('logout') : t('login')}</Typography>
            </button>
            <Modal open={isOpen} handleClose={() => setIsOpen(false)}>
                <IconButton
                    sx={{ position: 'absolute', top: 8, right: 8 }}
                    onClick={() => setIsOpen(false)}
                >
                    <CloseIcon />
                </IconButton>
                <LoginForm closeModal={() => setIsOpen(false)} />
            </Modal>
        </>
    );
};
