import { Outlet } from 'react-router-dom';
import styles from './content.module.scss';

export default function ContentTemplate() {
  return (
    <div className={styles.content}>
      <Outlet />
    </div>
  );
}
