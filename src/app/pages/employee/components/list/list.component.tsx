import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../../app.context';
import { HttpService } from '../../../../shared/services/http.service';
import { EmployeeContext } from '../../contexts/employee-data.context';
import EmployeeTemplate from './list.template';

function ListComponent() {
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const appData = useContext(AppContext);
  const employeeData = useContext(EmployeeContext);

  useEffect(() => {
    (async function getEmployeeList() {
      try {
        appData?.onShowLoader(true);
        const res = await HttpService.get('employee/list');
        employeeData?.setEmployee(res.data.data);
        appData?.onShowLoader(false);
      } catch (error) {
        console.log(error);
      } finally {
        appData?.onShowLoader(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <EmployeeTemplate showDialog={showDialog} setShowDialog={setShowDialog} />
  );
}

export default ListComponent;
