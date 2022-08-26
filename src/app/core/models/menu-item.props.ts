import { MenuModel } from './menu.model';

export interface MenuItemProps {
  menuItem: MenuModel;
  selected?: boolean;
  selectItem: (key: string) => void;
}
