import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import DialogComponent from '../dialog-create/dialog.component';
import FilterComponent from '../search/search.component';
import TableComponent from '../table/table.component';

function EmployeeTemplate({
  showDialog,
  setShowDialog = () => null,
}: {
  showDialog: boolean;
  setShowDialog: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="flex flex-col gap-y-[16px]">
      <DialogComponent showDialog={showDialog} setShowDialog={setShowDialog} />
      <FilterComponent />
      <div>
        <Button
          onClick={() => setShowDialog(true)}
          sx={{ float: 'right' }}
          variant="contained"
        >
          <span className="mr-[12px]">Create</span>
          <AddCircleIcon />
        </Button>
      </div>
      <TableComponent setShowDialog={setShowDialog} />
    </div>
  );
}

export default EmployeeTemplate;
