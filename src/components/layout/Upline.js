import React, { useState } from 'react';
import './../../styles/less/tool.less'
import './../../styles/less/pages.less'
import { useDispatch } from 'react-redux';
import * as actions from './../../states/duck/common/sectionlistitem/actions';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom'

var initialOption = "en";

const Upline = () => {
    const [option, setOption] = useState(initialOption)

    function onChange(event) {
        var target = event.target
        var value = target.type === 'checkbox' ? target.checked : target.value;

        setOption(
            initialOption = value
        );
    }

    const dispatch = useDispatch();

    function showMenu() {
        dispatch(actions.showMenu());
    }

    return (
        <div className="Upline">
            <div className="bs-container">
                <div className="bs-row">
                    <div className="flex">
                        <span
                            className="bars"
                            onClick={showMenu}
                        ><i className="fas fa-bars"></i></span>
                        <div className="logo">
                            <Link exact="true" to='/'>
                                <img src="./../../../static/images/logo.png" />
                            </Link>
                        </div>

                        <div className={option === "en" ? "en" : "vi"}  >
                            <select
                                name="lang"
                                value={option}
                                onChange={onChange}
                            >
                                <option value="en">EN</option>
                                <option value="vi">VI</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Upline;