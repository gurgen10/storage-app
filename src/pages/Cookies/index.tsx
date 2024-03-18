import { Card, Container } from '@mui/material';
import StorageOverview from '../../components/StorageOverview';
import { CookieView } from '../../components/Cookies/CookieView';

import overview from '../../data/cookies.json'
import './Cookies.css';

export const Cookies = () => (
  <Container>
    <Card sx={{ m: 5 }}>
      <StorageOverview overview={overview} />
    </Card>
    <CookieView />
  </Container>
)
