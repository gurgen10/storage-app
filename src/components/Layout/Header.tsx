import { useState, useContext, MouseEvent, forwardRef, ReactElement, RefAttributes, ForwardRefExoticComponent } from 'react';
import {Box, Toolbar, AppBar,IconButton, Typography,Button, Tooltip,Menu, MenuItem, Container, Avatar, ToggleButtonGroup, ToggleButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {  Link as ReactRouterLink, useLocation } from 'react-router-dom';
import { ThemeContext } from '../../context';
import authSelector from '../../redux/slices/userSlice/selector';
import { useAppSelector } from '../../redux/store';

const pages = [
  {
    name: 'Local Storage',
    url: '/local-storage',
  },
  {
    name: 'Session Storage',
    url: '/session-storage',
  },
  {
    name: 'Cookes',
    url: '/cookies',
  },
  {
    name: 'IndexedDB',
    url: '/indexed-db',
  }
];

const  Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const { pathname } = useLocation();
  const theme = useContext(ThemeContext);
  const userDate =  useAppSelector(authSelector.userData)

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleChange = (event: any) => {
    theme.setTheme(event.target.value);
    localStorage.setItem('theme', event.target.value)

  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  interface ListItemBtnProps {
    url: string,
    children: ReactElement | string,
    onClick?: (e: any) => void
  }

  const ListItemBtn = ({ url, onClick, children }: ListItemBtnProps) => {
    let listItemProps:  {
      component: ForwardRefExoticComponent<RefAttributes<HTMLAnchorElement>> | string;
      href?: string;
      target?: "_blank" | "_self" | "_parent" | "_top";
    } = {
      component: forwardRef((props, ref) => <ReactRouterLink ref={ref} to={url} {...props}  target='_self' />)
    };
    return (
    <Button onClick={onClick} {...listItemProps}>
      {children}
    </Button>)
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, mr: 1 }}>
            <ReactRouterLink  to='/'>
              <img alt='PlatAi' src='https://plat.ai/wp-content/themes/platai/assets/images/logo.svg' />
            </ReactRouterLink>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  sx={{
                    "&.Mui-selected": {
                      backgroundColor: "coral"
                    }
                  }}
                  selected={pathname === page.url} key={page.name} onClick={handleCloseNavMenu}>
                  <ListItemBtn url={`${page.url!}`} onClick={handleCloseNavMenu}>{ page.name }</ListItemBtn>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, mr: 1 }}>
            <ReactRouterLink  to='/'>
              <img alt='PlatAi' src='https://plat.ai/wp-content/themes/platai/assets/images/logo.svg' />
            </ReactRouterLink>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <ListItemBtn
                key={page.name}
                url={page.url}
                onClick={handleCloseNavMenu}
              >
                <Typography
                  sx={{ my: 2, color: pathname === page.url ? 'coral' :  'white' , display: 'block', textTransform: 'capitalize' }}
                >{page.name}</Typography>
              </ListItemBtn>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Gug" src={require(`./${userDate.image || 'no-user.jpg'}`)} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Typography sx={{px: 2}}>{userDate.name}</Typography>
              <ToggleButtonGroup
                sx={{p: 2}}
                color="primary"
                value={theme.theme}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
              >
                <ToggleButton value="light">Light</ToggleButton>
                <ToggleButton value="dark">Dark</ToggleButton>
              </ToggleButtonGroup>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;