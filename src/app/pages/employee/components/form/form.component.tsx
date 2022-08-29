import { useContext, useEffect, useState } from 'react';
import { HttpService } from '../../../../shared/services/http.service';
import { employeeForm } from '../../models/dialog.prop';
import FormTemplate from './form.template';
// import moment from 'moment';
import moment from 'moment';
import { useSearchParams } from 'react-router-dom';
import { AppContext } from '../../../../app.context';
import { EmployeeContext } from '../../contexts/employee-data.context';
import { IEmployeeForm } from '../../models/employee-form.model';
import { IFormProps } from '../../models/form.props';

export const initEmployeeForm = {
  name: '',
  age: 0,
  address: '',
  startDate: '',
  position: '',
};

function FormComponent({ setShowDialog = () => null }: IFormProps) {
  const [URLSearchParams] = useSearchParams();
  const idQueryURL = URLSearchParams.get('id');

  const appData = useContext(AppContext);
  const employeeData = useContext(EmployeeContext);

  const [employeeForm, setEmployeeForm] =
    useState<IEmployeeForm>(initEmployeeForm);

  const handleSubmitForm = async (formValues: employeeForm) => {
    try {
      const newEmployee = {
        ...formValues,
        dateCreated: moment().format().split('T')[0],
      };

      appData?.onShowLoader(true);
      if (idQueryURL) {
        const res = await HttpService.put(
          `employee/edit/${idQueryURL}`,
          newEmployee,
        );
        const employeeUpdated = res.data.data;
        employeeData?.updateEmployee(employeeUpdated);
        appData?.setToastData({
          show: true,
          message: 'Update employee successfully!',
          type: 'success',
        });
      } else {
        const res = await HttpService.post('employee/create', newEmployee);
        const employeeCreated = res.data.data;
        employeeData?.createEmployee(employeeCreated);
        appData?.setToastData({
          show: true,
          message: 'Create an employee successfully!',
          type: 'success',
        });
      }
      setEmployeeForm(initEmployeeForm);
    } catch (error) {
      appData?.setToastData({
        show: true,
        message: 'Has an error, please check your request',
        type: 'error',
      });
    } finally {
      appData?.onShowLoader(false);
      setShowDialog(false);
    }
  };

  useEffect(() => {
    if (idQueryURL) {
      const employeeList = employeeData?.getEmployeeList();
      const employeeFound = employeeList?.find(
        (employee) => employee.id === +idQueryURL,
      );
      if (employeeFound) {
        const { id: number, dateCreated: string, ...forms } = employeeFound;
        setEmployeeForm(forms);
      } else {
        setShowDialog(false);
      }
    }
    // Clear Form when Update Form Edit
    return () => {
      setEmployeeForm(initEmployeeForm);
    };
  }, [idQueryURL, setShowDialog, employeeData]);

  return (
    <FormTemplate
      employeeForm={employeeForm}
      setShowDialog={setShowDialog}
      onSubmit={handleSubmitForm}
    />
  );
}

export default FormComponent;
