import styles from './logo.module.scss';

export default function LogoTemplate() {
  return (
    <div className={styles.logo}>
      <div className={styles['label-logo']}>Admin</div>
      <div className={styles['icon-show-menu']}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-menu-2"
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <desc>
            Download more icon variants from https://tabler-icons.io/i/menu-2
          </desc>
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <line x1="4" y1="6" x2="20" y2="6"></line>
          <line x1="4" y1="12" x2="20" y2="12"></line>
          <line x1="4" y1="18" x2="20" y2="18"></line>
        </svg>
      </div>
    </div>
  );
}
