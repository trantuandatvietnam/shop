import { Slide } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { TransitionProps } from '@mui/material/transitions';
import { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { IDialogProp } from '../../models/dialog.prop';
import FormComponent from '../form/form.component';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

function DialogTemplate({
  showDialog,
  setShowDialog = () => null,
}: IDialogProp) {
  const navigate = useNavigate();
  const handleCloseDialog = () => {
    setShowDialog(false);
    navigate('/employees');
  };

  return (
    <Dialog
      open={showDialog || false}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleCloseDialog}
      aria-describedby="alert-dialog-slide-description"
    >
      <FormComponent showDialog={showDialog} setShowDialog={setShowDialog} />
    </Dialog>
  );
}

export default DialogTemplate;
