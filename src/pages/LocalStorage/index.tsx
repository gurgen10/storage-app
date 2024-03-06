import { useEffect, useRef, useState } from 'react';
import { Box, Button, Card, Container } from '@mui/material';
import StorageOverview from '../../components/StorageOverview';
import overview from '../../data/localStorage.json';

import './LocalStorage.css';

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
    updateLocalStorage();

    return () => {
      clearInterval(timer.current)
    }
  }, [])

  useEffect(() => {
    if (discountTime <= 0) {
      updateLocalStorage();
    }
  }, [discountTime])
  
  const updateLocalStorage = () => {
    const localStorageData = (localStorage.getItem('discount'));

    if (localStorageData) {
      const currentDiscount: LocalStorageItem = JSON.parse(localStorageData);
      if (Date.now() > currentDiscount.expiration) {
        localStorage.removeItem('discount')
      }
    }
  }
  
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
          <Button variant='outlined' color='info' onClick={handleSetDiscount}>{`Set Discount Value (${discountTime / 1000} seconds)`}</Button>
        </Box>
        <StorageOverview overview={overview} />
      </Card>
    </Container>)
}
