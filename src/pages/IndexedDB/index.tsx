import { Box, Card, Container, Typography } from '@mui/material';
import { Link as BrouserLink } from 'react-router-dom';
import StorageOverview from '../../components/StorageOverview';
import overview from '../../data/indexedDB.json';

import './IndexedDB.css';

export const IndexDB = () => {
  return (
    <Container>
      <Card sx={{ m: 5, p: 5 }}>
        <StorageOverview overview={overview} />
        <ol>
          <li>
            <Box mt='20px'>
              <Typography component='a' sx={{textDecoration: 'none'}} href="https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API" target="_blank">IndexedDB API</Typography>
            </Box>
          </li>
          <li>
            <Box>
              <Typography component='a' sx={{textDecoration: 'none'}} href="https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology" target="_blank">IndexedDB key characteristics and basic terminology</Typography>
            </Box>
          </li>
          <li>
            <Box>
              <Typography component='a' sx={{textDecoration: 'none'}} href="https://developer.mozilla.org/en-US/docs/Web/API/indexedDB" target="_blank">IndexedDB global property</Typography>
            </Box>
          </li>
          <li>
            <Box>
              <Typography component='a' sx={{textDecoration: 'none'}} href="https://w3c.github.io/IndexedDB/" target="_blank">Indexed Database API 3.0</Typography>
            </Box>
          </li>
          <li>
            <Box>
              <Typography component='a' sx={{textDecoration: 'none'}} href="https://dexie.org/docs/Tutorial/Getting-started" target="_blank">Dexi.js</Typography>
            </Box>
          </li>
        </ol>
        <Box sx={{textAlign: 'center'}}>
          <BrouserLink style={{textDecoration: 'none', fontSize: '20px', marginTop: '20px'}} to='/indexed-db/example'>Example</BrouserLink>
        </Box>
      </Card>
    </Container>)
}