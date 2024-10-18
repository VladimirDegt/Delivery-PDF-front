import { FieldError, FieldErrorsImpl, Merge, UseFormRegister } from 'react-hook-form';
import { Box, IconButton, Typography } from '@mui/material';
import { useState } from 'react';

import cls from './InputPassword.module.scss';
import { LoginFormType } from '@/components/LoginForm/LoginForm';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useTranslations } from 'use-intl';

export type InputPasswordType = {
    name: 'email' | 'password';
    label: string;
    placeholder: string;
    error: Merge<FieldError, FieldErrorsImpl<{ name: string }>> | undefined;
    register: UseFormRegister<LoginFormType>;
};

export const InputPassword = (props: InputPasswordType) => {
    const { name, label, placeholder, error, register } = props;
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const t = useTranslations('Input');

    return (
        <Box>
            <label htmlFor={name}>
                <Typography>{label}</Typography>
            </label>
            <input
                id={name}
                type={isPasswordVisible ? 'text' : 'password'}
                {...register(name)}
                placeholder={placeholder}
                className={cls.input}
            />
            <IconButton
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                className={cls.icon_eye}
            >
                {isPasswordVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </IconButton>
            {error && (
                <Typography fontSize={12} className={cls.error}>
                    {t(error.message)}
                </Typography>
            )}
        </Box>
    );
};
