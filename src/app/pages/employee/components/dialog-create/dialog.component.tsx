import { IDialogProp } from '../../models/dialog.prop';
import DialogTemplate from './dialog.template';

function DialogComponent({ showDialog, setShowDialog }: IDialogProp) {
  return (
    <DialogTemplate showDialog={showDialog} setShowDialog={setShowDialog} />
  );
}

export default DialogComponent;
