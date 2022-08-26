import { IEmployee } from "./employee.model";

export interface AppContextModel {
  onShowLoader: (value: boolean) => void;
  setToastData: (data: IToastData) => void;
  getToastData: () =>  IToastData,
  updateEmployee: (employeeUpdate: IEmployee) => void,
  getEmployeeList: () => IEmployee[],
  setEmployee: (employees: IEmployee[]) => void,
  createEmployee: (employee: IEmployee) => void,
  deleteEmployee: (id: number) => void,
  updateFilterEmployee: (fields: IFilterEmployee) => void,
  getFilter: () => IFilterEmployee
}

export interface IToastData {
  show: boolean,
  message: string,
  type: "warning" | "error" | "info" | "success"
}

export interface IFilterEmployee {
  field?: string;
  search?: string;
}