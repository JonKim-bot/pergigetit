import React from 'react'
import { Container, TextField } from '@material-ui/core/'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Link } from 'react-router-dom'
import './Header.css'
import logo from '../../assets/images/gogetit_logo.png'
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
       fontWeight: 200
    }
}));

export default function Header() {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <div className="c-header">
            <Container maxWidth="lg">
                <div className="c-flex">
                    <div className="c-logo">
                        <Link to="/">
                            <img src={logo}></img>
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
            </Container>
        </div>
    )
}
