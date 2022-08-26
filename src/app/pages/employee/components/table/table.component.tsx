import { Pagination } from '@mui/material';
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../../../app.context';
import { IEmployee } from '../../../../models/employee.model';
import TableTemplate from './table.template';
const LIMIT = 5;

function TableComponent({
  setShowDialog,
}: {
  setShowDialog: Dispatch<SetStateAction<boolean>>;
}) {
  const appData = useContext(AppContext);
  const navigate = useNavigate();
  const [showConfirmDelete, setShowConfirmDelete] = useState<boolean>(false);
  const [employeeList, setEmployeeList] = useState<IEmployee[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const onClickDeleteEmployee = (id: number) => {
    navigate(`?id=${id}`);
    setShowConfirmDelete(true);
  };

  const handleClickEditBtn = (id: number) => {
    setShowDialog(true);
    navigate(`?id=${id}`);
  };

  const handleChangePage = (_: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    const employees = appData?.getEmployeeList();
    if (employees && employees?.length > 0) {
      setEmployeeList(employees);
    }
  }, [appData]);

  useEffect(() => {
    const employees = appData?.getEmployeeList();
    if (employees) {
      const employeeList = [...employees];
      setEmployeeList(() =>
        employeeList.slice(
          (currentPage - 1) * LIMIT,
          (currentPage - 1) * LIMIT + LIMIT,
        ),
      );
    }
  }, [currentPage, appData]);

  return (
    <div className="flex flex-col gap-y-[24px]">
      <TableTemplate
        onClickDeleteEmployee={onClickDeleteEmployee}
        employees={employeeList}
        showConfirmDelete={showConfirmDelete}
        setShowConfirmDelete={setShowConfirmDelete}
        onClickEditBtn={handleClickEditBtn}
      />
      <Pagination
        count={
          appData?.getEmployeeList() && appData?.getEmployeeList().length > 0
            ? Math.ceil(appData?.getEmployeeList().length / LIMIT)
            : 0
        }
        page={currentPage}
        color="primary"
        onChange={handleChangePage}
      />
    </div>
  );
}

export default TableComponent;
