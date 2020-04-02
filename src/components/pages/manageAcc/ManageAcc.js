import React, { useState, useReducer } from 'react'
import './../../../styles/less/tool.less'
import './../../../styles/less/pages.less'
import './../../../styles/less/pages/module/ManageAcc.less'
import Upline from '../../layout/Upline'
import Footer from '../../layout/Footer'
import Signup from './Signup'
import Login from './Login'
import Headeracc from './Header-acc'
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const ManageAcc = () => {
    return (
        <div className="manageacc">
            <span className="poly-wrap-sm">
                <span className="poly">
                </span>
            </span>
            <span className="poly-wrap-lg">
                <span className="poly">
                </span>
            </span>
            <Headeracc />
            <div className="bs-container">
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/signup">
                        <Signup />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default ManageAcc;