import { useContext } from "react";
import { EmployeeContext } from "../contexts/employee-data.context";

function useShowEmployeeNameById(id: number) {
    const employeeData = useContext(EmployeeContext);
    const name = employeeData?.getEmployeeList().find((employee) => employee.id === id)?.name
  return (
    name
  )
}

export default useShowEmployeeNameById