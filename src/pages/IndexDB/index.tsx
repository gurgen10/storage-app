import { Card, Container } from '@mui/material';
import StorageOverview from '../../components/StorageOverview';
import overview from '../../data/indexDB.json';

import './IndexDB.css';

export const IndexDB = () => {
  return (
    <Container>
      <Card sx={{ m: 5 }}>
        <StorageOverview overview={overview} />
      </Card>
    </Container>)
}