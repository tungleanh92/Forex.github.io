import Upline from './Upline'
import React from 'react'
import {
    NavLink, BrowserRouter as Router,
    Switch, Route, useRouteMatch, useHistory, useLocation, Link
} from 'react-router-dom'
import { useSelector } from 'react-redux'
import './../../styles/less/pages/module/Header.less'
import Headeracc from '../pages/manageAcc/Header-acc'

const Header = ({ history }) => {

    var showMenu = useSelector(state => {
        return state.commonReducer.SectionListItemReducer
    })

    return (
        <>
            {
                history.location.pathname !== "/login" && history.location.pathname !== "/signup" ?
                    <div className="Header">
                        <div className="tab-control">
                            <div className="bg">
                                <ul className={`menu ${showMenu !== true ? "act" : "deact"}`}>
                                    <li><NavLink exact={true} to='/'>HOME</NavLink></li>
                                    <li><NavLink to='/about'>ABOUT US</NavLink></li>
                                    <li><NavLink to='/trading'>TRADING</NavLink></li>
                                </ul>
                            </div>

                            <div className="wrap">
                                <div className="acc">
                                    <div className="signup"><Link to='/signup'>Open Account</Link></div>
                                    <div className="login"><Link to='/login'>Log In</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <Headeracc />
            }
        </>
    )
}
export default Header;