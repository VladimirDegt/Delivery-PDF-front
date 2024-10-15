'use client';

import { useDispatch, useSelector } from 'react-redux';

import cls from './BlockChooseActs.module.scss';
import { Button, Typography } from '@mui/material';
import { clearActs, getNameActs } from '@/store/features/chooseActsSlice';
import { useTranslations } from 'use-intl';

export const BlockChooseActs = () => {
    const acts = useSelector(getNameActs);
    const dispatch = useDispatch();
    const t = useTranslations('BlockChooseActs');

    const onClickBtnClear = () => dispatch(clearActs());

    return (
        <div className={cls.container} data-testid='blockChooseActs'>
            <Typography variant='h6' fontSize='16px' sx={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                {t('title')}
            </Typography>
            <ul className={cls.list}>
                {acts.length === 0 ? (
                    <Typography>{t('list_is_empty')}</Typography>
                ) : (
                    acts.map((item, index) => {
                        return (
                            <li key={item} className={cls.acts}>
                                <Typography variant='h6' fontSize='14px'>
                                    {index + 1}. {item}
                                </Typography>
                            </li>
                        );
                    })
                )}
            </ul>
            {acts.length > 0 && (
                <Button
                    type='button'
                    onClick={onClickBtnClear}
                    variant='contained'
                    color='error'
                    size='large'
                    sx={{ mt: 2 }}
                >
                    <Typography sx={{ fontSize: '18px' }}> {t('btn')}</Typography>
                </Button>
            )}
        </div>
    );
};
