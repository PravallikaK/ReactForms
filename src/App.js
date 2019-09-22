import React, { Component } from 'react';
import {Route, Link, BrowserRouter as Router} from "react-router-dom";

import Home from "./Components/Home";
import Favorites from "./Components/Favorites";

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Link to="/" >Home</Link> 
                    <Link to="/Favories">Favorites</Link>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/Favorites" component={Favorites}></Route>
                </Router>
            </div>
        )
    }
}
