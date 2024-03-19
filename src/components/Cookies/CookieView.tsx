import { Box, Card } from '@mui/material';
import CookieForm from '../../components/Cookies/CookieForm';
import CookiesTable from '../../components/Cookies/CookiesTable';

export const CookieView = () => (
  <Box>
    <Card sx={{p:2}}>
      <CookieForm />
    </Card>
    <Card  sx={{p:2}}>
      <CookiesTable />
    </Card>
  </Box>
)
