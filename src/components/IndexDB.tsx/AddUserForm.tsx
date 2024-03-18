import { Alert, Box, Button, Grid, InputLabel, Slide, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { db } from "../../db";

 const AddUserForm = ({ defaultAge } = { defaultAge: 21 }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(defaultAge);
   const [status, setStatus] = useState('');
   const containerRef = useRef<HTMLElement>(null);

  async function addUser() {
    try {
      // Add the new friend!
      const id = await db.users.add({
        name,
        age,
      });

      setStatus(`User ${name} successfully added. Got id ${id}`);
      setName('');
      setAge(defaultAge);
    } catch (error) {
      setStatus(`Failed to add ${name}: ${error}`);
    }
   }
   
   useEffect(() => {
     setTimeout(() => {
       setStatus('')
     }, 3000)

   }, [status])

  return (
    <Box component='form' m='10px' ref={containerRef}>
      {status && <Slide in={!!status} container={containerRef.current}>
        <Alert variant="filled" severity="success" sx={{ mb: '5px', position: 'fixed', top: '100px', right: '50px' }}>{status}</Alert>
      </Slide>}
      <Grid display='flex' justifyContent='center' mb='10px' gap='20px' >
         <Box>
          <InputLabel> Name:</InputLabel>
          <TextField
            type="text"
            size="small"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
        </Box>
        <Box>
          <InputLabel>  Age:</InputLabel>
          <TextField
            type="number"
            size="small"
            value={age}
            onChange={(ev) => setAge(Number(ev.target.value))}
          />
        </Box>
      </Grid>
      <Box width='100%' textAlign='center'>
        <Button variant="contained" color="primary" onClick={addUser}>Add</Button>
      </Box>
    </Box>
  )
}

export default AddUserForm