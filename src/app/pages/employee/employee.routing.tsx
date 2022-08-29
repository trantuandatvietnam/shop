import { RouteObject } from 'react-router-dom';
import ListComponent from './components/list/list.component';
import EmployeeProvider from './contexts/employee.provider';

export const employeeRouting: RouteObject[] = [
  {
    path: 'employees',
    element: (
      <EmployeeProvider>
        <ListComponent />
      </EmployeeProvider>
    ),
  },
];
