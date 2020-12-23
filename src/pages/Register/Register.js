import React from 'react'
import { Container, Grid, Radio, RadioGroup, FormControlLabel, FormControl, TextField } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './Register.css'
import { Link } from 'react-router-dom'

export default function Register() {

    const [tabs, setTabs] = React.useState("UserProfile");

    const handleChangeTab = (text) => {
        setTabs(text)
    }

    const useStyles = makeStyles({
        root: {
            '&:hover': {
                backgroundColor: 'transparent',
            },
        },
        icon: {
                borderRadius: '50%',
                width: 16,
                height: 16,
                boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
                backgroundColor: '#f5f8fa',
                '$root.Mui-focusVisible &': {
                outline: '2px auto rgba(19,124,189,.6)',
                outlineOffset: 2,
            },
            
            'input:disabled ~ &': {
                boxShadow: 'none',
                background: 'rgba(206,217,224,.5)',
            },
        },
        checkedIcon: {
            backgroundColor: '#af8231',
            backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
            '&:before': {
                display: 'block',
                width: 16,
                height: 16,
                backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
                content: '""',
            },
            
        },
    });

    function StyledRadio(props) {
        const classes = useStyles();
        
        return (
            <Radio
            className={classes.root}
            disableRipple
            color="default"
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
            icon={<span className={classes.icon} />}
            {...props}
            />
        );
    }
    
    return (
        <React.Fragment>
            <Header/>
                <Container>
                    <div className="c-sectionRegister">
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={4} md={3} lg={4}>
                                <div className="c-bigtitle">
                                    <h2>Register Form</h2>
                                    <p>Complete your profile here, let's get started!</p>
                                </div>
                                <div className="c-vsegement">
                                    <div className={tabs=="UserProfile" ? "activetab" : "tab"} >
                                        User Profile
                                    </div>
                                    <div className={tabs=="CompanyAddress" ? "activetab" : "tab"}>
                                       Company Address
                                    </div>
                                    <div className={tabs=="BankInformation" ? "activetab" : "tab"}>
                                        Bank Information
                                    </div>
                                    <div className={tabs=="UploadDocuments" ? "activetab" : "tab"}>
                                        Upload Documents
                                    </div>
                                </div>
                            </Grid>
                             <Grid item xs={12} sm={8} md={9} lg={8}>
                                <div>
                                    {tabs == "UserProfile" && 
                                        <div className="c-sectionx">
                                            <div className="c-toptitle">
                                                <h3>User Profile</h3>
                                                <FormControl component="fieldset">
                                                    <RadioGroup defaultValue="Private" name="customized-radios">
                                                        <FormControlLabel value="Private" control={<StyledRadio />} label="Private" />
                                                        <FormControlLabel value="Company" control={<StyledRadio />} label="Company" />
                                                    </RadioGroup>
                                                </FormControl>
                                                <div className="c-label">
                                                    <p>Already got an account, </p>
                                                    <Link className="nav-link">
                                                         Forget your password?
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="">
                                                <Grid container spacing={3}>
                                                    <Grid item xs={12} sm={6}>
                                                        <p>Full Name / Company Name *</p>
                                                        <TextField
                                                            className="form-control"
                                                            placeholder="Full Name / Company Name"
                                                            required
                                                        ></TextField>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <p>Store Username *</p>
                                                        <TextField
                                                            className="form-control"
                                                            placeholder="Store Username"
                                                            required
                                                        ></TextField>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <p>Email Address *</p>
                                                        <TextField
                                                            className="form-control"
                                                            placeholder="Email Address"
                                                            required
                                                        ></TextField>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <p>Phone Number</p>
                                                        <TextField
                                                            className="form-control"
                                                            placeholder="Phone Number"
                                                            required
                                                            type="number"
                                                        ></TextField>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <p>Password *</p>
                                                        <TextField
                                                            className="form-control"
                                                            placeholder="Password"
                                                            required
                                                            type="password"
                                                        ></TextField>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <p>Confirm Password *</p>
                                                        <TextField
                                                            className="form-control"
                                                            placeholder="Confirm Password"
                                                            type="password"
                                                        ></TextField>
                                                    </Grid>
                                                </Grid>
                                                <div className="c-btn1">
                                                    <Link className="c-btnPrimary"  onClick={()=>{handleChangeTab("CompanyAddress")}}>
                                                        Next
                                                    </Link>
                                                </div>

                                            </div>
                                        </div>
                                    }
                                    {tabs == "CompanyAddress" && 
                                        <div className="c-sectionx">
                                            <div className="c-toptitle">
                                                <h3>User Profile</h3>
                                                <FormControl component="fieldset">
                                                    <RadioGroup defaultValue="Private" name="customized-radios">
                                                        <FormControlLabel value="Private" control={<StyledRadio />} label="Private" />
                                                        <FormControlLabel value="Company" control={<StyledRadio />} label="Company" />
                                                    </RadioGroup>
                                                </FormControl>
                                                <div className="c-label">
                                                    <p>Already got an account, </p>
                                                    <Link className="nav-link">
                                                        Forget your password?
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="">
                                                <Grid container spacing={3}>
                                                    <Grid item xs={12} sm={6}>
                                                        <p>Full Name / Company Name *</p>
                                                        <TextField
                                                            className="form-control"
                                                            placeholder="Full Name / Company Name"
                                                            required
                                                        ></TextField>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <p>Store Username *</p>
                                                        <TextField
                                                            className="form-control"
                                                            placeholder="Store Username"
                                                            required
                                                        ></TextField>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <p>Email Address *</p>
                                                        <TextField
                                                            className="form-control"
                                                            placeholder="Email Address"
                                                            required
                                                        ></TextField>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <p>Phone Number</p>
                                                        <TextField
                                                            className="form-control"
                                                            placeholder="Phone Number"
                                                            required
                                                            type="number"
                                                        ></TextField>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <p>Password *</p>
                                                        <TextField
                                                            className="form-control"
                                                            placeholder="Password"
                                                            required
                                                            type="password"
                                                        ></TextField>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <p>Confirm Password *</p>
                                                        <TextField
                                                            className="form-control"
                                                            placeholder="Confirm Password"
                                                            type="password"
                                                        ></TextField>
                                                    </Grid>
                                                </Grid>
                                                <div className="c-btn2">
                                                    <Link className="c-btnPrimary"  onClick={()=>{handleChangeTab("UserProfile")}}>
                                                        Previous
                                                    </Link>
                                                    <Link className="c-btnPrimary"  onClick={()=>{handleChangeTab("BankInformation")}}>
                                                        Next
                                                    </Link>
                                                </div>
                                                

                                            </div>
                                        </div>
                                    }
                                    {tabs == "BankInformation" && 
                                        <div>

                                        </div>
                                    }
                                    {tabs == "UploadDocuments" && 
                                        <div>

                                        </div>
                                    }
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
                
            <Footer/>
        </React.Fragment>
    )
}
