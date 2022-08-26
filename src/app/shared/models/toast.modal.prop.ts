import { IToastData } from "../../models/app-context.model";

export interface IToastProps {
    onCloseToast: () => void,
    toastData: IToastData
}