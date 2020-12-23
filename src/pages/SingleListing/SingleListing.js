import React from 'react'
import { Container, Grid } from '@material-ui/core'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import avantar from '../../assets/images/avantar.png'
import thecomputer from '../../assets/images/thecomputer.png'
import thephone from '../../assets/images/thephone.png'
import banner2 from '../../assets/images/bannerChristmas2.png'
import share_icon from '../../assets/images/share.png'
import ads from '../../assets/images/ads.png'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddIcon from '@material-ui/icons/Add';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import DescriptionIcon from '@material-ui/icons/Description';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import { Link } from 'react-router-dom'
import './SingleListing.css'

export default function SingleListing() {
    const [tabsPhoto, setTabsPhoto] = React.useState(1);
    const [tabs, setTabs] = React.useState('Description');

    const handleChangeTabPhoto = (text) => {
        setTabsPhoto(text)
    }

    const handleChangeTab = (text) => {
        setTabs(text)
    }

    return (
        <React.Fragment>
            <Header/>
                <Container maxWidth="lg">
                    <div className="c-section">
                        <div className="c-banner2">
                            <img src={banner2} />
                        </div>
                        <div className="c-sectionbackground">
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <div className="c-title_">
                                        <p className="category">Desktop & Laptop</p>
                                        <p>The Verge Asus beats Acer to the ‘world’</p>
                                        <div className="c-row">
                                            <p>Listing ID: 51123134</p>
                                            <p>5 mins ago</p>
                                        </div>
                                    </div>
                                    <div className="c-prodimg">
                                        {tabsPhoto === 1 && 
                                            <img src={thecomputer}/>
                                        }
                                        {tabsPhoto === 2 && 
                                            <img src={thecomputer}/>
                                        }
                                        {tabsPhoto === 3 && 
                                            <img src={ads}/>
                                        }
                                        {tabsPhoto === 4 && 
                                            <img src={thecomputer}/>
                                        }
                                        {tabsPhoto === 5 && 
                                            <img src={thecomputer}/>
                                        }
                                        {tabsPhoto === 6 && 
                                            <img src={thecomputer}/>
                                        }
                                    </div>
                                    <div className="c-flexrowimg">
                                        <div onClick={()=>{handleChangeTabPhoto(1)}} className="nav-link">
                                            <img src={thecomputer}/>
                                        </div>
                                        <div onClick={()=>{handleChangeTabPhoto(2)}} className="nav-link">
                                            <img src={thecomputer}/>
                                        </div>
                                        <div onClick={()=>{handleChangeTabPhoto(3)}} className="nav-link">
                                            <img src={ads}/>
                                        </div>
                                        <div onClick={()=>{handleChangeTabPhoto(4)}} className="nav-link">
                                            <img src={thecomputer}/>
                                        </div>
                                        <div onClick={()=>{handleChangeTabPhoto(5)}} className="nav-link">
                                            <img src={thecomputer}/>
                                        </div>
                                        <div onClick={()=>{handleChangeTabPhoto(6)}} className="nav-link">
                                            <img src={thecomputer}/>
                                        </div>
                                        
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <div className="c-therow">
                                        <div className="c-subrow">
                                            <div className="c-avantar">
                                                <img src={avantar}/>
                                            </div>
                                            <div className="c-detail">
                                                <p className="bold">John Doe</p>
                                                <Link className="descrip">Check Profile</Link>
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
                                        <div className="c-row_">
                                            <div className="c-rowdetail">
                                                <p>Location</p>
                                            </div>
                                            <div className="c-rowdetail">
                                                <p>Johor Bahru</p>
                                            </div>
                                        </div>
                                        <div className="c-row_">
                                            <div className="c-rowdetail">
                                                <p>Condition</p>
                                            </div>
                                            <div className="c-rowdetail">
                                                <p>New</p>
                                            </div>
                                        
                                        </div>
                                        <div className="c-row_">
                                            <div className="c-rowdetail">
                                                <p>Price</p>
                                            </div>
                                            <div className="c-rowdetail">
                                                <p>RM 3899</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="c-subdetail_">
                                        <div className="nav">
                                            <Link className="nav-link">
                                                <FavoriteBorderOutlinedIcon className="colorSecondary"/>
                                                Like
                                            </Link>
                                            <Link className="nav-link">
                                                <img src={share_icon} />
                                                Share
                                            </Link>
                                        </div>
                                        <div className="c-contact">
                                            <Link className="c-btncontact">
                                                <MailIcon className="padd-right"/> Email
                                            </Link>
                                            <Link className="c-btncontact">
                                                <PhoneIcon className="padd-right"/> Contact
                                            </Link>
                                            <Link className="c-btncontact">
                                                <WhatsAppIcon className="padd-right"/> WhatsApp
                                            </Link>
                                            
                                        </div>
                                    </div>
                                    <div className="c-ads">
                                        <img src={ads}/>
                                    </div>
                                    
                                </Grid>
                            </Grid>
                            <div className="c-thedetail">
                                <div className="c-segement">
                                    <div className={tabs=='Description' ? "selectedIndex" : "unselectIndex"} onClick={()=>{handleChangeTab('Description')}}>
                                        <DescriptionIcon className="padd-right"/> Description
                                    </div>
                                    <div className={tabs=='Other' ? "selectedIndex" : "unselectIndex"}  onClick={()=>{handleChangeTab('Other')}}>
                                        Others (In Future Version)
                                    </div>
                                </div>
                                <div>
                                {tabs == 'Description' && 
                                    <div className="c-desp">
                                        <p>ASUS Laptop</p>
                                        <p>- i3 Processor</p>
                                        <p>- Window 10 Pro</p>
                                        <p>- NVIDIA GEForce 920M</p>
                                        <p>- 256GB SSD</p>
                                        <p>- 2GB Ram 64bit</p>
                                        <p>- 14” Screen</p>
                                        <p>- Microsoft Office 2019 Pro</p>
                                        <p>- Keypad & Battery run well</p>
                                        <p>- Condition 9.9/10 like new</p>
                                        <div>
                                            <p>Do you find this ad suspicious or inappropriate?</p>
                                        </div>
                                        <div className="c-report">
                                            <p>Reporting this listing. (ID: 51123134)</p>
                                        </div>
                                    </div>
                                    
                                }
                                </div>

                            </div>
                        </div>
                        <div className="c-2title">
                            <h3>You might also like</h3>
                        </div>
                        <div>
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
                                                    <WorkOutlineOutlinedIcon className="padd-right"/>
                                                    Company
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
