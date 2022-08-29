import { ReactNode, useState } from 'react';
import { IEmployee, IFilterEmployee } from '../../../models/employee.model';
import { EmployeeContext } from './employee-data.context';

function EmployeeProvider({ children }: { children: ReactNode }) {
  // EMPLOYEE
  const [employeeList, setEmployeeList] = useState<IEmployee[]>([]);
  const [filterEmployee, setFilterEmployee] = useState<IFilterEmployee>({
    field: '',
    search: '',
  });

  const updateFilterEmployee = (fields: IFilterEmployee) => {
    setFilterEmployee({ ...filterEmployee, ...fields });
  };

  const getEmployeeList = () => {
    let employeeListFilter = [...employeeList];
    // Search
    const field = filterEmployee.field?.toLocaleLowerCase();
    // Search by age and id
    if (field) {
      if (field && (field === 'age' || field === 'id')) {
        employeeListFilter = employeeList?.filter((employee: any) => {
          const searchValue = filterEmployee.search;
          return employee[field.toLowerCase()] === +searchValue!;
        });
      }
      // Search by name, address, position
      if (field && field !== 'age' && field !== 'startdate' && field !== 'id') {
        employeeListFilter = employeeList?.filter((employee: any) => {
          const searchValue = filterEmployee.search;
          return employee[field.toLowerCase()]
            .toLowerCase()
            .includes(searchValue?.toLocaleLowerCase());
        });
      }
      // Search by date
      if (field && field === 'startdate') {
        const startDate = filterEmployee.search?.split('&')[0];
        const endDate = filterEmployee.search?.split('&')[1];

        if (startDate && endDate) {
          employeeListFilter = employeeList?.filter((employee: any) => {
            const startDateFromData = new Date(employee.startDate);
            return (
              startDateFromData >= new Date(startDate) &&
              startDateFromData <= new Date(endDate)
            );
          });
        }
      }
    }
    return employeeListFilter || [];
  };

  const updateEmployee = (employeeUpdate: IEmployee) => {
    const index = employeeList.findIndex(
      (employee) => employee.id === employeeUpdate.id,
    );
    const newEmployeeList = [...employeeList];
    newEmployeeList[index] = employeeUpdate;
    setEmployeeList(newEmployeeList);
  };

  const deleteEmployee = (id: number) => {
    const index = employeeList.findIndex((employee) => employee.id === id);
    const newEmployeeList = [...employeeList];
    newEmployeeList.splice(index, 1);
    setEmployeeList(newEmployeeList);
  };

  const setEmployee = (employees: IEmployee[]) => {
    setEmployeeList(employees);
  };

  const createEmployee = (newEmployee: IEmployee) => {
    setEmployeeList([...employeeList, newEmployee]);
  };
  const getFilter = () => filterEmployee;

  return (
    <EmployeeContext.Provider
      value={{
        updateEmployee,
        getEmployeeList,
        setEmployee,
        createEmployee,
        deleteEmployee,
        updateFilterEmployee,
        getFilter,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}

export default EmployeeProvider;
