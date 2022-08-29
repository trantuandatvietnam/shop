import { createContext } from 'react';
import { EmployeeContextModel } from '../../../models/employee.model';

export const EmployeeContext = createContext<EmployeeContextModel | null>(null);
