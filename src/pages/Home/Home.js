import React from 'react'
import { Container, Grid } from '@material-ui/core/'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import banner from '../../assets/images/bannerChristmas.png'
import banner2 from '../../assets/images/bannerChristmas2.png'
import avantar from '../../assets/images/avantar.png'
import thewatch from '../../assets/images/thewatch.png'
import thecomputer from '../../assets/images/thecomputer.png'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import './Home.css'


export default function Home() {
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
    return (
        <React.Fragment>
            <Header/>
            <div className="c-banner">
                <img src={banner}/>
            </div>
            <Container>
                <div className="c-section">
                    <h2>Feature Store</h2>
                    <Slider {...settings}>
                        <div>
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
                                    <p>We are specialzed in Geniune & Fashion Watch, visit our store to view more watches options </p>
                                </div>
                                <Grid container spacing={3}>
                                    <Grid item xs={4}>
                                        <div className="c-prod">
                                            <img src={thewatch}/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div className="c-prod">
                                            <img src={thewatch}/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div className="c-prod">
                                            <img src={thewatch}/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div className="c-prod">
                                            <img src={thewatch}/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div className="c-prod">
                                            <img src={thewatch}/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div className="c-prod">
                                            <img src={thewatch}/>
                                        </div>
                                    </Grid>
                                </Grid>
                                <div className="c-btn">
                                    <Link className="c-btnprimary">
                                        Visit Store
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div>
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
                                    <p>We are specialzed in Geniune & Fashion Watch, visit our store to view more watches options </p>
                                </div>
                                <Grid container spacing={3}>
                                    <Grid item xs={4}>
                                        <div className="c-prod">
                                            <img src={thewatch}/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div className="c-prod">
                                            <img src={thewatch}/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div className="c-prod">
                                            <img src={thewatch}/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div className="c-prod">
                                            <img src={thewatch}/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div className="c-prod">
                                            <img src={thewatch}/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div className="c-prod">
                                            <img src={thewatch}/>
                                        </div>
                                    </Grid>
                                </Grid>
                                <div className="c-btn">
                                    <Link className="c-btnprimary">
                                        Visit Store
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div>
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
                                    <p>We are specialzed in Geniune & Fashion Watch, visit our store to view more watches options </p>
                                </div>
                                <Grid container spacing={3}>
                                    <Grid item xs={4}>
                                        <div className="c-prod">
                                            <img src={thewatch}/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div className="c-prod">
                                            <img src={thewatch}/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div className="c-prod">
                                            <img src={thewatch}/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div className="c-prod">
                                            <img src={thewatch}/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div className="c-prod">
                                            <img src={thewatch}/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div className="c-prod">
                                            <img src={thewatch}/>
                                        </div>
                                    </Grid>
                                </Grid>
                                <div className="c-btn">
                                    <Link className="c-btnprimary">
                                        Visit Store
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div>
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
                                    <p>We are specialzed in Geniune & Fashion Watch, visit our store to view more watches options </p>
                                </div>
                                <Grid container spacing={3}>
                                    <Grid item xs={4}>
                                        <div className="c-prod">
                                            <img src={thewatch}/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div className="c-prod">
                                            <img src={thewatch}/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div className="c-prod">
                                            <img src={thewatch}/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div className="c-prod">
                                            <img src={thewatch}/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div className="c-prod">
                                            <img src={thewatch}/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div className="c-prod">
                                            <img src={thewatch}/>
                                        </div>
                                    </Grid>
                                </Grid>
                                <div className="c-btn">
                                    <Link className="c-btnprimary">
                                        Visit Store
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Slider>
                    <div className="c-banner2">
                        <img src={banner2}/>
                    </div>
                    <div className="c-title">
                        <h2>Fresh Listings</h2>
                    </div>
                    <div className="c-section">
                        <Grid container spacing={3}>
                            <Grid xs={12} sm={6} md={4}>
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
                                    <div className="c-freshdetail">
                                        <div>
                                            <FavoriteIcon className="colorHeart"/>
                                        </div>
                                        <div>
                                            RM 3,899
                                        </div>
                                        <div>
                                            New
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid xs={12} sm={6} md={4}>
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
                                    <div className="c-freshdetail">
                                        <div>
                                            <FavoriteIcon className="colorHeart"/>
                                        </div>
                                        <div>
                                            RM 3,899
                                        </div>
                                        <div>
                                            New
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid xs={12} sm={6} md={4}>
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
                                    <div className="c-freshdetail">
                                        <div>
                                            <FavoriteIcon className="colorHeart"/>
                                        </div>
                                        <div>
                                            RM 3,899
                                        </div>
                                        <div>
                                            New
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>

                
            </Container>
            <Footer/>
        </React.Fragment>
    )
}
