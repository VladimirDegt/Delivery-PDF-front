'use client';

import { Box, Button, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslations } from 'use-intl';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { clearTextEmail, getTextEmail, setTextEmail } from '@/store/features/textEmailSlice';
import cls from './BlockTextEmail.module.scss';

interface ITextAreaForm {
    message: string;
}

export const BlockTextEmail = () => {
    const {
        handleSubmit,
        control,
        reset,
        formState: { errors }
    } = useForm<ITextAreaForm>({
        mode: 'onSubmit'
    });
    const textEmail = useSelector(getTextEmail);
    const t = useTranslations('BlockTextEmail');
    const dispatch = useDispatch();

    const messageValue = useWatch({ control, name: 'message', defaultValue: '' });

    const onSubmit = (data: ITextAreaForm) => dispatch(setTextEmail(data.message));
    const onClickBtnClear = () => {
        dispatch(clearTextEmail());
        reset({ message: '' });
    };

    return (
        <section className={cls.container} data-testid='formTextEmail'>
            <Box sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                <Typography variant='h6' fontSize='16px'>
                    {t('title')}
                </Typography>
            </Box>
            <form onSubmit={handleSubmit(onSubmit)} className={cls.container_form}>
                <Controller
                    name='message'
                    control={control}
                    defaultValue={textEmail}
                    rules={{
                        required: t('required'),
                        maxLength: {
                            value: 1000,
                            message: t('maxLengthError', { max: 1000 })
                        }
                    }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            multiline
                            rows={4}
                            fullWidth
                            label={t('placeholder')}
                            variant='outlined'
                            error={!!errors.message}
                            helperText={
                                errors.message
                                    ? errors.message.message
                                    : `${messageValue.length}/1000`
                            }
                        />
                    )}
                />
                {!textEmail && (
                    <Button
                        type='submit'
                        variant='contained'
                        color='success'
                        size='large'
                        sx={{ mt: 1, width: '100%' }}
                    >
                        {t('btn_submit')}
                    </Button>
                )}
            </form>
            {textEmail && (
                <Button
                    type='button'
                    variant='contained'
                    color='error'
                    size='large'
                    sx={{ width: '100%' }}
                    onClick={onClickBtnClear}
                >
                    {t('btn_clear')}
                </Button>
            )}
        </section>
    );
};
