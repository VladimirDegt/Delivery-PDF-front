import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

type SpinnerType = {
    color?: string;
    size?: string;
};

export const Spinner = (props: SpinnerType) => {
    const { color, size } = props;
    return (
        <Box
            sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
            <CircularProgress sx={{ color }} size={size} />
        </Box>
    );
};
