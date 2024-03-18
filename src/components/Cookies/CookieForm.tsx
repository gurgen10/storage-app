import { SyntheticEvent, useEffect, useRef, useState } from "react";
import Cookies from 'js-cookie';
import { Alert, Box, Button, Checkbox, FormLabel, MenuItem, Select, SelectChangeEvent, Slide } from "@mui/material";

import CookieFormControl from "./CookieFormControl";

type SameSite = 'None' | 'Lax' | 'Strict';
type Priority = 'Low' | 'Normal' | 'Medium' | 'High'

export default function CookieForm() {
  const [status, setStatus] = useState('');
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [domain, setDomain] = useState('');
  const [path, setPath] = useState('/');
  const [expires, setExpires] = useState<number | string>();
  const [httpOnly, setHttpOnly] = useState(false);
  const [sameSite, setSameSite] = useState<SameSite>('Lax');
  const [secure, setSecure] = useState(false);
  const [partitioned, setPartitioned] = useState(false);
  const [priority, setPriority] = useState<Priority>('Medium');
  const containerRef = useRef<HTMLElement>(null);

   useEffect(() => {
     setTimeout(() => {
       setStatus('')
     }, 3000)

   }, [status])


  const handleSaveCookie = (e: SyntheticEvent) => {
    try {
      Cookies.set(name, value, {
      domain,
      path,
      expires: Number(expires),
      httpOnly,
      secure,
      sameSite,
      partitioned,
      priority,
      })

    setStatus(`Cookie ${name} successfully added with value ${value}.`);
   } catch (error) {
    console.log(error);
   }
  }
  
  const handleChangeSameSite = (event: SelectChangeEvent<string>) => {
    const sameSite = event.target.value as SameSite;

    // in case of None secure true
    if (sameSite === 'None') {
      setSecure(true)
    }
    setSameSite(sameSite)
  };

  const handleChangePriority = (event: SelectChangeEvent<string>) => {
    setPriority(event.target.value as Priority)
  };

  const handlerPartitioned = () => {
    setSameSite('None');
    setSecure(true)
    setPartitioned((oldState) => (!oldState))
  }

  return (
    <Box
      ref={containerRef}
      component='form'
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        alignItems: 'end',
        mb: 2,

      }}
      onSubmit={handleSaveCookie}>
       {status && <Slide in={!!status} container={containerRef.current}>
        <Alert variant="filled" severity="success" sx={{ mb: '5px', position: 'fixed', top: '100px', right: '50px' }}>{status}</Alert>
      </Slide>}
      <CookieFormControl
        inputValue={name}
        setInputValue={setName}
        label="Name"
        placeholder="input..."
        required
      />
      <CookieFormControl
        inputValue={value}
        setInputValue={setValue}
        label="Value"
        placeholder="input..."
        required
      />
      <CookieFormControl
        inputValue={domain}
        setInputValue={setDomain}
        label="Domain"
        placeholder="input..."
      />
      <CookieFormControl
        inputValue={path}
        setInputValue={setPath}
        label="Path"
        placeholder="input..."
      />
      <CookieFormControl
        inputValue={expires || ''}
        setInputValue={setExpires}
        label="Expires"
        type='number'
        placeholder="input..."
      />
       <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
        <FormLabel>Http Only
          <Checkbox checked={httpOnly} onChange={() => setHttpOnly((oldState) => (!oldState))}/>
        </FormLabel>
      </Box>
       <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
        <FormLabel>Secure
          <Checkbox disabled={sameSite === 'None' || partitioned} checked={secure} onChange={() => setSecure((oldState) => (!oldState))}/>
        </FormLabel>
      </Box>
       <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
        <FormLabel>Partitioned
          <Checkbox checked={partitioned} onChange={handlerPartitioned}/>
        </FormLabel>
      </Box>
      <Box>
        <FormLabel>Same Site</FormLabel>
        <Select disabled={partitioned} size="small" sx={{ minWidth: '180px', ml: 2 }} value={sameSite} defaultValue={sameSite} onChange={handleChangeSameSite}>
          <MenuItem value="Lax">Lax</MenuItem>
          <MenuItem value="None">None</MenuItem>
          <MenuItem value="Strict">Strict</MenuItem>
        </Select>
      </Box>
      <Box>
        <FormLabel>Priority</FormLabel>
        <Select size="small" sx={{ minWidth: '180px', ml: 2 }} defaultValue={priority} onChange={handleChangePriority}>
          <MenuItem value="Low">Low</MenuItem>
          <MenuItem value="Normal">Normal</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="High">High</MenuItem>
        </Select>
      </Box>
      <Box sx={{mt: 2, display: 'block', width: '100%', textAlign: 'center'}}>
        <Button type="submit" disabled={!name || !value} variant="contained" color="primary">
          save
        </Button>
      </Box>
    </Box>
  )
}
