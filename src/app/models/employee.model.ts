export interface EmployeeContextModel {
  updateEmployee: (employeeUpdate: IEmployee) => void,
  getEmployeeList: () => IEmployee[],
  setEmployee: (employees: IEmployee[]) => void,
  createEmployee: (employee: IEmployee) => void,
  deleteEmployee: (id: number) => void,
  updateFilterEmployee: (fields: IFilterEmployee) => void,
  getFilter: () => IFilterEmployee
}

export interface IFilterEmployee {
  field?: string;
  search?: string;
}

export interface IEmployee {
    id: number,
    name: string,
    age: number,
    address: string,
    startDate: string,
    position: string,
    dateCreated: string,
}