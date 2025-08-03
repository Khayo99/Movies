import hottoast from 'react-hot-toast';

type Toast = 'success' | 'error';

interface ToastOptions {
  id: string;
  duration?: number;
}

const toast = (type: Toast, message: string, options?: ToastOptions) => {
  const styles = {
    success: {
      iconTheme: {
        primary: '#1c9b73',
        secondary: '#ffffff',
      },
      style: {
        background: '',
        border: '1px solid #1c9b73',
        color: '#000000',
      },
    },
    error: {
      iconTheme: {
        primary: '#FF5C77',
        secondary: '#ffffff',
      },
      style: {
        background: '',
        border: '1px solid #FF5C77',
        color: '#000000',
      },
    },
  };

  const toastOptions = {
    ...styles[type],
    duration: options?.duration || 5000,
  };

  return hottoast[type](message, toastOptions);
};

export default toast;
