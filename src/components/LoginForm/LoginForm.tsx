'use client';

import { Button, List, Typography } from '@mui/material';

import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '@/shared/Input/Input';
import { ValidateLoginForm } from '@/components/LoginForm/ValidateLoginForm';
import { InputPassword } from '@/shared/InputPassword/InputPassword';
import { useLoginMutation } from '@/store/services/profile';
import { Loader } from '@/shared/Loader/Loader';
import notification from '@/utils/NotificationManager';

export interface LoginFormType {
    email: string;
    password: string;
}

const MESSAGE_SUCCESS = 'Вхід успішний';
const MESSAGE_ERROR = 'Невірний логін або пароль';

export const LoginForm = ({ closeModal }: { closeModal: () => void }) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginFormType>({
        resolver: yupResolver(ValidateLoginForm),
        mode: 'onSubmit'
    });

    const [data, { isLoading }] = useLoginMutation();

    const onSubmit: SubmitHandler<LoginFormType> = async (user) => {
        const response = await data(user);
        console.log('response', response);
        if (response.data) {
            closeModal();
            notification.showSuccess(MESSAGE_SUCCESS);
        }
        if (response.error) notification.showError(MESSAGE_ERROR);
    };

    if (isLoading) return <Loader />;

    return (
        <form onSubmit={handleSubmit(onSubmit)} data-testid='loginForm'>
            <Typography textAlign='center' variant='h6' mt={3} mb={2}>
                Увійдіть до свого акаунта
            </Typography>
            <List sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <li>
                    <Input
                        name='email'
                        type='email'
                        label='Email'
                        placeholder='Email'
                        error={errors.email}
                        register={register}
                    />
                </li>
                <li>
                    <InputPassword
                        name='password'
                        label='Пароль'
                        placeholder='Пароль'
                        error={errors.password}
                        register={register}
                    />
                </li>
            </List>
            <Button type='submit' sx={{ width: '100%' }}>
                <Typography>Вхід</Typography>
            </Button>
        </form>
    );
};
