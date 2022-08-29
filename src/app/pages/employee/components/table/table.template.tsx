import BorderColorTwoToneIcon from '@mui/icons-material/BorderColorTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ITableProps } from '../../models/table.props.model';
import { formatDate } from '../../utils/formartDate';
import ConfirmDeleteDialog from '../confirm-delete/confirm.component';

const cols = [
  '#ID',
  'Name',
  'Age',
  'Address',
  'Starting Date',
  'Position',
  'Date Created',
  'Actions',
];

export default function TableTemplate({
  employees,
  onClickDeleteEmployee,
  showConfirmDelete,
  setShowConfirmDelete,
  onClickEditBtn,
}: ITableProps) {
  return (
    <TableContainer sx={{ minHeight: '408px' }} component={Paper}>
      <Table sx={{ minWidth: '1200px' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {cols.map((col) => (
              <TableCell
                key={col}
                sx={{ fontWeight: 'bold' }}
                align={
                  col === 'Name' || col === 'Address' || col === 'Position'
                    ? 'left'
                    : 'center'
                }
              >
                {col}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {employees &&
            employees.map((employee) => (
              <TableRow
                key={employee.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {employee.id}
                </TableCell>
                <TableCell align="left">{employee.name}</TableCell>
                <TableCell align="center">{employee.age}</TableCell>
                <TableCell align="left">{employee.address}</TableCell>
                <TableCell align="center">
                  {formatDate(employee.startDate)}
                </TableCell>
                <TableCell align="left">{employee.position}</TableCell>
                <TableCell align="center">
                  {formatDate(employee.dateCreated)}
                </TableCell>
                <TableCell align="right">
                  <div className="inline-flex items-center gap-x-[24px]">
                    <Button
                      onClick={() => onClickEditBtn(employee?.id)}
                      variant="outlined"
                      color="success"
                    >
                      <BorderColorTwoToneIcon />
                      <span className="ml-[12px]">Edit</span>
                    </Button>
                    <Button
                      onClick={() => onClickDeleteEmployee(employee?.id)}
                      variant="contained"
                      color="error"
                    >
                      <DeleteTwoToneIcon />
                      <span className="ml-[12px]">Delete</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      {employees && employees?.length <= 0 && (
        <div className="flex items-center justify-center p-[24px]">
          <p>Không có dữ liệu!</p>
        </div>
      )}
      <ConfirmDeleteDialog
        showConfirmDelete={showConfirmDelete}
        setShowConfirmDelete={setShowConfirmDelete}
      />
    </TableContainer>
  );
}
