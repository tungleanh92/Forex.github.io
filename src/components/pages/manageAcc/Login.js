import React, { useState, useEffect, useReducer } from 'react'
import './../../../styles/less/tool.less'
import './../../../styles/less/pages/module/Login.less'
import './../../../styles/less/pages/index.less'

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

    useEffect(() => {
        let spin1 = document.getElementsByClassName('poly-wrap-acc').length;
        let myInterval1 = setInterval(function () {
            for (let i = 0; i < 2; i++) {
                document.getElementsByClassName('poly-acc')[i].classList.remove("spin");
            }

            let x1 = Math.floor((Math.random() * spin1));
            let polywrap1 = document.getElementsByClassName('poly-wrap-acc')[x1].children[0];
            polywrap1.classList.add("spin");
        }, 10000);

        return () => {
            clearInterval(myInterval1);
        }
    }, [])

    return (
        <div className="loginpage">
            <span className="poly-wrap-acc">
                <span className="poly-acc">
                </span>
            </span>
            <span className="poly-wrap-acc">
                <span className="poly-acc">
                </span>
            </span>
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