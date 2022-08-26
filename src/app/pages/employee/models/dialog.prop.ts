import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react";

export interface IDialogProp {
    showDialog?: boolean,
    setShowDialog?: Dispatch<SetStateAction<boolean>>,
    employeeForm?: {
        name: string;
        age: number;
        address: string;
        startDate: string;
        position: string;
    },
    setEmployeeForm?: Dispatch<SetStateAction<{ name: string; age: number; address: string; startDate: string; position: string}>>,
    handleChangeForm?: (e: ChangeEvent<HTMLInputElement>) => void,
    handleChangeAge?: (e: ChangeEvent<HTMLInputElement>) => void,
    handleChangeDate?: (e: ChangeEvent<HTMLInputElement>) => void,
    onSubmit?: (e: FormEvent) => void
}