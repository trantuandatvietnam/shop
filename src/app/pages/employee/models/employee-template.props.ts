import { Dispatch, SetStateAction } from "react";

export interface IEmployeeProps {
    showDialog: boolean;
    setShowDialog: Dispatch<SetStateAction<boolean>>;
  }