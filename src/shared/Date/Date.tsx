import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ControllerRenderProps } from 'react-hook-form';
import { IRangeDateForm } from '@/components/RangeDateForm/RangeDateForm';

interface IDate {
    label: string;
    field:
        | ControllerRenderProps<IRangeDateForm, 'dateStart'>
        | ControllerRenderProps<IRangeDateForm, 'dateEnd'>;
}

export const Date = (props: IDate) => {
    const { label, field } = props;

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                {...field}
                onChange={field.onChange}
                value={field.value || null}
                label={label}
            />
        </LocalizationProvider>
    );
};
