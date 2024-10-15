'use client';

import {
    Box,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    Typography
} from '@mui/material';
import { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';

import cls from './BlockChooseEmailTo.module.scss';
import { clearEmailTo, setEmailTo } from '@/store/features/chooseEmailToSlice';
import { useTranslations } from 'use-intl';

export const BlockChooseEmailTo = () => {
    const t = useTranslations('BlockChooseEmailTo');
    const [value, setValue] = useState<string>(t('email_in_document'));
    const dispatch: AppDispatch = useDispatch();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue((e.target as HTMLInputElement).value);
        dispatch(clearEmailTo());
    };

    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => dispatch(setEmailTo(e.target.value));

    return (
        <search className={cls.container} data-testid='formChooseEmailTo'>
            <FormControl>
                <FormLabel id='demo-controlled-radio-buttons-group'>{t('title')}</FormLabel>
                <RadioGroup
                    aria-labelledby='demo-controlled-radio-buttons-group'
                    name='controlled-radio-buttons-group'
                    value={value}
                    onChange={handleChange}
                >
                    <FormControlLabel
                        value={t('email_in_document')}
                        control={<Radio />}
                        label={
                            <Box sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                                <Typography variant='h6' fontSize='16px'>
                                    {t('email_in_document')}
                                </Typography>
                            </Box>
                        }
                    />
                    <FormControlLabel
                        value={t('custom_email')}
                        control={<Radio />}
                        label={
                            <Box sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                                <Typography variant='h6' fontSize='16px'>
                                    {t('custom_email')}
                                </Typography>
                            </Box>
                        }
                    />
                </RadioGroup>
            </FormControl>
            {value === t('custom_email') && (
                <Box position='relative'>
                    <input
                        type='email'
                        placeholder={t('placeholder')}
                        required={true}
                        className={cls.email}
                        onChange={handleEmail}
                    />
                </Box>
            )}
        </search>
    );
};
