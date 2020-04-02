import React, { useState, useReducer, Fragment, useEffect } from 'react'
import Upline from './Upline'
import Downline from './Downline'
import Footer from './Footer'
import About from '../pages/aboutPage/About'
import Home from '../pages/homePage/Home'
import Trading from '../pages/tradingPage/Trading'
import './../../styles/less/tool.less'
import './../../styles/less/pages/index.less'
import {
    Link, BrowserRouter as Router,
    Switch, Route, useRouteMatch, useHistory, useLocation
} from 'react-router-dom';
import ManageAcc from '../pages/manageAcc/ManageAcc'
import Header from './Header'
import Login from '../pages/manageAcc/Login'
import Signup from '../pages/manageAcc/Signup'
import Main from './main'
import HomePage from '../pages/homePage'
import AboutPage from '../pages/aboutPage'

const Layout = () => {
    return (
        <> 
            <Router>
                <Route children={({history}) => <Main history={history}/>} />  
            </Router>
            <Footer />
        </>
    )
}


export default Layout;
