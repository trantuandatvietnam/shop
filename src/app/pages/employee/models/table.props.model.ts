import { IEmployee } from "../../../models/employee.model";

export interface ITableProps {
    employees: IEmployee[] | undefined;
    onClickDeleteEmployee: (id: number) => void;
    showConfirmDelete: boolean;
    setShowConfirmDelete: React.Dispatch<React.SetStateAction<boolean>>;
    onClickEditBtn: (id: number) => void;
}