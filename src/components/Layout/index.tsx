import { CSSProperties, ReactNode } from 'react';
import { Box} from '@mui/material';


import Header from './Header';


const MainLayout = ({ children, sx }: { children?: ReactNode; sx?: CSSProperties }) => {

  return (
    <Box>
      <Header />
      <Box>
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
