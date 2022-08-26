import { useContext } from 'react';
import { AppContext } from '../../../app.context';

export default function DashboardTemplate() {
  const dataApp = useContext(AppContext);

  const handleClick = () => {
    dataApp?.setToastData({
      show: true,
      message: 'Thất bại',
      type: 'warning',
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
