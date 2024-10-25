'use client';

import { Box, Button, IconButton, List, Typography } from '@mui/material';

import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '@/shared/Input/Input';
import { ValidateLoginForm } from '@/components/LoginForm/ValidateLoginForm';
import { InputPassword } from '@/shared/InputPassword/InputPassword';
import { useLoginMutation } from '@/store/services/profile';
import { Loader } from '@/shared/Loader/Loader';
import notification from '@/utils/NotificationManager';
import { useTranslations } from 'use-intl';
import { useState } from 'react';
import { Modal } from '@/shared/Modal/Modal';
import { RegisterForm } from '@/components/RegisterForm/RegisterForm';
import CloseIcon from '@mui/icons-material/Close';

export interface LoginFormType {
    email: string;
    password: string;
}

export const LoginForm = ({ closeModal }: { closeModal: () => void }) => {
    const [isOpen, setIsOpen] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginFormType>({
        resolver: yupResolver(ValidateLoginForm),
        mode: 'onSubmit'
    });

    const [data, { isLoading }] = useLoginMutation();

    const t = useTranslations('LoginForm');

    const handleModalOpen = () => {
        setIsOpen(true);
    };

    const onSubmit: SubmitHandler<LoginFormType> = async (user) => {
        const response = await data(user);

        if (response.data) {
            closeModal();
            notification.showSuccess(t('success_message'));
        }
        if (response.error) notification.showError(t('error_message'));
    };

    if (isLoading) return <Loader />;

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} data-testid='loginForm'>
                <Typography textAlign='center' variant='h6' mt={3} mb={2}>
                    {t('title')}
                </Typography>
                <List sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <li>
                        <Input
                            name='email'
                            type='email'
                            label={t('email')}
                            placeholder={t('email')}
                            error={errors.email}
                            register={register}
                        />
                    </li>
                    <li>
                        <InputPassword
                            name='password'
                            label={t('password')}
                            placeholder={t('password')}
                            error={errors.password}
                            register={register}
                        />
                    </li>
                </List>
                <Button type='submit' sx={{ width: '100%', marginTop: '8px' }}>
                    <Typography>{t('btn_submit')}</Typography>
                </Button>
            </form>
            <Box display='flex' alignItems='center' justifyContent='center' mt={1}>
                <Typography textAlign='center' fontSize={10}>
                    {t('has_account')}
                </Typography>
                <Button
                    type='button'
                    sx={{ display: 'flex', alignItems: 'center' }}
                    onClick={handleModalOpen}
                >
                    <Typography fontSize={10}>{t('signUp')}</Typography>
                </Button>
            </Box>
            <Modal open={isOpen} handleClose={() => setIsOpen(false)}>
                <IconButton
                    sx={{ position: 'absolute', top: 8, right: 8 }}
                    onClick={() => setIsOpen(false)}
                >
                    <CloseIcon />
                </IconButton>
                <RegisterForm closeModal={() => setIsOpen(false)} />
            </Modal>
        </>
    );
};
