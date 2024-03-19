import { Box, Card, Container, Typography } from '@mui/material';
import StorageOverview from '../../components/StorageOverview';
import { CookieView } from '../../components/Cookies/CookieView';

import overview from '../../data/cookies.json'
import './Cookies.css';

export const Cookies = () => (
  <Container>
    <Card sx={{ m: 5 }}>
      <StorageOverview overview={overview} />
    </Card>
    <Box>
      <Typography component='h2'>Usefull articles</Typography>
      <Typography component='a' sx={{textDecoration: 'none'}} href="https://developers.google.com/privacy-sandbox/3pcd/chips" target="_blank">More about CHIPS (Cookies Having Independent Partitioned State)</Typography>
    </Box>
    <CookieView />
  </Container>
)
