import { Alert } from '@mui/material';
import { IToastProps } from '../../models/toast.modal.prop';
import styles from './toast.module.scss';

function ToastTemplate({ onCloseToast, toastData }: IToastProps) {
  return (
    <div className={styles.wrapper}>
      <Alert
        variant="filled"
        onClose={() => onCloseToast()}
        severity={toastData.type}
        color={toastData.type}
      >
        {toastData.message}
      </Alert>
    </div>
  );
}

export default ToastTemplate;
