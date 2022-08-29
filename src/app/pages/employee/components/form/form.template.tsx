import BorderColorIcon from '@mui/icons-material/BorderColor';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Box, Button, DialogTitle, TextField, useTheme } from '@mui/material';
import { useFormik } from 'formik';
import { ChangeEvent, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import * as Yup from 'yup';
import { IFormProps } from '../../models/form.props';
import { initEmployeeForm } from './form.component';

const FormCreated = Yup.object().shape({
  name: Yup.string()
    .max(50, 'Employees name is too long')
    .required("Employees's name is required"),
  age: Yup.number()
    .moreThan(0, "Employee's age must more than 0!")
    .required("Employee's age is required"),
  address: Yup.string()
    .min(1, "Employee's adress is too short")
    .max(50, "Employee's adress is too long")
    .required("Employee's adress is required"),
  startDate: Yup.date().required('Starting Date is required'),
  position: Yup.string().required('Position is required'),
});

function FormTemplate({
  employeeForm,
  setShowDialog = () => null,
  onSubmit = () => null,
}: IFormProps) {
  const formik = useFormik({
    initialValues: initEmployeeForm,
    onSubmit: (values) => {
      onSubmit(values);
    },
    validationSchema: FormCreated,
  });

  const [URLSearchParams] = useSearchParams();
  const idQueryURL = URLSearchParams.get('id');
  const theme = useTheme();
  const navigate = useNavigate();

  const onChangeAge = (e: ChangeEvent<HTMLInputElement>) => {
    const isNumber = /^[0-9]+$/;
    if (isNumber.test(e.target.value) || +e.target.value === 0) {
      formik.handleChange(e);
    }
  };

  const handleClickCancel = () => {
    setShowDialog(false);
    navigate('/employees');
    formik.resetForm();
  };

  useEffect(() => {
    formik.setValues(employeeForm!);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [employeeForm]);

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
          // onSubmit={onSubmit}
          onSubmit={formik.handleSubmit}
          component="form"
          sx={{
            '& .MuiTextField-root': {
              m: 1,
              width: '360px',
              maxWidth: '100%',
            },
          }}
          autoComplete="off"
          noValidate
        >
          <div className="flex items-center mb-[8px]">
            <div className="flex-1 align-end flex-end text-right">
              <label
                className={`${formik.errors.name ? 'text-red-500' : ''}`}
                htmlFor="name"
              >
                Name:{' '}
              </label>
            </div>
            <div className="relative">
              <TextField
                error={formik.errors.name ? true : false}
                onChange={formik.handleChange}
                sx={{ flex: 3 }}
                size="small"
                name="name"
                variant="outlined"
                value={formik.values.name}
              />
              {!!formik.errors.name && (
                <span className="absolute left-[20px] bottom-[-10px] text-[12px] text-red-500">
                  {formik.errors.name}
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center mb-[8px]">
            <div className="flex-1 align-end flex-end text-right">
              <label
                className={`${formik.errors.age ? 'text-red-500' : ''}`}
                htmlFor="age"
              >
                Age:{' '}
              </label>
            </div>
            <div className="relative">
              <TextField
                error={formik.errors.age ? true : false}
                onChange={onChangeAge}
                sx={{ flex: 3 }}
                size="small"
                name="age"
                variant="outlined"
                value={formik.values.age}
              />
              {!!formik.errors.age && (
                <span className="absolute left-[20px] bottom-[-10px] text-[12px] text-red-500">
                  {formik.errors.age}
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center mb-[8px]">
            <div className="flex-1 align-end flex-end text-right">
              <label
                className={`${formik.errors.address ? 'text-red-500' : ''}`}
                htmlFor="address"
              >
                Address:{' '}
              </label>
            </div>
            <div className="relative">
              <TextField
                error={formik.errors.address ? true : false}
                onChange={formik.handleChange}
                sx={{ flex: 3 }}
                size="small"
                name="address"
                variant="outlined"
                value={formik.values.address}
              />
              {!!formik.errors.address && (
                <span className="absolute left-[20px] bottom-[-10px] text-[12px] text-red-500">
                  {formik.errors.address}
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center mb-[8px]">
            <div className="flex-1 align-end flex-end text-right">
              <label
                className={`${formik.errors.startDate ? 'text-red-500' : ''}`}
                htmlFor="starting-date"
              >
                Starting Date:{' '}
              </label>
            </div>
            <div className="relative">
              <TextField
                error={formik.errors.startDate ? true : false}
                type="date"
                onChange={formik.handleChange}
                sx={{ flex: 3 }}
                size="small"
                name="startDate"
                variant="outlined"
                value={formik.values.startDate}
              />
              {!!formik.errors.startDate && (
                <span className="absolute left-[20px] bottom-[-10px] text-[12px] text-red-500">
                  {formik.errors.startDate}
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center mb-[8px]">
            <div className="flex-1 align-end flex-end text-right">
              <label
                className={`${formik.errors.position ? 'text-red-500' : ''}`}
                htmlFor="position"
              >
                Position:{' '}
              </label>
            </div>
            <div className="relative">
              <TextField
                error={formik.errors.position ? true : false}
                onChange={formik.handleChange}
                sx={{ flex: 3 }}
                size="small"
                name="position"
                variant="outlined"
                value={formik.values.position}
              />
              {!!formik.errors.position && (
                <span className="absolute left-[20px] bottom-[-10px] text-[12px] text-red-500">
                  {formik.errors.position}
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center mb-[8px] justify-end mt-[24px] gap-x-[12px]">
            <Button onClick={handleClickCancel} variant="outlined">
              Cancel
            </Button>
            <Button
              disabled={Object.keys(formik.errors).length > 0}
              type="submit"
              variant="contained"
            >
              {idQueryURL ? 'Update' : 'Create'}
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
}

export default FormTemplate;
