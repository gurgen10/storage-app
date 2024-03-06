import { useEffect, useState } from 'react'
import { Box, Button, Card, Container, InputLabel, TextField } from '@mui/material';
import StorageOverview from '../../components/StorageOverview';
import { dispatch, useAppSelector } from '../../redux/store';
import userSlice from '../../redux/slices/userSlice/slice';
import authSelector from '../../redux/slices/userSlice/selector';
import './SessionStorage.css';
import overview from '../../data/sessionStorage.json';

export const SessionStorage = () => {
  const userData = useAppSelector(authSelector.userData)
  const setUser = userSlice.actions.setUser;
  const [userName, setUserName] = useState(userData?.name ?? '');
  
  const handleSetUsername = (event: any ) => {
    event.preventDefault();
    const user = { id: 1, name: userName, image: 'gug.jpg' }

    dispatch(setUser(user))
    sessionStorage.setItem('user', JSON.stringify(user))
  }

  const handleRemoveStorage = () => {
    sessionStorage.removeItem('user');
    dispatch(setUser({id: 0, name: '', image: ''}))
  }

  useEffect(() => {
    userData && setUserName(userData.name)

  }, [userData])

  return (
    <Container>
      <Box>
        <Card sx={{p: 4, mt: 4}}>
          <InputLabel>Enter your name</InputLabel>
          <TextField value={userName} onChange={(e) => setUserName(e.target.value)} ></TextField>
          <Box sx={{my:3, display: 'flex', gap: '10px'}}>
            <Button variant='outlined' color='success' onClick={handleSetUsername}>Set Name</Button>
            <Button variant='outlined' color='success' onClick={handleRemoveStorage}>Remove user from Storage</Button>
          </Box>

          <StorageOverview overview={overview} />
        </Card>

      </Box>
    </Container>
  )
}