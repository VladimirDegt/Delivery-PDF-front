'use client';

import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Dayjs } from 'dayjs';

import cls from './RangeDateForm.module.scss';
import { Date } from '@/shared/Date/Date';
import { Box, IconButton, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import notification from '@/utils/NotificationManager';
import { useTranslations } from 'use-intl';
import { useGetDocumentByDateMutation } from '@/store/services/document';
import { Spinner } from '@/shared/Spinner/Spinner';

export interface IRangeDateForm {
    dateStart: Dayjs | null;
    dateEnd: Dayjs | null;
}

export const RangeDateForm = () => {
    const { handleSubmit, control, reset } = useForm<IRangeDateForm>({
        mode: 'onSubmit'
    });
    const [getDocuments, { isLoading }] = useGetDocumentByDateMutation();
    const t = useTranslations('RangeDateForm');

    const handleClearDates = () => reset({ dateStart: null, dateEnd: null });

    const onSubmit: SubmitHandler<IRangeDateForm> = async (data) => {
        const formatStartDate = data.dateStart?.format('YYYY-MM-DD');
        const formatEndDate = data.dateEnd?.format('YYYY-MM-DD');
        if (!formatEndDate || !formatStartDate) {
            notification.showError(t('message_choose_date'));
            return;
        }
        try {
            await getDocuments({
                dates: {
                    formatStartDate,
                    formatEndDate
                }
            });
        } catch (_) {
            notification.showError('Упс, щось пішло не так');
        }
    };

    if (isLoading)
        return (
            <search className={cls.container}>
                <Spinner color='#1976d2' size='30px' />
            </search>
        );
    return (
        <search className={cls.container}>
            <Typography variant='h6' fontSize='16px' mb={1} sx={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                {t('title')}
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)} className={cls.container_form}>
                <ul className={cls.container_list}>
                    <li>
                        <Controller
                            name='dateStart'
                            control={control}
                            render={({ field }) => <Date label={t('start')} field={field} />}
                        />
                    </li>
                    <li>
                        <Controller
                            name='dateEnd'
                            control={control}
                            render={({ field }) => <Date label={t('end')} field={field} />}
                        />
                    </li>
                </ul>
                <Box display='flex'>
                    <IconButton color='primary' type='submit' size='small'>
                        <SearchIcon sx={{ fill: '#2e7d32' }} />
                    </IconButton>
                    <IconButton
                        color='primary'
                        type='button'
                        size='small'
                        onClick={handleClearDates}
                    >
                        <ClearIcon sx={{ fill: '#c62828' }} />
                    </IconButton>
                </Box>
            </form>
        </search>
    );
};
