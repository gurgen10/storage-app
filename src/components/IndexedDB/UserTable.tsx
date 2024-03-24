import{ useState } from 'react';
import { Box, IconButton, InputBase,Paper,TableContainer, Table, TableBody,TableHead,TableRow, TableCell, Stack, Alert } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { UserRow } from './UserRow';
import { useLiveQuery } from 'dexie-react-hooks';
import { User, db } from '../../db';

export default function UserTable() {
  const [name, setName] = useState('');
  const [selectedName, setSelectedName] = useState('')
  const [selectedAge, setSelectedAge] = useState(0);
  const [users, setUsers] = useState<User[]>([]);

  useLiveQuery(async () => {

    const users = await db.users.where('name').startsWithIgnoreCase(name).toArray();
    setUsers(users)
  },
  // specify vars that affect query:
  [name]);

  const deleteUser = (userId: number) => {
    db.users.delete(userId);
  }

  const updateUser = (user: User) => {
    db.users.update(user.id!, { name: selectedName, age: selectedAge });
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
              <TableCell align="left">Name</TableCell>
              <TableCell align="right">Age&nbsp;(year)</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          { users.length === 0 ?
            <TableBody>
              <TableRow>
                <TableCell colSpan={5}>
                  <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert severity="info">No Data !</Alert>
                  </Stack>
                </TableCell>
              </TableRow>
            </TableBody>
            :
            <TableBody>
              {users?.map((user) => (
                <UserRow
                  key={user.id}
                  deleteUser={deleteUser}
                  updateUser={updateUser}
                  selectedName={selectedName}
                  selectedAge={selectedAge}
                  setSelectedName={setSelectedName}
                  setSelectedAge={setSelectedAge}
                  user={user}
                />
              ))}
            </TableBody>}
        </Table>
        
      </TableContainer>
    </>
  );
}