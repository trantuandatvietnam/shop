import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Box, Button, DialogTitle, TextField, useTheme } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { IDialogProp } from '../../models/dialog.prop';
import BorderColorIcon from '@mui/icons-material/BorderColor';

function FormTemplate({
  setShowDialog = () => null,
  employeeForm,
  handleChangeForm = () => null,
  handleChangeAge = () => null,
  handleChangeDate = () => null,
  onSubmit = () => null,
}: IDialogProp) {
  const [URLSearchParams] = useSearchParams();
  const idQueryURL = URLSearchParams.get('id');
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <div className="pb-[24px]">
      <DialogTitle
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: 'white',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {idQueryURL ? <BorderColorIcon /> : <PersonAddIcon />}
        <span className="ml-[12px]">
          {idQueryURL ? 'Update Employee' : 'Create Employee'}
        </span>
      </DialogTitle>
      <div className="mt-[24px] px-[24px]">
        <Box
          onSubmit={onSubmit}
          component="form"
          sx={{
            '& .MuiTextField-root': {
              m: 1,
              width: '360px',
              maxWidth: '100%',
            },
          }}
          noValidate
          autoComplete="off"
        >
          <div className="flex items-center">
            <div className="flex-1 align-end flex-end text-right">
              <label htmlFor="name">Name: </label>
            </div>
            <TextField
              onChange={handleChangeForm}
              sx={{ flex: 3 }}
              size="small"
              name="name"
              variant="outlined"
              value={employeeForm?.name}
            />
          </div>
          <div className="flex items-center">
            <div className="flex-1 align-end flex-end text-right">
              <label htmlFor="age">Age: </label>
            </div>
            <TextField
              onChange={handleChangeAge}
              sx={{ flex: 3 }}
              size="small"
              name="age"
              variant="outlined"
              value={employeeForm?.age}
            />
          </div>
          <div className="flex items-center">
            <div className="flex-1 align-end flex-end text-right">
              <label htmlFor="address">Address: </label>
            </div>
            <TextField
              onChange={handleChangeForm}
              sx={{ flex: 3 }}
              size="small"
              name="address"
              variant="outlined"
              value={employeeForm?.address}
            />
          </div>
          <div className="flex items-center">
            <div className="flex-1 align-end flex-end text-right">
              <label htmlFor="starting-date">Starting Date: </label>
            </div>
            <TextField
              type="date"
              onChange={handleChangeDate}
              sx={{ flex: 3 }}
              size="small"
              name="startDate"
              variant="outlined"
              value={employeeForm?.startDate}
            />
          </div>
          <div className="flex items-center">
            <div className="flex-1 align-end flex-end text-right">
              <label htmlFor="position">Position: </label>
            </div>
            <TextField
              onChange={handleChangeForm}
              sx={{ flex: 3 }}
              size="small"
              name="position"
              variant="outlined"
              value={employeeForm?.position}
            />
          </div>
          <div className="flex items-center justify-end mt-[24px] gap-x-[12px]">
            <Button
              onClick={() => {
                setShowDialog(false);
                navigate('/employees');
              }}
              variant="outlined"
            >
              Cancel
            </Button>
            <Button type="submit" variant="contained">
              {idQueryURL ? 'Update' : 'Create'}
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
}

export default FormTemplate;
