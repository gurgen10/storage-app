import{ useState } from 'react';
import { Box, Button, IconButton, InputBase,Paper,TableContainer, Table, TableBody,TableHead,TableRow, TableCell } from '@mui/material';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import SearchIcon from '@mui/icons-material/Search';
import { useLiveQuery } from 'dexie-react-hooks';
import { User, db } from './db';

export default function UserTable() {
  const [name, setName] = useState('')
  const users: User[] | undefined = useLiveQuery(async () => {

  const users = await db.users.where('name').startsWith(name).toArray();
    return users;
  },
  // specify vars that affect query:
  [name]);
  
  const deleteUser = (userId: number) => {
    db.users.delete(userId);
  }

  return (
    <>
      <Box sx={{textAlign: 'end', display: 'block',  mb: '20px'}}>
        <Box sx={{border: '1px solid', display: 'inline-block',  borderRadius: '10px'}}>
          <InputBase
            value={name} onChange={(e) => setName(e.target.value)}
            sx={{ ml: 1, }}
            size='small'
            placeholder="Search user..."
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>
       <TableContainer component={Paper} sx={{maxHeight: '400px', overflow: 'auto'}}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Age&nbsp;(year)</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users?.map((user) => (
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, '& td': {padding: 0} }}
            >
              <TableCell component="th" scope="row">
                {user.id}
              </TableCell>
              <TableCell align="right">{user.name}</TableCell>
              <TableCell align="right">{user.age}</TableCell>
              <TableCell align="right"><Button color='error' onClick={() => deleteUser(user.id!)}><DeleteForeverRoundedIcon /></Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}