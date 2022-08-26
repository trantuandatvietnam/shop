import { menuConfig } from '../../../config/menu.config';
import { MenuProps } from '../../models/menu.props';
import MenuItemComponent from './menu-item/menu-item.component';
import styles from './menu.module.scss';

export default function MenuTemplate(props: MenuProps) {
  return (
    <div className={styles.menu}>
      {menuConfig.list.map((menuItem) => (
        <MenuItemComponent
          key={menuItem.url}
          menuItem={menuItem}
          selected={props.urlSelected === menuItem.url}
          selectItem={props.selectMenuItem}
        />
      ))}
    </div>
  );
}
