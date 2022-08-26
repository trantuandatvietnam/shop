import ContentTemplate from './components/content/content.template';
import HeaderComponent from './components/header/header.component';
import LogoComponent from './components/logo/logo.component';
import MenuComponent from './components/menu/menu.component';
import styles from './core.module.scss';

export default function CoreTemplate() {
  return (
    <div className={styles.core}>
      <HeaderComponent />
      <LogoComponent />
      <MenuComponent />
      <ContentTemplate />
    </div>
  );
}
