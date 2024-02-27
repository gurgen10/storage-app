import { CSSProperties, ReactNode } from 'react';
import { AppBar, Box, Toolbar } from '@mui/material';


import Header from './Header';


const MainLayout = ({ children, sx }: { children?: ReactNode; sx?: CSSProperties }) => {

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        color="inherit"
        elevation={0}
      >
        <Header />
      </AppBar>

      <Box>
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
