import { FieldError, FieldErrorsImpl, Merge, UseFormRegister } from 'react-hook-form';
import { Box, Typography } from '@mui/material';

import cls from './Input.module.scss';
import { LoginFormType } from '@/components/LoginForm/LoginForm';

export type InputType = {
    name: 'email' | 'password';
    type: string;
    label: string;
    placeholder: string;
    error: Merge<FieldError, FieldErrorsImpl<{ name: string }>> | undefined;
    register: UseFormRegister<LoginFormType>;
};

export const Input = (props: InputType) => {
    const { name, type, label, placeholder, error, register } = props;

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
            {error && <Typography className={cls.error}>{error.message}</Typography>}
        </Box>
    );
};
