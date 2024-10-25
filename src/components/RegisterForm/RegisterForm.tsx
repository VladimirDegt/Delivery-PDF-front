'use client';

import { Button, List, Typography } from '@mui/material';

import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

import { Input } from '@/shared/Input/Input';
import { InputPassword } from '@/shared/InputPassword/InputPassword';
import { useTranslations } from 'use-intl';
import { ValidateRegisterForm } from '@/components/RegisterForm/ValidateRegisterForm';
import { useRegisterMutation } from '@/store/services/profile';
import notification from '@/utils/NotificationManager';
import { Loader } from '@/shared/Loader/Loader';

export interface RegisterFormType {
    username: string;
    email: string;
    password: string;
}

export const RegisterForm = ({ closeModal }: { closeModal: () => void }) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<RegisterFormType>({
        resolver: yupResolver(ValidateRegisterForm),
        mode: 'onSubmit'
    });

    const [data, { isLoading }] = useRegisterMutation();

    const t = useTranslations('RegisterForm');

    const onSubmit: SubmitHandler<RegisterFormType> = async (user) => {
        const response = await data(user);
        if (response.error) {
            const error = response.error as FetchBaseQueryError;
            if ('status' in error) {
                if (error.status === 409) {
                    notification.showError(t('error_message'));
                } else {
                    notification.showError(t('generic_error_message'));
                }
            } else {
                notification.showError(t('generic_error_message'));
            }
        } else if (response.data) {
            closeModal();
            notification.showSuccess(t('success_message'));
        }
    };

    if (isLoading) return <Loader />;

    return (
        <form onSubmit={handleSubmit(onSubmit)} data-testid='registerForm'>
            <Typography textAlign='center' variant='h6' mt={3} mb={2}>
                {t('title')}
            </Typography>
            <List sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <li>
                    <Input
                        name='username'
                        type='text'
                        label={t('username')}
                        placeholder={t('username')}
                        error={errors.username}
                        register={register}
                    />
                </li>
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
    );
};
