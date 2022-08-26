import { useRoutes } from 'react-router-dom';
import CoreModule from './core/core.module';
import { dashboardRouting } from './pages/dashboard/dashboard.routing';
import { employeeRouting } from './pages/employee/employee.routing';
import { userRouting } from './pages/user/user.routing';

export default function AppRouting() {
  const routes = [...dashboardRouting, ...userRouting, ...employeeRouting];

  const elements = useRoutes([
    {
      path: '',
      element: <CoreModule />,
      children: routes,
    },
  ]);

  return elements;
}
