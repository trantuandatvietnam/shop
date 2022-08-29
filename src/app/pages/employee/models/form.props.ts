import { Dispatch, SetStateAction } from "react";

export interface employeeForm {
    name: string;
    age: number;
    address: string;
    startDate: string;
    position: string;
}

export interface IFormProps {
    setShowDialog?: Dispatch<SetStateAction<boolean>>,
    employeeForm?: employeeForm,
    onSubmit?: (formValue: employeeForm) => void,
    showDialog?: boolean
}