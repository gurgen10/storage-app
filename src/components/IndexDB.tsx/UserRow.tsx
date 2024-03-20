import { useState } from "react";
import { Button, ClickAwayListener, TableCell, TableRow, TextField } from "@mui/material";
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import { User } from "../../db";

interface UserRowProps {
  user: User;
  selectedName: string;
  selectedAge: number;
  setSelectedName: (name: string) => void;
  setSelectedAge:  (age: number) => void;
  deleteUser: (id: number) => void;
  updateUser: (user: User) => void;
}

export function UserRow({ user,selectedName, setSelectedName,selectedAge, setSelectedAge, updateUser, deleteUser }: UserRowProps) {
  const [isEditable, setIsEditable,] = useState(false);
  
  return (
    <ClickAwayListener onClickAway={() => setIsEditable(false)}>
      <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 }, '& td': { padding: 0 } }}>
        <TableCell component="th" scope="row">
          {user.id}
        </TableCell>
        {isEditable ?
        <>
          <TableCell align="right"><TextField variant="standard" size="small"  onChange={(event) => setSelectedName(event.target.value)} value={selectedName} /></TableCell>
          <TableCell align="right"><TextField variant="standard" size="small" type='number' onChange={(event) => setSelectedAge(+event.target.value)} value={selectedAge} /></TableCell>
          <TableCell align="right">
            <Button color='success' onClick={() => { setIsEditable(false); updateUser(user)}}>
              <SaveIcon />
            </Button>
            <Button color='warning' onClick={() => setIsEditable(false)}>
              <CancelIcon />
            </Button>
          </TableCell>
        </> :
        <>
          <TableCell align="right">{user.name}</TableCell>
          <TableCell align="right">{user.age}</TableCell>
          <TableCell align="right">
              <Button color='primary' onClick={() => {
                setIsEditable(true)
                setSelectedAge(user.age);
                setSelectedName(user.name)
            }}>
            <EditIcon />
            </Button>
            <Button color='error' onClick={() => deleteUser(user.id!)}>
              <DeleteForeverRoundedIcon />
            </Button>
          </TableCell>
        </>}

      </TableRow>
  </ClickAwayListener>)
}
