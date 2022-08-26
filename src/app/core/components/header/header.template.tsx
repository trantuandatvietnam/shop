import styles from './header.module.scss';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function HeaderTemplate() {
  return (
    <div className={styles.header}>
      <div className={styles['user-login']}>
        <div className={styles['user-login-icon']}>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div>Admin</div>
      </div>
    </div>
  );
}
