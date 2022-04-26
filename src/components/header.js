import * as React from "react"
// import PropTypes from "prop-types"
import { Link } from "gatsby"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const pages = ['BIOGRAPHY', 'BOOKS', 'MEDIA', 'CONTACT'];
const hardTrim = str => str.trim().toLowerCase().replace(/[^a-z0-9]/gi, '');

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar header position="static"
    style={{ background: 'transparent', boxShadow: 'none'}}>
      <Container maxWidth="lg">
        <Toolbar disableGutters 
        sx={{display: 'flex', justifyContent: 'center'}}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            className="nav-link"
          >
            AH
          </Typography>

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
              <MenuItem>
                <Link 
                  to="/" onClick={handleCloseNavMenu}
                  style={{textDecoration: 'none'}} className="nav-link">
                  Home
                </Link>
              </MenuItem>
              {pages.map((page) => (
                <MenuItem key={page}>
                  <Link 
                    to={`/${hardTrim(page)}/`}
                    onClick={handleCloseNavMenu}
                    style={{textDecoration: 'none'}} className="nav-link">
                    {page}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Link 
              to="/" onClick={handleCloseNavMenu}>
              <Button sx={{ my: 2, color: 'white', display: 'block' }} className="nav-link">Home</Button>
            </Link>
            {pages.map((page) => (
              <Link 
                to={`/${hardTrim(page)}/`} key={page}
                onClick={handleCloseNavMenu}>
                <Button sx={{ my: 2, color: 'white', display: 'block' }} className="nav-link">{page}</Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }
// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
