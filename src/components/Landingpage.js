import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import HelpIcon from '@material-ui/icons/Help';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ReorderIcon from '@material-ui/icons/Reorder';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  buttons:{
    color: "#00a2df"
  },
  topnav: {
      backgroundColor: "white",
      color: "#1c1c1c"
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function LandingPage() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const login = () =>{
      window.location.pathname="/signin/"
  }
  const gethelp = ()=>{
    window.location.pathname="/gethelp/"
  }
  const contact = () => {
    window.location.pathname="/contact-us/"
  }
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={gethelp}>
        <IconButton color="inherit">
          <Badge color="secondary">
            <HelpIcon />
          </Badge>
        </IconButton>
        <p>Get Help</p>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">
          <Badge color="secondary">
            <ContactPhoneIcon />
          </Badge>
        </IconButton>
        <p>Contact</p>
      </MenuItem>
      <MenuItem >
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AttachMoneyIcon />
        </IconButton>
        <p>Pricing</p>
      </MenuItem>
      <MenuItem onClick={login}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <LockOpenIcon />
        </IconButton>
        <p>Login</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar className={classes.topnav} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            Shinaha.
          </IconButton>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Button className={classes.buttons} onClick={gethelp}>Get Help</Button>
            <Button className={classes.buttons} onClick={contact} >Contact</Button>
            <Button className={classes.buttons}>Pricing</Button>
            <Button className={classes.buttons} onClick={login}>Login</Button>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <ReorderIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}