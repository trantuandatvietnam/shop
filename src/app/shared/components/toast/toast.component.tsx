import { useContext, useEffect, useRef } from 'react';
import { AppContext } from '../../../app.context';
import ToastTemplate from './toast.template';

function ToastComponent() {
  const timerRef = useRef<NodeJS.Timeout>();

  const dataApp = useContext(AppContext);
  const toastData = dataApp?.getToastData()!;

  const handleCloseToast = () => {
    dataApp?.setToastData({
      ...toastData,
      show: false,
    });
  };

  useEffect(() => {
    if (toastData.show) {
      timerRef.current = setTimeout(() => {
        dataApp?.setToastData({
          ...toastData,
          show: false,
        });
      }, 3000);
    }

    return () => {
      clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toastData.show]);
  return (
    <ToastTemplate onCloseToast={handleCloseToast} toastData={toastData} />
  );
}

export default ToastComponent;
