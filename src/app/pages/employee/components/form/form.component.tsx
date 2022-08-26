import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';
import { HttpService } from '../../../../shared/services/http.service';
import { IDialogProp } from '../../models/dialog.prop';
import FormTemplate from './form.template';
import moment from 'moment';
import { AppContext } from '../../../../app.context';
import { useSearchParams } from 'react-router-dom';

export const initEmployeeForm = {
  name: '',
  age: 0,
  address: '',
  startDate: '',
  position: '',
};

function FormComponent({
  showDialog,
  setShowDialog = () => null,
}: IDialogProp) {
  const [URLSearchParams] = useSearchParams();
  const idQueryURL = URLSearchParams.get('id');

  const appData = useContext(AppContext);
  const [employeeForm, setEmployeeForm] = useState<{
    name: string;
    age: number;
    address: string;
    startDate: string;
    position: string;
  }>(initEmployeeForm);

  const handleChangeForm = (e: ChangeEvent<HTMLInputElement>) => {
    if (!setEmployeeForm || !employeeForm) return;
    setEmployeeForm({ ...employeeForm, [e.target.name]: e.target.value });
  };

  const handleChangeAge = (e: ChangeEvent<HTMLInputElement>) => {
    const isNumber = /^[0-9]+$/;
    if (!setEmployeeForm || !employeeForm) return;
    if (isNumber.test(e.target.value) || !e.target.value) {
      setEmployeeForm({ ...employeeForm, age: +e.target.value });
    }
  };

  const handleChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value).toISOString().split('T')[0];

    if (!setEmployeeForm || !employeeForm) return;
    setEmployeeForm({ ...employeeForm, [e.target.name]: date });
  };

  const handleSubmitForm = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const newEmployee = {
        ...employeeForm,
        dateCreated: moment().format().split('T')[0],
      };

      appData?.onShowLoader(true);
      if (idQueryURL) {
        const res = await HttpService.put(
          `employee/edit/${idQueryURL}`,
          newEmployee,
        );
        const employeeUpdated = res.data.data;
        appData?.updateEmployee(employeeUpdated);
        appData?.setToastData({
          show: true,
          message: 'Update employee successfully!',
          type: 'success',
        });
      } else {
        const res = await HttpService.post('employee/create', newEmployee);
        const employeeCreated = res.data.data;
        appData?.createEmployee(employeeCreated);
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
      const employeeList = appData?.getEmployeeList();
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
  }, [idQueryURL, setShowDialog, appData]);

  return (
    <FormTemplate
      employeeForm={employeeForm}
      setEmployeeForm={setEmployeeForm}
      showDialog={showDialog}
      setShowDialog={setShowDialog}
      onSubmit={handleSubmitForm}
      handleChangeForm={handleChangeForm}
      handleChangeAge={handleChangeAge}
      handleChangeDate={handleChangeDate}
    />
  );
}

export default FormComponent;
