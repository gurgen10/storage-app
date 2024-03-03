import { useEffect, useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, Container, InputLabel, TextField, Typography } from '@mui/material';
import ExpandMoreIcon  from '@mui/icons-material/ExpandMore';
import { dispatch, useAppSelector } from '../../redux/store';
import userSlice from '../../redux/slices/userSlice/slice';
import authSelector from '../../redux/slices/userSlice/selector';
import './SessionStorage.css';


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

           <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography sx={{fontWeight: 800, fontSize: '20px'}} component='h2'>Session Storage</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Session Storage is a feature provided by modern web browsers as part of the Web Storage API. It allows developers to store key-value pairs locally within the user's browser for the duration of that browser session. This means that the data stored in sessionStorage persists only as long as the browser window or tab is open. Once the user closes the tab or window, the data is cleared and no longer accessible            </p>
            <dl>
              <dt>Scope:</dt>
              <dd>Data stored in sessionStorage is specific to the current browser tab or window. If you open a new tab or window, it will have its own separate sessionStorage.</dd>
              <dt>Storage Limit:</dt>
              <dd>The amount of data that can be stored in sessionStorage varies between browsers, but it is typically around 5-10MB per origin (i.e., per domain).</dd>
              <dt>Lifetime:</dt>
              <dd>As mentioned earlier, sessionStorage data persists only for the duration of the browser session. If the user closes the tab or window, the data is lost.</dd>
              <dt>Data Format:</dt>
              <dd>sessionStorage stores data in the form of key-value pairs. Both the keys and values must be strings.</dd>
              <dt>Security:</dt>
              <dd>Data stored in sessionStorage is local to the user's browser and cannot be accessed by other websites. However, it's important to remember that it is not secure storage. Sensitive data should not be stored in sessionStorage without proper encryption.</dd>
              <dt>JavaScript API</dt>
              <dd>
                <ul>
                  <li><code>sessionStorage.setItem("[key]", "[value]");</code></li>
                  <li><code>sessionStorage.getItem("[key]");</code></li>
                  <li><code>sessionStorage.removeItem("[key]");</code></li>
                  <li><code>sessionStorage.clear();</code></li>
                </ul>
              </dd>
            </dl>
          </AccordionDetails>
        </Accordion>
        </Card>

      </Box>
    </Container>
  )
}