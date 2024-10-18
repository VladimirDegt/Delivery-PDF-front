import * as Yup from 'yup';

export const ValidateRegisterForm = Yup.object().shape({
    username: Yup.string()
        .trim()
        .min(3, 'message_minLength_3')
        .max(100, 'message_maxLength_100')
        .required('message_required'),
    email: Yup.string().email('email_invalid').required('message_required'),
    password: Yup.string()
        .trim()
        .min(8, 'message_minLength_8')
        .max(100, 'message_maxLength_100')
        .required('message_required')
});
