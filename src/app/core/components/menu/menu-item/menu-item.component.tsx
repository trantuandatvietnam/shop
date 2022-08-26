import { MenuItemProps } from '../../../models/menu-item.props';
import MenuItemTemplate from './menu-item.template';

export default function MenuItemComponent(props: MenuItemProps) {
  return <MenuItemTemplate {...props} />;
}
