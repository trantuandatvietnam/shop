
export interface AppContextModel {
  onShowLoader: (value: boolean) => void;
  setToastData: (data: IToastData) => void;
  getToastData: () =>  IToastData,
}

export interface IToastData {
  show: boolean,
  message: string,
  type: "warning" | "error" | "info" | "success"
}