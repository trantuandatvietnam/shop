import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouting from './app-routing';
import { AppContext } from './app.context';
import './app.style.scss';
import LoaderComponent from './core/components/loading/loader.component';
import { IFilterEmployee, IToastData } from './models/app-context.model';
import { IEmployee } from './models/employee.model';
import ToastComponent from './shared/components/toast/toast.component';

export default function App() {
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<IToastData>({
    show: false,
    message: '',
    type: 'warning',
  });

  // EMPLOYEE
  const [employeeList, setEmployeeList] = useState<IEmployee[]>([]);
  const [filterEmployee, setFilterEmployee] = useState<IFilterEmployee>({
    field: '',
    search: '',
  });
  const updateFilterEmployee = (fields: IFilterEmployee) => {
    setFilterEmployee({ ...filterEmployee, ...fields });
  };

  const onShowLoader = (value: boolean) => {
    setShowLoader(value);
  };

  const setToastData = (toastData: IToastData) => {
    setToastMessage(toastData);
  };

  const getToastData = () => {
    return toastMessage;
  };

  const getEmployeeList = () => {
    let employeeListFilter = [...employeeList];
    // Search
    const field = filterEmployee.field?.toLocaleLowerCase();
    // Search by age
    if (field) {
      if (field && field === 'age') {
        employeeListFilter = employeeList?.filter((employee: any) => {
          const searchValue = filterEmployee.search;
          return employee[field.toLowerCase()] === +searchValue!;
        });
      }
      // Search by name, address, position
      if (field && field !== 'age' && field !== 'startdate') {
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
  // END EMPLOYEE

  return (
    <AppContext.Provider
      value={{
        onShowLoader,
        setToastData,
        getToastData,
        updateEmployee,
        getEmployeeList,
        setEmployee,
        createEmployee,
        deleteEmployee,
        updateFilterEmployee,
        getFilter,
      }}
    >
      <BrowserRouter>
        <AppRouting />
        {showLoader && <LoaderComponent />}
        {toastMessage.show && <ToastComponent />}
      </BrowserRouter>
    </AppContext.Provider>
  );
}
