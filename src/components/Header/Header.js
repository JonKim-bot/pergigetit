import React from 'react'
import { AppBar, Container, Drawer, List, ListItemText, IconButton, TextField, Toolbar, useMediaQuery } from '@material-ui/core/'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import {Link } from 'react-router-dom'
import './Header.css'
import logo from '../../assets/images/gogetit_logo.png'
import logom from '../../assets/images/gogetit_logom.png'
import category_icon from '../../assets/images/category_icon.png'
import search_icon from '../../assets/images/search_icon.png'
import home_icon from '../../assets/images/home_icon.png'
import like_icon from '../../assets/images/like_icon.png'
import partner_icon from '../../assets/images/partner_icon.png'
import shop_icon from '../../assets/images/shop_icon.png'
import user_icon from '../../assets/images/user_icon.png';
// import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles(theme => ({
    cForm: {
       fontWeight: 200,
       width: 100% !'important',
    },
    sidenavbar: {
        width: 250,
        padding: '.5rem 1rem'
    }
}));


export default function Header() {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    
    const [state, setState] = React.useState({ left: false });

    const toggleDrawer = (anchor, open) => event => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
  
      setState({ [anchor]: open });
    };
    

    const sideDrawerList = anchor => (
        <div
          className={classes.sidenavbar}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
            <List component="nav">
                <div className="c-sidebarlist">
                    <div className="logo">
                        <Link to="/">
                            <img src={logo}></img>
                        </Link>
                    </div>
                    <Link className="nav-sidelink">
                        <img src={home_icon}/> Lorem Ipsum
                    </Link>
                    <Link className="nav-sidelink">
                        <img src={shop_icon}/> Lorem Ipsum
                    </Link>
                    <Link className="nav-sidelink">
                        <img src={like_icon}/> Lorem Ipsum
                    </Link>
                    <Link className="nav-sidelink">
                        <img src={partner_icon}/> Lorem Ipsum
                    </Link>
                </div>
            </List>
        </div>
    );

    return (
        <div className="c-header">
            <Container maxWidth="lg">
                <AppBar position="static">
                    <Toolbar>
                    {isMobile ? (
                        <>
                            <div className="c-mobilenav">
                                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"  onClick={toggleDrawer("left", true)}>
                                    <MenuIcon className="colorPrimary" />
                                </IconButton>
                                <div className="c-mobilelogo">
                                    <Link to="/">
                                        <img src={logom}></img>
                                    </Link>
                                </div>
                                <div className="c-btn">
                                    <Link className="c-mobilebtnlogin">
                                        <img className="" src={user_icon}/>
                                        LOGIN
                                    </Link>
                                </div>
                            </div>
                            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"  onClick={toggleDrawer("left", true)}>
                                <MenuIcon className="colorPrimary" />
                            </IconButton> */}
                            <Drawer
                                anchor="left"
                                open={state.left}
                                onOpen={toggleDrawer("left", true)}
                                onClose={toggleDrawer("left", false)}
                            >
                                {sideDrawerList("left")}
                            </Drawer>
                        </>
                    ) : (
                        <>
                            <div className="c-flex">
                                <div className="c-logo">
                                    <Link to="/">
                                        <img src={logom}></img>
                                    </Link>
                                </div>
                                <div className="c-wrap">
                                    <div className="c-category">
                                        <img src={category_icon}></img>
                                        <span>Category</span>
                                    </div>
                                    <div className="c-search desktop_flex">
                                        <div className="c-searchwrapper">
                                            <div className="c-searchicon">
                                                <img src={search_icon} />
                                            </div>
                                            <TextField
                                                className={classes.cForm}
                                                placeholder="Search"
                                            ></TextField>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="c-flexRight">
                                <div className="navbar-nav">
                                    <Link className="nav-link">
                                        <img src={home_icon}></img>
                                    </Link>
                                    <Link className="nav-link">
                                        <img src={shop_icon}></img>
                                    </Link>
                                    <Link className="nav-link">
                                        <img src={partner_icon}></img>
                                    </Link>
                                    <Link className="nav-link">
                                        <img src={like_icon}></img>
                                    </Link>
                                </div>
                                <div className="c-btn">
                                    <Link className="c-btnlogin">
                                        <img className="" src={user_icon}/>
                                        LOGIN
                                    </Link>
                                </div>
                            </div>
                        </>
                    )}
                    </Toolbar>
                </AppBar>
                
            </Container>
        </div>
    )
}
