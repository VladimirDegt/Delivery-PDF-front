'use client';

import { ChangeEvent, DragEvent, MouseEvent, useState } from 'react';
import { Button, Typography } from '@mui/material';
import { useTranslations } from 'use-intl';
import { useDispatch, useSelector } from 'react-redux';

import cls from './DragAndDropActs.module.scss';
import { validateExtensionFile } from './validateUploadFile/validateExtensionFile';
import { validateSizeFile } from './validateUploadFile/validateSizeFile';
import notification from '@/utils/NotificationManager';
import { getToken } from '@/store/features/profileSlice';
import { useSendPDFMutation } from '@/store/services/deliveryPDF';
import { Loader } from '@/shared/Loader/Loader';
import { clearActs, getFiles, setActs } from '@/store/features/chooseActsSlice';
import { getEmailTo } from '@/store/features/chooseEmailToSlice';
import { getTextEmail } from '@/store/features/textEmailSlice';

const extensionFile = 'pdf';

export const DragAndDropActs = () => {
    const [drag, setDrag] = useState(false);
    const token = useSelector(getToken);
    const files = useSelector(getFiles);
    const emailTo = useSelector(getEmailTo);
    const textEmail = useSelector(getTextEmail);
    const [sendPDF, { isLoading }] = useSendPDFMutation();
    const dispatch = useDispatch();
    const t = useTranslations('DragAndDrop');

    function dragStartHandler(e: DragEvent): void {
        e.preventDefault();
        setDrag(true);
    }

    function dragLeaveHandler(e: DragEvent): void {
        e.preventDefault();
        setDrag(false);
    }

    function onDropHandler(e: DragEvent): void {
        e.preventDefault();
        const files: File[] = [...e.dataTransfer.files];
        setDrag(false);

        if (!validateExtensionFile(files, extensionFile)) {
            notification.showError(t('EXTENSION_MESSAGE_ERROR'));
            return;
        }

        if (!validateSizeFile(files)) {
            notification.showError(t('SIZE_MESSAGE_ERROR'));
            return;
        }

        dispatch(setActs(files));
    }

    function onUploadFile(e: ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        if (!e.target.files) {
            return;
        }
        const files: FileList = e.target.files;
        const filesArray: File[] = Array.from(files);
        setDrag(false);

        if (!validateExtensionFile(filesArray, extensionFile)) {
            notification.showError(t('EXTENSION_MESSAGE_ERROR'));
            return;
        }

        if (!validateSizeFile(filesArray)) {
            notification.showError(t('SIZE_MESSAGE_ERROR'));
            return;
        }

        dispatch(setActs(filesArray));
    }

    async function onSubmit(e: MouseEvent<HTMLButtonElement>): Promise<void> {
        e.preventDefault();

        if (!token) {
            notification.showError(t('SIGN_IN_MESSAGE_ERROR'));
            return;
        }

        if (files.length === 0) {
            notification.showError(t('CHOOSE_FILE_MESSAGE_ERROR'));
            return;
        }

        const formData: FormData = new FormData();

        for (let i = 0; i < files.length; i++) {
            formData.append(`file №${i}`, files[i]);
        }
        formData.append('emailTo', emailTo);
        formData.append('textEmail', textEmail);

        try {
            const response = await sendPDF(formData);

            if (response?.data?.message) {
                notification.showSuccess(t('DELIVERY_SUCCESS'));
                dispatch(clearActs());
            } else if (response?.data?.error?.message === 'Invalid password kpmic') {
                notification.showError(t('PASSWORD_MESSAGE_ERROR'));
            } else {
                notification.showError(t('SIGN_IN_MESSAGE_ERROR'));
            }
        } catch (_) {
            notification.showError(t('DELIVERY_WRONG'));
        }
    }

    if (isLoading) return <Loader />;

    return (
        <div className={cls.container} data-testid='dragAndDrop'>
            <label htmlFor='file' className={cls['container-label']}>
                {drag ? (
                    <div
                        className={cls['drop-area']}
                        onDragStart={(e) => dragStartHandler(e)}
                        onDragLeave={(e) => dragLeaveHandler(e)}
                        onDragOver={(e) => dragStartHandler(e)}
                        onDrop={(e) => onDropHandler(e)}
                    >
                        <Typography variant='h4'>{t('drop')}</Typography>
                    </div>
                ) : (
                    <div
                        className={cls['drop-area']}
                        onDragStart={(e) => dragStartHandler(e)}
                        onDragLeave={(e) => dragLeaveHandler(e)}
                        onDragOver={(e) => dragStartHandler(e)}
                    >
                        <Typography variant='h5'>{t('title')}</Typography>
                        <Typography variant='h6'>{t('description')}</Typography>
                    </div>
                )}
            </label>
            <div className={cls.containerBtn}>
                <Button
                    type='submit'
                    onClick={onSubmit}
                    variant='contained'
                    color='success'
                    size='large'
                    sx={{ minWidth: '262px' }}
                >
                    <Typography sx={{ fontSize: '18px' }}>{t('btn_submit')}</Typography>
                </Button>
            </div>
            <input
                type='file'
                multiple
                id='file'
                className={cls.fileInput}
                onChange={onUploadFile}
            />
        </div>
    );
};
