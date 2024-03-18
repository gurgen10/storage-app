import { Box, Card } from '@mui/material';
import CookieForm from '../../components/Cookies/CookieForm';
import CookiesTable from '../../components/Cookies/CookiesTable';

export const CookieView = () => (
  <Box>
    <Card>
      <CookieForm />
    </Card>
    <Card>
      <CookiesTable />
    </Card>
  </Box>
)
