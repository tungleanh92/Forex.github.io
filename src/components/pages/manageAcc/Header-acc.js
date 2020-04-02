import React from 'react'
import './../../../styles/less/pages/module/Headeracc.less'
import { NavLink, BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Upline from './../../layout/Upline'

export default function Headeracc() {
    var showMenu = useSelector(state => {
        return state.commonReducer.SectionListItemReducer
    })

    return (
        <>
            <div className="Header-acc">
                <div className="tab-control">
                    <ul className={`menu ${showMenu !== true ? "act" : "deact"}`}>
                        <li><NavLink activeClassName="active" to='/signup'>SIGN UP</NavLink></li>
                        <li><NavLink activeClassName="active" to='/login'>LOG IN</NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    )
}