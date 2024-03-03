import { CSSProperties, ReactNode, useEffect } from 'react';
import { Box} from '@mui/material';
import Header from './Header';
import userSlice from '../../redux/slices/userSlice/slice';
import { dispatch } from '../../redux/store';

const MainLayout = ({ children, sx }: { children?: ReactNode; sx?: CSSProperties }) => {
  const setUser = userSlice.actions.setUser;

  useEffect(() => {
    const user = sessionStorage.getItem('user');

    if (user) {
      dispatch(setUser(JSON.parse(user)))
    }
  }, [])

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
