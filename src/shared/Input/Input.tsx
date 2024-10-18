import { FieldError, FieldErrorsImpl, Merge, UseFormRegister } from 'react-hook-form';
import { Box, Typography } from '@mui/material';

import cls from './Input.module.scss';
import { LoginFormType } from '@/components/LoginForm/LoginForm';
import { useTranslations } from 'use-intl';

export type InputType = {
    name: 'email' | 'password' | 'username';
    type: string;
    label: string;
    placeholder: string;
    error: Merge<FieldError, FieldErrorsImpl<{ name: string }>> | undefined;
    register: UseFormRegister<LoginFormType>;
};

export const Input = (props: InputType) => {
    const { name, type, label, placeholder, error, register } = props;
    const t = useTranslations('Input');

    return (
        <Box>
            <label htmlFor={name}>
                <Typography>{label}</Typography>
            </label>
            <input
                id={name}
                type={type}
                {...register(name)}
                placeholder={placeholder}
                className={cls.input}
            />
            {error && (
                <Typography fontSize={12} className={cls.error}>
                    {t(error.message)}
                </Typography>
            )}
        </Box>
    );
};
