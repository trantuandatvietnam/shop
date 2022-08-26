import { RouteObject } from 'react-router-dom';
import ListComponent from './components/list/list.component';

export const userRouting: RouteObject[] = [
  {
    path: 'users',
    element: <ListComponent />,
  },
];
