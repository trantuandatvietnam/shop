import {
  faDashboard,
  faPeopleGroup,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MenuModel } from '../core/models/menu.model';

export const menuConfig: {
  default: string;
  list: MenuModel[];
} = {
  default: '/dashboard',
  list: [
    {
      url: '/dashboard',
      name: 'Dashboard',
      icon: <FontAwesomeIcon icon={faDashboard} />,
    },
    {
      url: '/users',
      name: 'Users',
      icon: <FontAwesomeIcon icon={faUsers} />,
    },
    {
      url: '/employees',
      name: 'Employees',
      icon: <FontAwesomeIcon icon={faPeopleGroup} />,
    },
  ],
};
