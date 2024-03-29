import { useEffect, useState } from 'react';
import { Paper, TableContainer, Table, TableBody, TableHead, TableRow, TableCell, Button, Box } from '@mui/material';

interface Cookie {
  name: string;
  value: string;
}

export default function CookiesTable() {
  const [cookies, setCookies] = useState<Cookie[]>([]);

  useEffect(() => {
    const getCookies = () =>{
      var pairs = document.cookie.split(";");
      var cookies: any = [];
      for (var i=0; i<pairs.length; i++){
        var pair = pairs[i].split("=");
        cookies.push({ name: [(pair[0] + '').trim()], value: decodeURIComponent(pair.slice(1).join('=')) });
      }

      setCookies(cookies)
    }
    getCookies()
  }, [])

  const updateCookies = () => {
    window.location.reload()
  }

  return (
    <TableContainer component={Paper} sx={{ width: '100%', p: 3 }}>
      <Box sx={{ textAlign: 'right'}}>
        <Button variant='outlined' onClick={updateCookies}>Update Cookies</Button>
      </Box>
      <Table  size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell width="40%"  align="left">Name</TableCell>
            <TableCell align="left">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cookies.map((cookie) => (
            <TableRow key={cookie.name} sx={{ '&:last-child td, &:last-child th': { border: 0 }, '& td': { padding: 0 } }}>
              <TableCell component="th" scope="row">{cookie.name}</TableCell>
              <TableCell sx={{wordBreak: 'break-all', overflow: 'hidden'}}  scope="row">{ cookie.value }</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
