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
              <li>123213</li>
              <li>123213</li>
              <li>123213</li>
              <li>123213</li>
              <li>123213</li>
              <li>123213</li>
            </ul>
          </div>
          <div className="c-list">
            <ul className ="c-inner-list">
              <li className="first-list"><h4>Propular Category</h4></li>
              <li>123213</li>
              <li>123213</li>
              <li>123213</li>
              <li>123213</li>
              <li>123213</li>
              <li>123213</li>
            </ul>
          </div>
          <div className="c-list">
            <ul className ="c-inner-list">
              <li className="first-list"><h4>Propular Category</h4></li>
              <li>123213</li>
              <li>123213</li>
              <li>123213</li>
              <li>123213</li>
              <li>123213</li>
              <li>123213</li>
            </ul>
          </div>
          <div className="c-list">
            <ul className ="c-inner-list">
              <li className="first-list"><h4>Propular Category</h4></li>
              <li>123213</li>
              <li>123213</li>
              <li>123213</li>
              <li>123213</li>
              <li>123213</li>
              <li>123213</li>
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
          justify="space-between"
          alignSelf = "center"
        >


                <div className="footer-bar-inner first">
                    <p>Words</p>
                </div>
                <div className="footer-bar-inner">
                    <p>Words</p>
                </div>
                <div className="footer-bar-inner">
                    <p>Words</p>
                </div>
                <div className="footer-bar-inner">
                    <p>Words</p>
                </div>
                <div className="footer-bar-inner">
                    <p>Words</p>
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
