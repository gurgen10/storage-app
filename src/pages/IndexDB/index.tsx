import { Box, Card, Container, Typography } from '@mui/material';
import StorageOverview from '../../components/StorageOverview';
import overview from '../../data/indexDB.json';

import './IndexDB.css';
import { Link as BrouserLink } from 'react-router-dom';

export const IndexDB = () => {
  return (
    <Container>
      <Card sx={{ m: 5 }}>
        <StorageOverview overview={overview} />
        <Box>
          <Typography component='a' sx={{textDecoration: 'none'}} href="https://w3c.github.io/IndexedDB/" target="_blank">Indexed Database API 3.0</Typography>
        </Box>
        <Box>
          <Typography component='a' sx={{textDecoration: 'none'}} href="https://dexie.org/docs/Tutorial/Getting-started" target="_blank">Dexi js</Typography>
        </Box>
        <BrouserLink style={{textDecoration: 'none'}} to='/index-db/example'>Example</BrouserLink>
      </Card>
    </Container>)
}