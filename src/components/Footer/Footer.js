import React from 'react'
import { Container, Grid } from '@material-ui/core'
import {Link } from 'react-router-dom'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import './Footer.css'

export default function Footer() {
    return (
        <React.Fragment>
            <div className="c-footer">
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={3}>
                            <div className="navbar-footernav">
                                <h4>Product Category</h4>
                                <Link className="nav-footerlink">
                                    Vehicles
                                </Link>
                                <Link className="nav-footerlink">
                                    Property
                                </Link>
                                <Link className="nav-footerlink">
                                    Apperal
                                </Link>
                                <Link className="nav-footerlink">
                                    Electronics
                                </Link>
                                <Link className="nav-footerlink">
                                    Entertaiment
                                </Link>
                                <Link className="nav-footerlink">
                                    Home Goods
                                </Link>
                                <Link className="nav-footerlink">
                                    Pet Supplies
                                </Link>
                                <Link className="nav-footerlink">
                                    Toy and Games
                                </Link>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <h4>Follow Us</h4>
                            <div className="navbar-footernav">
                                <Link className="nav-socialfooter">
                                    <FacebookIcon/>
                                </Link>
                                <Link className="nav-socialfooter">
                                    <InstagramIcon/>
                                </Link>
                                <Link className="nav-socialfooter">
                                    <YouTubeIcon/>
                                </Link>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className="c-subfooter">
                <div className="navbar-footernav">
                    <Link className="nav-sublink">
                        Help Centre
                    </Link>
                    <Link className="nav-sublink">
                        Contact Us
                    </Link>
                    <Link className="nav-sublink">
                        Help Centre
                    </Link>
                    <Link className="nav-sublink">
                        Advertise with Us
                    </Link>
                    <Link className="nav-sublink">
                        Terms
                    </Link>
                    <Link className="nav-sublink">
                        Privacy
                    </Link>
                </div>
                <div className="c-copyright">
                    <p>© Go It 2020. All Rights Reserved</p>
                </div>
            </div>
        </React.Fragment>
    )
}
