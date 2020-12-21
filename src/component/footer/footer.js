import React, { Component } from "react";
import "../footer/footer.css";
import Logo from "../../assets/img/logo.png";
import { fade, makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";
import { List } from "@material-ui/core";

export default function Footer({}) {
  return (
      <>
    <div className="footer">
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justify="space-between"
          alignSelf = "center"
        >
          <div className="c-list">
            <ul className ="c-inner-list">
              <li className="first-list"><h4>Propular Category</h4></li>
              <li>Vehicles</li>
              <li>Property</li>
              <li>Apparel</li>
              <li>Electronics</li>
              <li>Entertainment</li>
              <li>Home Goods</li>
              <li>Pet Supplies</li>
              <li>Toy & Games</li>
            </ul>
          </div>
          <div className="c-list">
            <ul className ="c-inner-list">
              <li className="first-list"><h4>Got It Account</h4></li>
              <li>Sign In</li>
              <li>Register</li>
              <li>Forgot Password</li>
            </ul>
          </div>
          <div className="c-list">
            <ul className ="c-inner-list">
              <li className="first-list"><h4>Sell</h4></li>
              <li>Upload Product</li>
              <li>Buy Slot</li>
            </ul>
          </div>
          <div className="c-list">
            <ul className ="c-inner-list">
              <li className="first-list"><h4>Follow Us</h4></li>
              <li>Facebook</li>
              <li>Istagram</li>
              <li>Twitter</li>
            </ul>
          </div>
        </Grid>

        </Container>


    </div>
        <div className="footer-bar">
            <Container maxWidth="lg"
            className="footer-inner-div"
            style={{display:'flex'}}
            >

        <Grid
          container
          direction="row"
          justify="flex-start"
          alignSelf = "center"
        >


                <div className="footer-bar-inner first">
                    <p>© Got It 2020</p>
                </div>
                <div className="footer-bar-inner">
                    <p>Help Centre</p>
                </div>
                <div className="footer-bar-inner">
                    <p>Advertise with Us</p>
                </div>
                <div className="footer-bar-inner">
                    <p>Terms</p>
                </div>
                <div className="footer-bar-inner">
                    <p>Privacy</p>
                </div>
        </Grid>
            </Container>

        </div>

    </>
  );
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
