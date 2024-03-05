import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, Container, TextField, Typography } from '@mui/material'
import ExpandMoreIcon  from '@mui/icons-material/ExpandMore';
import './LocalStorage.css'
import { useEffect, useRef, useState } from 'react';

interface LocalStorageItem {
  data: { [key: string]: string }[];
  expiration: number;
  creation: number;
}

export const LocalStorage = () => {
  let timer = useRef< NodeJS.Timeout>();
  const [discountTime, setDiscountTime] = useState(10000)
  const discount: LocalStorageItem = {
    data: [{ discount: '10%' }],
    creation: Date.now(),
    expiration: Date.now() + discountTime
  };


  const handleSetDiscount = () => {
    clearInterval(timer.current)
    localStorage.setItem('discount', JSON.stringify(discount));

    updateCount();
  }

  useEffect(() => {
    const localStorageData = (localStorage.getItem('discount'));

    if (localStorageData) {
      const currentDiscount: LocalStorageItem = JSON.parse(localStorageData);
      if (Date.now() > currentDiscount.expiration) {
        localStorage.removeItem('discount')
      }
    }

    return () => {
      clearInterval(timer.current)
    }
  }, [])
  
  const updateCount = () => {
    setDiscountTime(10000)

    timer.current = setInterval(() => {
      setDiscountTime(prevCount => {
        if (prevCount <= 0) {
          clearInterval(timer.current)
          return 0
        }
        return prevCount - 1000
      })
    }, 1000);
  }

  return (
    <Container>
      <Card sx={{ m: 5 }}>
        <Box  sx={{ mb: 5, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Button variant='outlined' color='error' onClick={() => localStorage.clear()}>Clear Local Storage</Button>
          <Button variant='outlined' color='info' onClick={handleSetDiscount}>{`Set Discount Value (${discountTime} seconds)`}</Button>
        </Box>
        <Box>
          <Button onClick={handleSetDiscount}>Add discount</Button>
        </Box>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography sx={{fontWeight: 800, fontSize: '20px'}} component='h2'>Local Storage</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Local storage is a feature of web browsers that allows web applications to store data locally within the user's browser. This data persists even after the browser window is closed or the user navigates away from the page. It's useful for storing small amounts of data that you want to access across different sessions or pages of your web application
            </p>
            <dl>
            <dt>Storage Object:</dt>
            <dd>In JavaScript, the localStorage object is used to access the local storage area of the browser. It provides a simple key-value storage mechanism.</dd>
            <dt>Data Storage:</dt>
            <dd>Data stored in localStorage is associated with the origin of the web page. Each origin (combination of protocol, host, and port) has its own separate storage area. This means that data stored by a web page cannot be accessed by another web page from a different origin.</dd>
            <dt>Data Persistence:</dt>
            <dd>Unlike session storage, which is cleared when the browser session ends, data stored in localStorage persists indefinitely until explicitly removed by the web application or cleared by the user through browser settings.</dd>
            <dt>Data Format:</dt>
            <dd>localStorage stores data as strings. If you want to store complex data types such as objects or arrays, you need to serialize them to strings before storing and deserialize them when retrieving.</dd>
            <dt>Limitations:</dt>
            <dd>While localStorage provides a convenient way to store small amounts of data locally, it has limitations. Most browsers impose a storage limit of around 5-10 MB per origin. Exceeding this limit may cause the browser to prompt the user for permission to increase storage or to fail silently, depending on the browser.</dd>
            <dt>Security:</dt>
            <dd>Data stored in localStorage is accessible to JavaScript running on the same origin. However, it's important to be cautious when storing sensitive information in localStorage, as it can be accessed by other scripts running on the same page. Avoid storing sensitive data such as passwords or authentication tokens in localStorage.</dd>
            <dt>Methods:</dt>
            <dd>
              <ul>
                <li><code>localStorage.setItem("[key]", "[value]");</code></li>
                <li><code>localStorage.getItem("[key]");</code></li>
                <li><code>localStorage.removeItem("[key]");</code></li>
                <li><code>localStorage.clear();</code></li>
              </ul>
            </dd>
            </dl>
          </AccordionDetails>
        </Accordion>
      </Card>
    </Container>)
}
