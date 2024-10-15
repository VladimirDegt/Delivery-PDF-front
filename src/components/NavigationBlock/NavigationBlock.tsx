import { Box } from '@mui/material';
import { ReportButton } from '@/components/ReportButton/ReportButton';

export const NavigationBlock = () => {
    return (
        <Box display='flex' gap={2}>
            <Box display='flex' alignItems='center' height={80}>
                <ReportButton />
            </Box>
        </Box>
    );
};
