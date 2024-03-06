import { Card, Container } from '@mui/material'
import StorageOverview from '../../components/StorageOverview'
import './Cookies.css';

import overview from '../../data/cookies.json'

export const Cookies = () => {
  return (
    <Container>
      <Card sx={{ m: 5 }}>
        <StorageOverview overview={overview} />
      </Card>
    </Container>)
}