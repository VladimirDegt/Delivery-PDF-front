import { Flip, ToastContainer } from 'react-toastify';

export const Toast = () => {
    return (
        <ToastContainer
            position='top-center'
            autoClose={2500}
            hideProgressBar={true}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme='light'
            transition={Flip}
            closeButton={false}
            style={{ padding: '16px' }}
        />
    );
};
