import styles from './menu-item.module.scss';
import { MenuItemProps } from '../../../models/menu-item.props';

export default function MenuItemTemplate(props: MenuItemProps) {
  return (
    <div
      className={
        styles['menu-item'] +
        ' ' +
        (props.selected && styles['menu-item-active'])
      }
      onClick={() => props.selectItem(props.menuItem.url)}
    >
      <div>{props.menuItem.icon}</div>
      <div className={styles['menu-item-label']}>{props.menuItem.name}</div>
    </div>
  );
}
