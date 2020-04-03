import React, { useEffect, useReducer, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import About from '../pages/aboutPage/About'
import Home from '../pages/homePage/Home'
import Login from '../pages/manageAcc/Login'
import Signup from '../pages/manageAcc/Signup'
import Trading from '../pages/tradingPage/Trading'
import './../../styles/less/pages/index.less'
import './../../styles/less/tool.less'
import Downline from './Downline'
import Header from './Header'
import Upline from './Upline'

const reducer = (state, action) => {
    switch (action.type) {
        case "change_name":
            return { ...state, name: action.value }
        case "change_email":
            return { ...state, email: action.value }
        case "change_phone":
            return { ...state, phone: action.value }
        case "change_lang":
            return { ...state, lang: action.value }
        case "change_mess":
            return { ...state, mess: action.value }
        default:
            throw new Error();
    }
}

const initialState = {
    name: '',
    email: '',
    phone: '',
    lang: '',
    mess: ''
}

var initialMess = 0;

const Main = ({ history }) => {
    const [scrolled, setScrolled] = useState()

    useEffect(_ => {
        const handleScroll = _ => {
            if (window.pageYOffset > 500) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return _ => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const [mess, setMess] = useState(initialMess)

    function openMess() {
        setMess(initialMess = 1);
    }
    function closeMess() {
        setMess(initialMess = 0);
    }
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <Upline />

            <Route children={({ history }) => <Header history={history} />} />

            <div className={`${(history.location.pathname === "/about" || history.location.pathname === "/trading") ? "" : "func"} main`}>
                {/* {
                    history.location.pathname !== "/login" && history.location.pathname !== "/signup" ?
                        <>
                            <span className="poly-wrap">
                                <span className="poly">
                                </span>
                            </span>
                            <span className="poly-wrap">
                                <span className="poly">
                                </span>
                            </span>
                            <span className="poly-wrap">
                                <span className="poly">
                                </span>
                            </span>
                            <span className="poly-wrap">
                                <span className="poly">
                                </span>
                            </span>
                        </>
                        :
                        <>
                            <span className="poly-wrap-acc">
                                <span className="poly-acc">
                                </span>
                            </span>
                            <span className="poly-wrap-acc">
                                <span className="poly-acc">
                                </span>
                            </span>
                        </>
                } */}

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/trading">
                        <Trading />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/signup">
                        <Signup />
                    </Route>
                </Switch>

                <div className={`${mess === 1 ? "show" : "hide"} section-form`}>
                    <div className="form-header">
                        <p>Livechat</p>
                        <span onClick={closeMess}><img src="./../../../static/images/close.png" /></span>
                    </div>
                    <form className="form-input">
                        <p>Your name<span>*</span></p>
                        <input
                            type="text"
                            name="name"
                            value={state.name}
                            onChange={(event) => dispatch({ type: "change_name", value: event.target.value })}
                            required="required"
                        />
                        <p>Email<span>*</span></p>
                        <input
                            type="email"
                            name="email"
                            value={state.email}
                            onChange={(event) => dispatch({ type: "change_email", value: event.target.value })}
                            required="required"
                        />
                        <p>Phone number<span>*</span></p>
                        <input
                            type="phone"
                            name="phone"
                            value={state.phone}
                            onChange={(event) => dispatch({ type: "change_phone", value: event.target.value })}
                            required="required"
                        />
                        <p>Language<span>*</span></p>
                        <input
                            type="text"
                            name="language"
                            value={state.lang}
                            onChange={(event) => dispatch({ type: "change_lang", value: event.target.value })}
                            required="required"
                        />
                        <p>Message<span>*</span></p>
                        <textarea
                            name="mess"
                            value={state.mess}
                            onChange={(event) => dispatch({ type: "change_mess", value: event.target.value })}
                            className="message"
                            required="required">
                        </textarea>
                        <hr />
                        <button type="submit" className="chat">Start chatting</button>
                    </form>
                </div>

                <div className={`${scrolled === true ? "show" : "hide"} section-mess`}
                    onClick={openMess}>
                    <img src="./../../../static/images/message.png" />
                </div>

                <div className={`${scrolled !== true ? "show" : "hide"} section-sidebar`}>
                    <div className="phone">
                        <img src="./../../../static/images/phone-side.png" />
                        <p>Hotline:</p>
                        <p>0123.456.789</p>
                    </div>
                    <div
                        className="mess"
                        onClick={openMess}>
                        <img src="./../../../static/images/mess-side.png" />
                        <p>Livechat</p>
                    </div>
                </div>

                {
                    history.location.pathname !== "/login" && history.location.pathname !== "/signup" ?
                        <>
                            <Downline />
                            <div className="section-sponsor">
                                <div className="bs-container">
                                    <div className="bs-row row-center row-xs-15">
                                        <div className="bs-col xs-25-15">
                                            <div className="border">
                                                <img src="./../../../static/images/xetra.png" />
                                            </div>
                                        </div>
                                        <div className="bs-col xs-25-15">
                                            <div className="border">
                                                <img src="./../../../static/images/netewer.png" />
                                            </div>
                                        </div>
                                        <div className="bs-col xs-25-15">
                                            <div className="border">
                                                <img src="./../../../static/images/webmoney.png" />
                                            </div>
                                        </div>
                                        <div className="bs-col xs-25-15">
                                            <div className="border">
                                                <img src="./../../../static/images/skrill.png" />
                                            </div>
                                        </div>
                                        <div className="bs-col xs-25-15">
                                            <div className="border">
                                                <img src="./../../../static/images/cash.png" />
                                            </div>
                                        </div>
                                        <div className="bs-col xs-25-15 ">
                                            <div className="border">
                                                <img src="./../../../static/images/mastercard.png" />
                                            </div>
                                        </div>
                                        <div className="bs-col xs-25-15">
                                            <div className="border">
                                                <img src="./../../../static/images/visa.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="section-sponsor2">
                                <div className="bs-container">
                                    <div className="wrap">
                                        <div className="border">
                                            <img src="./../../../static/images/xetra.png" />
                                        </div>
                                        <div className="border">
                                            <img src="./../../../static/images/netewer.png" />
                                        </div>
                                        <div className="border">
                                            <img src="./../../../static/images/webmoney.png" />
                                        </div>
                                        <div className="border">
                                            <img src="./../../../static/images/skrill.png" />
                                        </div>
                                        <div className="border">
                                            <img src="./../../../static/images/cash.png" />
                                        </div>
                                        <div className="border">
                                            <img src="./../../../static/images/mastercard.png" />
                                        </div>
                                        <div className="border">
                                            <img src="./../../../static/images/visa.png" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                        :
                        ''
                }

            </div>
        </>
    )
}
export default Main;