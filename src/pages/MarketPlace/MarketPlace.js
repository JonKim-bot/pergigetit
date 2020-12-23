import React, {useState} from 'react'
import { Container, Grid, TextField } from '@material-ui/core/'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import banner from '../../assets/images/bannerChristmas.png'
import banner2 from '../../assets/images/bannerChristmas2.png'
import avantar from '../../assets/images/avantar.png'
import thewatch from '../../assets/images/thewatch.png'
import thecomputer from '../../assets/images/thecomputer.png'
import search_icon from '../../assets/images/search_icon.png'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import './MarketPlace.css'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import SearchIcon from '@material-ui/icons/Search';
import ListIcon from '@material-ui/icons/List';
import all_icon from '../../assets/images/icon_all.png'
import new_icon from '../../assets/images/icon_new.png'
import fast_icon from '../../assets/images/icon_fast.png'
import sold_icon from '../../assets/images/icon_sold.png'
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import FormHelperText from '@material-ui/core/FormHelperText';


const useStyles = makeStyles(theme => ({
    cForm: {
       fontWeight: 200
    },
    formControl: {
        // margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        // marginTop: theme.spacing(2),
    },
}));

export default function MarketPlace() {
    const classes = useStyles();
    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
            },
            {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
    };

    //Dropdown
    const [age, setAge] = React.useState('');
      
        const handleChange = (event) => {
          setAge(event.target.value);
        };

    //Tab
    const [index, setIndex] = useState('1');

    const onChangeIndex = (text) => {
        setIndex(text)
    }
        
    return (
        <React.Fragment>
            <Header/>
            <div className="c-banner">
                <img src={banner2}/>
            </div>
            <Container>
                <div className="c-section">
                    <div className="c-title">
                        <div className="c-left">
                            <div className="c-search desktop_flex">
                                <div className="c-searchwrapper">
                                    <TextField
                                        className={classes.cForm}
                                        placeholder="What are you looking for?"
                                    ></TextField>
                                </div>
                            </div>
                        </div>
                        <div className="c-right">
                            <div className="c-search desktop_flex">
                                <div className="c-searchwrapper">
                                <FormControl className={classes.formControl}>
                                    <Select
                                    value={age}
                                    onChange={handleChange}
                                    displayEmpty
                                    className={classes.selectEmpty}
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                    <MenuItem value="" disabled>
                                        Brand
                                    </MenuItem>
                                    <MenuItem value={10}>Brand1</MenuItem>
                                    <MenuItem value={20}>Brand2</MenuItem>
                                    <MenuItem value={30}>Brand3</MenuItem>
                                    </Select>
                                </FormControl>
                                </div>
                            </div>
                            <div className="c-search desktop_flex">
                                <div className="c-searchwrapper">
                                <FormControl className={classes.formControl}>
                                    <Select
                                    value={age}
                                    onChange={handleChange}
                                    displayEmpty
                                    className={classes.selectEmpty}
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                    <MenuItem value="" disabled>
                                        All Categories
                                    </MenuItem>
                                    <MenuItem value={30}>All Categories</MenuItem>
                                    <MenuItem value={20}>Category1</MenuItem>
                                    <MenuItem value={30}>Category2</MenuItem>
                                    </Select>
                                </FormControl>
                                </div>
                            </div>
                            <div className="c-btn">
                                <Link className="c-btnprimary">
                                    <SearchIcon style={{color: "#fff", paddingRight: 5}}/>
                                    Search
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="c-list">
                        <div className="c-listLeft">
                            <div 
                            onClick={ () => { onChangeIndex('1') } }
                            className={ index==='1' ? "c-btn-active" : "c-btn-unactive" }>
                                <Link className="c-btnprimary">
                                    <div className="c-searchicon">
                                        <img src={all_icon} />
                                    </div>
                                    All (145)
                                </Link>
                            </div>
                            <div onClick={ () => { onChangeIndex('2') } }
                            className={ index==='2' ? "c-btn-active" : "c-btn-unactive" }>
                                <Link className="c-btnprimary">
                                    <div className="c-searchicon">
                                        <img src={new_icon} />
                                    </div>
                                    New (5)
                                </Link>
                            </div>
                            <div className="c-btn-unactive">
                                <Link className="c-btnprimary">
                                    <div className="c-searchicon">
                                        <img src={fast_icon} />
                                    </div>
                                    Selling Fast (145)
                                </Link>
                            </div>
                            <div className="c-btn-unactive">
                                <Link className="c-btnprimary">
                                    <div className="c-searchicon">
                                        <img src={sold_icon} />
                                    </div>
                                    Sold Out (345)
                                </Link>
                            </div>
                            <div className="c-search desktop_flex">
                                <div className="c-searchwrapper">
                                <FormControl className={classes.formControl}>
                                    <Select
                                    value={age}
                                    onChange={handleChange}
                                    displayEmpty
                                    className={classes.selectEmpty}
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                    <MenuItem value="" disabled>
                                        Brand
                                    </MenuItem>
                                    <MenuItem value={10}>Brand1</MenuItem>
                                    <MenuItem value={20}>Brand2</MenuItem>
                                    <MenuItem value={30}>Brand3</MenuItem>
                                    </Select>
                                </FormControl>
                                </div>
                            </div>
                        </div>
                    </div>
                    { index === '1' && 
                    <div>
                        <Grid container spacing={3}>
                            <Grid xs={6} md={4}>
                                <div className="c-card">
                                    <div className="c-therow">
                                        <div className="c-subrow">
                                            <div className="c-avantar">
                                                <img src={avantar}/>
                                            </div>
                                            <div className="c-detail">
                                                <p className="bold">JNDesign Store</p>
                                                <p className="descrip">345 listings available, Johor Bahru, Johor</p>
                                            </div>
                                        </div>
                                        <div className="c-navbox">
                                            <Link className="nav-link colorprimary">
                                                <AddIcon className="padd-right"/>
                                                Follow
                                            </Link>
                                            <Link className="nav-link">
                                                <AccountCircleOutlinedIcon className="padd-right"/>
                                                Private
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="c-subdetail">
                                        <p>Watch Accessories</p>
                                        <p>CASIO Watch for Men MTP-VT01G-7BUDF</p>
                                    </div>
                                    <div className="c-freshprod">
                                        <img src={thecomputer}/>
                                    </div>
                                    <div className="c-btn">
                                        <Link className="c-btnprimary">
                                            Visit Store
                                        </Link>
                                    </div>
                                </div>
                            </Grid>
                            <Grid xs={6} md={4}>
                                <div className="c-card">
                                    <div className="c-therow">
                                        <div className="c-subrow">
                                            <div className="c-avantar">
                                                <img src={avantar}/>
                                            </div>
                                            <div className="c-detail">
                                                <p className="bold">JNDesign Store</p>
                                                <p className="descrip">345 listings available, Johor Bahru, Johor</p>
                                            </div>
                                        </div>
                                        <div className="c-navbox">
                                            <Link className="nav-link colorprimary">
                                                <AddIcon className="padd-right"/>
                                                Follow
                                            </Link>
                                            <Link className="nav-link">
                                                <AccountCircleOutlinedIcon className="padd-right"/>
                                                Private
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="c-subdetail">
                                        <p>Watch Accessories</p>
                                        <p>CASIO Watch for Men MTP-VT01G-7BUDF</p>
                                    </div>
                                    <div className="c-freshprod">
                                        <img src={thecomputer}/>
                                    </div>
                                    <div className="c-btn">
                                        <Link className="c-btnprimary">
                                            Visit Store
                                        </Link>
                                    </div>
                                </div>
                            </Grid>
                            <Grid xs={6} md={4}>
                            <div className="c-card">
                                    <div className="c-therow">
                                        <div className="c-subrow">
                                            <div className="c-avantar">
                                                <img src={avantar}/>
                                            </div>
                                            <div className="c-detail">
                                                <p className="bold">JNDesign Store</p>
                                                <p className="descrip">345 listings available, Johor Bahru, Johor</p>
                                            </div>
                                        </div>
                                        <div className="c-navbox">
                                            <Link className="nav-link colorprimary">
                                                <AddIcon className="padd-right"/>
                                                Follow
                                            </Link>
                                            <Link className="nav-link">
                                                <AccountCircleOutlinedIcon className="padd-right"/>
                                                Private
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="c-subdetail">
                                        <p>Watch Accessories</p>
                                        <p>CASIO Watch for Men MTP-VT01G-7BUDF</p>
                                    </div>
                                    <div className="c-freshprod">
                                        <img src={thecomputer}/>
                                    </div>
                                    <div className="c-btn">
                                        <Link className="c-btnprimary">
                                            Visit Store
                                        </Link>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                    
                    }

                    { index === '2' && 
                    <div>
                        <Grid container spacing={3}>
                            <Grid xs={6} md={4}>
                                <div className="c-card">
                                    <div className="c-therow">
                                        <div className="c-subrow">
                                            <div className="c-avantar">
                                                <img src={avantar}/>
                                            </div>
                                            <div className="c-detail">
                                                <p className="bold">JNDesign Store</p>
                                                <p className="descrip">345 listings available, Johor Bahru, Johor</p>
                                            </div>
                                        </div>
                                        <div className="c-navbox">
                                            <Link className="nav-link colorprimary">
                                                <AddIcon className="padd-right"/>
                                                Follow
                                            </Link>
                                            <Link className="nav-link">
                                                <AccountCircleOutlinedIcon className="padd-right"/>
                                                Private
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="c-subdetail">
                                        <p>Watch Accessories</p>
                                        <p>CASIO Watch for Men MTP-VT01G-7BUDF</p>
                                    </div>
                                    <div className="c-freshprod">
                                        <img src={thecomputer}/>
                                    </div>
                                    <div className="c-btn">
                                        <Link className="c-btnprimary">
                                            Visit Store
                                        </Link>
                                    </div>
                                </div>
                            </Grid>
                            <Grid xs={6} md={4}>
                                <div className="c-card">
                                    <div className="c-therow">
                                        <div className="c-subrow">
                                            <div className="c-avantar">
                                                <img src={avantar}/>
                                            </div>
                                            <div className="c-detail">
                                                <p className="bold">JNDesign Store</p>
                                                <p className="descrip">345 listings available, Johor Bahru, Johor</p>
                                            </div>
                                        </div>
                                        <div className="c-navbox">
                                            <Link className="nav-link colorprimary">
                                                <AddIcon className="padd-right"/>
                                                Follow
                                            </Link>
                                            <Link className="nav-link">
                                                <AccountCircleOutlinedIcon className="padd-right"/>
                                                Private
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="c-subdetail">
                                        <p>Watch Accessories</p>
                                        <p>CASIO Watch for Men MTP-VT01G-7BUDF</p>
                                    </div>
                                    <div className="c-freshprod">
                                        <img src={thecomputer}/>
                                    </div>
                                    <div className="c-btn">
                                        <Link className="c-btnprimary">
                                            Visit Store
                                        </Link>
                                    </div>
                                </div>
                            </Grid>
                            <Grid xs={6} md={4}>
                            <div className="c-card">
                                    <div className="c-therow">
                                        <div className="c-subrow">
                                            <div className="c-avantar">
                                                <img src={avantar}/>
                                            </div>
                                            <div className="c-detail">
                                                <p className="bold">JNDesign Store</p>
                                                <p className="descrip">345 listings available, Johor Bahru, Johor</p>
                                            </div>
                                        </div>
                                        <div className="c-navbox">
                                            <Link className="nav-link colorprimary">
                                                <AddIcon className="padd-right"/>
                                                Follow
                                            </Link>
                                            <Link className="nav-link">
                                                <AccountCircleOutlinedIcon className="padd-right"/>
                                                Private
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="c-subdetail">
                                        <p>Watch Accessories</p>
                                        <p>CASIO Watch for Men MTP-VT01G-7BUDF</p>
                                    </div>
                                    <div className="c-freshprod">
                                        <img src={thecomputer}/>
                                    </div>
                                    <div className="c-btn">
                                        <Link className="c-btnprimary">
                                            Visit Store
                                        </Link>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                    
                    }
                    
                </div>

                
            </Container>
            <Footer/>
        </React.Fragment>
    )
}
