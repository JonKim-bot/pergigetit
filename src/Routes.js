import React from 'react'
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/Home/Home'
import SingleListingPage from './pages/SingleListing/SingleListing'
import RegisterPage from './pages/Register/Register'
import MarketPlace from './pages/MarketPlace/MarketPlace'
import Profile from './pages/Profile/Profile'

export default function Routes() {
    return (
        <Switch>
           <Route exact path="/" render={(props) => (
                <HomePage {...props}></HomePage>
            )}>
            </Route>
            <Route exact path="/MarketPlace" render={(props) => (
                <MarketPlace {...props}></MarketPlace>
            )}>
            </Route>
            <Route exact path="/Profile" render={(props) => (
                <Profile {...props}></Profile>
            )}>
            <Route exact path="/SingleListingPage" render={(props) => (
                <SingleListingPage {...props}></SingleListingPage>
            )}></Route>
            <Route exact path="/Register" render={(props) => (
                <RegisterPage {...props}></RegisterPage>
            )}></Route>
            </Route>
        </Switch>
    )
}
