'use client';

import { useDispatch, useSelector } from 'react-redux';
import {
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    TableSortLabel
} from '@mui/material';
import { useTranslations } from 'use-intl';
import { useState, useTransition } from 'react';

import { useGetLastDocumentQuery } from '@/store/services/document';
import { Loader } from '@/shared/Loader/Loader';
import notification from '@/utils/NotificationManager';
import { getToken } from '@/store/features/profileSlice';
import { formattedDate } from '@/utils/formattedDate';
import { getDocuments, getResultFind, sortDocumentsByResult } from '@/store/features/documentSlice';
import { RangeDateForm } from '@/components/RangeDateForm/RangeDateForm';
import { AppDispatch } from '@/store/store';
import { Spinner } from '@/shared/Spinner/Spinner';

interface ITable {
    _id: string;
    user: string;
    fileName: string;
    emailTo: string;
    result: string;
    createdAt: string;
}

type Order = 'asc' | 'desc';

export const ReportDelivery = () => {
    const [order, setOrder] = useState<Order>('asc');
    const token = useSelector(getToken);
    const documents = useSelector(getDocuments);
    const messageFindDocument = useSelector(getResultFind);
    const { isLoading } = useGetLastDocumentQuery({});
    const t = useTranslations('ReportDelivery');
    const tDocument = useTranslations('documentSlice');
    const dispatch: AppDispatch = useDispatch();
    const [isPending, startTransition] = useTransition();

    if (!token) {
        notification.showError(t('message_registry'));
        return;
    }

    const handleSortResult = () => {
        setOrder(order === 'asc' ? 'desc' : 'asc');
        startTransition(() => {
            dispatch(sortDocumentsByResult(order));
        });
    };

    if (isLoading) return <Loader />;

    return (
        <>
            <Box mb={2}>
                <Typography align='center' variant='h6' color='primary'>
                    {tDocument(messageFindDocument) === 'documentSlice'
                        ? ''
                        : tDocument(messageFindDocument)}
                </Typography>
            </Box>
            <RangeDateForm />
            <TableContainer
                component={Paper}
                sx={{
                    width: 'calc(100% - 32px)',
                    margin: '0 auto',
                    maxHeight: 'calc(100vh - 360px)',
                    boxShadow: '4px 4px 30px rgba(0, 0, 0, 0.2)'
                }}
            >
                <Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table' stickyHeader>
                    <TableHead>
                        <TableRow sx={{ backgroundColor: '#e7e7e6' }}>
                            <TableCell align='left' sx={{ fontWeight: 'bold' }}>
                                №
                            </TableCell>
                            <TableCell align='left' sx={{ fontWeight: 'bold' }}>
                                {t('date')}
                            </TableCell>
                            <TableCell align='left' sx={{ fontWeight: 'bold' }}>
                                {t('sender')}
                            </TableCell>
                            <TableCell align='left' sx={{ fontWeight: 'bold' }}>
                                {t('file_name')}
                            </TableCell>
                            <TableCell align='left' sx={{ fontWeight: 'bold' }}>
                                {t('email_sender')}
                            </TableCell>
                            <TableCell align='left' sx={{ fontWeight: 'bold' }}>
                                {isPending ? (
                                    <Spinner color='#1976d2' size='24px' />
                                ) : (
                                    <TableSortLabel
                                        active={true}
                                        direction={order}
                                        onClick={handleSortResult}
                                    >
                                        {t('result_delivery')}
                                    </TableSortLabel>
                                )}
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {documents.map(
                            (
                                { user, fileName, emailTo, result, createdAt }: ITable,
                                index: number
                            ) => (
                                <TableRow
                                    key={`${fileName}-${index}`}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align='left'>{index + 1}</TableCell>
                                    <TableCell align='left'>{formattedDate(createdAt)}</TableCell>
                                    <TableCell align='left'>{user}</TableCell>
                                    <TableCell align='left'>{fileName}</TableCell>
                                    <TableCell align='left'>{emailTo}</TableCell>
                                    <TableCell align='left'>{result}</TableCell>
                                </TableRow>
                            )
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};
