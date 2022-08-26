import { RouteObject } from 'react-router-dom';
import ListComponent from './components/list/list.component';

export const employeeRouting: RouteObject[] = [
  {
    path: 'employees',
    element: <ListComponent />,
  },
];
