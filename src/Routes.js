import React from 'react'
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/Home/Home'
import MarketPlace from './pages/MarketPlace/MarketPlace'

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
        </Switch>
    )
}
