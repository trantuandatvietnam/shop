import { useContext } from "react"
import { AppContext } from "../../../app.context";

function useShowEmployeeNameById(id: number) {
    const appData = useContext(AppContext);
    const name = appData?.getEmployeeList().find((employee) => employee.id === id)?.name
  return (
    name
  )
}

export default useShowEmployeeNameById