import * as Yup from 'yup';

export const ValidateLoginForm = Yup.object().shape({
    email: Yup.string().email('Невірний формат email').required("Поле обов'язкове для заповнення"),
    password: Yup.string()
        .trim()
        .min(8, 'Мінімум 8 символів, максимум 50 символів')
        .max(50, 'Мінімум 8 символів, максимум 50 символів')
        .required("Поле обов'язкове для заповнення")
});
