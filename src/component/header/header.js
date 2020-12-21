import React, { Component } from 'react'
import '../header/header.css'
import Logo from '../../assets/img/logo.png'
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';

const ColorButton = withStyles((theme) => ({
    root: {
      color: "#fff",
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: green[700],
      },
    },
  }))(Button);

const useStyles = makeStyles((theme) => ({
    logo: {
        width: 150,
        height: 100,
    },
    grow: {
      flexGrow: "initial",
      justifyContent: "center",
    },
    menuButton: {
      marginRight: theme.spacing(0),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    middle: {
        display: 'flex',
        alignItems: 'center'
    },
    iconMenu: {
        display: 'flex',
        alignItems: 'center'
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
    //   backgroundColor: fade(theme.palette.common.white, 0.15),
    //   '&:hover': {
    //     backgroundColor: fade(theme.palette.common.white, 0.25),
    //   },
      backgroundColor: "#d9d9d9",
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
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

export default function Header({}) {

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

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

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
        <MenuItem>
            <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="secondary">
                <MailIcon />
            </Badge>
            </IconButton>
            <p>Messages</p>
        </MenuItem>
        <MenuItem>
            <IconButton aria-label="show 11 new notifications" color="inherit">
            <Badge badgeContent={11} color="secondary">
                <NotificationsIcon />
            </Badge>
            </IconButton>
            <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
            >
            <AccountCircle />
            </IconButton>
            <p>Profile</p>
        </MenuItem>
        </Menu>
    );
  
    return (
        <div className="c-sticky">
            <div className="c-top">
                <div className="c-topL"></div>
                <div className="c-topM">
                    <p className="topText">New Era Traffic Platform in Malaysia</p>
                </div>
                <div className="c-topR">
                    <p className="topL">Register</p>
                    <p className="topR">Login</p>
                </div>
            </div>
            {/* <div className="c-nav">
                <img src={Logo} className="logo" alt="Logo" />
                <div className="">
                    
                    <h5>Category</h5>
                </div>
            </div> */}
            <div className={classes.grow}>
                <AppBar position="static" style={{backgroundColor: "white", color: "black"}}>
                    <Toolbar style={{justifyContent: "space-around"}}>
                    <img src={Logo} className={classes.logo} alt="Logo" />
                    <div className={classes.middle}>
                        <div className={classes.iconMenu}>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="Apps"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography className={classes.title} variant="h6" noWrap>
                                Category
                            </Typography>
                        </div>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                            <SearchIcon />
                            </div>
                            <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            >
                                <ColorButton variant="contained" color="primary" className={classes.margin}>
                                    Start Selling
                                </ColorButton>
                            </InputBase>
                        </div>
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        {/* <IconButton aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <MailIcon />
                        </Badge>
                        </IconButton>
                        <IconButton aria-label="show 17 new notifications" color="inherit">
                        <Badge badgeContent={17} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                        </IconButton>
                        <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="inherit"
                        >
                        <AccountCircle />
                        </IconButton> */}
                        <ColorButton variant="contained" color="primary" className={classes.margin}>
                            Start Selling
                        </ColorButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                        aria-label="show more"
                        aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        onClick={handleMobileMenuOpen}
                        color="inherit"
                        >
                        <MoreIcon />
                        </IconButton>
                    </div>
                    </Toolbar>
                </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
        </div>
    )
}

// export default class header extends Component {

//     render() {
//         return (
//             <div className="c-sticky">
//                 <div className="c-top">
//                     <div className="c-topL"></div>
//                     <div className="c-topM">
//                         <p className="topText">New Era Traffic Platform in Malaysia</p>
//                     </div>
//                     <div className="c-topR">
//                         <p className="topL">Register</p>
//                         <p className="topR">Login</p>
//                     </div>
//                 </div>
//                 <div className="c-nav">
//                     <img src={Logo} className="logo" alt="Logo" />
//                     <div className="">
                        
//                         <h5>Category</h5>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
