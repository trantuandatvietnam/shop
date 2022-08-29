import { Dispatch, SetStateAction } from "react";

export interface employeeForm {
    name: string;
    age: number;
    address: string;
    startDate: string;
    position: string;
}

export interface IDialogProp {
    showDialog?: boolean,
    setShowDialog?: Dispatch<SetStateAction<boolean>>,
    // employeeForm?: employeeForm,
    // setEmployeeForm?: Dispatch<SetStateAction<{ name: string; age: number; address: string; startDate: string; position: string}>>,
    onSubmit?: (formValue: employeeForm) => void,

}