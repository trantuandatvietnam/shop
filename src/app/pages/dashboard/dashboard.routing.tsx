import { RouteObject } from 'react-router-dom';
import DashboardComponent from './components/dashboard.component';

export const dashboardRouting: RouteObject[] = [
  {
    path: 'dashboard',
    element: <DashboardComponent />,
  },
];
