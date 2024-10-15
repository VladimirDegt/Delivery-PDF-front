import { Box } from '@mui/material';
import BasicModal from '@mui/material/Modal';
import { ReactNode } from 'react';

interface ModalProps {
    open: boolean;
    handleClose: () => void;
    children: ReactNode;
}

const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100vw',
    maxWidth: 480,
    borderRadius: 2,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2
};

export const Modal = ({ open, handleClose, children }: ModalProps) => {
    return (
        <BasicModal
            open={open}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
        >
            <Box sx={style}>{children}</Box>
        </BasicModal>
    );
};
