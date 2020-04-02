import React, { useState, useReducer } from 'react'
import './../../../styles/less/tool.less'
import './../../../styles/less/pages/module/Login.less'

const reducer = (state, action) => {
    switch (action.type) {
        case "change_email":
            return { ...state, email: action.value }
        case "change_password":
            return { ...state, password: action.value }
        default:
            throw new Error();
    }
}

const initialState = {
    email: '',
    password: ''
}

const Login = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="loginpage">
            <form>
                <input
                    placeholder="Your Email"
                    type="email"
                    name="email"
                    className="txt"
                    required="required"
                    value={state.email}
                    onChange={(event) => dispatch({ type: "change_email", value: event.target.value })} />

                <input
                    placeholder="Password"
                    type="password"
                    name="password"
                    className="txt"
                    required="required"
                    value={state.password}
                    onChange={(event) => dispatch({ type: "change_password", value: event.target.value })} />

                <button type="submit">Continue</button>
                <a href="">Forgot password?</a>
            </form>
            <p>New to HYMC? <a href="">Create on account</a></p>
        </div>
    )
}

export default Login;