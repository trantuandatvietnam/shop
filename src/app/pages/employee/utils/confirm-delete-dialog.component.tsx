import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { useContext } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { AppContext } from '../../../app.context';
import { HttpService } from '../../../shared/services/http.service';
import warningImg from '../imgs/Warning.png';
import useShowEmployeeNameById from './useShowEmployeeNameById';

function ConfirmDeleteDialog({
  showConfirmDelete,
  setShowConfirmDelete,
}: {
  showConfirmDelete: boolean;
  setShowConfirmDelete: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [searchParams] = useSearchParams();
  const idEmployee = searchParams.get('id');
  const employeeName = useShowEmployeeNameById(+idEmployee!);
  const appData = useContext(AppContext);
  const navigate = useNavigate();

  const handleClose = () => {
    setShowConfirmDelete(false);
    navigate('/employees');
  };

  const hanldeDeleteEmployee = async () => {
    appData?.onShowLoader(true);
    const res = await HttpService.delete(`employee/delete/${idEmployee}`);
    appData?.onShowLoader(false);
    appData?.deleteEmployee(res.data.data.id);
    handleClose();
    appData?.setToastData({
      type: 'success',
      message: `delete successful ${employeeName} from employee`,
      show: true,
    });
  };

  return (
    <Dialog
      open={showConfirmDelete}
      onClose={setShowConfirmDelete}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <div className="p-[24px]">
        <DialogTitle id="alert-dialog-title">
          <div className="flex items-center gap-x-[12px]">
            <div className="max-w-[40px]">
              <img src={warningImg} alt="" />
            </div>
            <div>
              Are you really delete
              <span className="text-red-500 font-bold mx-[8px]">
                {employeeName}
              </span>
              employee?
            </div>
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description"></DialogContentText>
          <div className="flex items-center">
            <span className="text-[#ff0505] font-bold">
              This action may cause loss of your data, Confirm delete ?
            </span>
          </div>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose} autoFocus>
            No, I'm wrong
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={hanldeDeleteEmployee}
          >
            Delete
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  );
}

export default ConfirmDeleteDialog;
