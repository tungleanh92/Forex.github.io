import React, { useReducer, useEffect } from 'react'
import './../../../styles/less/tool.less'
import './../../../styles/less/pages/module/Signup.less'

const reducer = (state, action) => {
    switch (action.type) {
        case "change_region":
            return { ...state, region: action.value }
        case "change_email":
            return { ...state, email: action.value }
        case "change_password":
            return { ...state, password: action.value }
        default:
            throw new Error();
    }
}

const initialState = {
    region: '',
    email: '',
    password: '',
    checked: false
}

const Signup = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleCheck = () => {
        initialState.checked = !initialState.checked
    }
    useEffect(() => {
        console.log(1);

        let spin1 = document.getElementsByClassName('poly-wrap-acc').length;
        console.log(spin1);

        let myInterval1 = setInterval(function () {
            for (let i = 0; i < 2; i++) {
                document.getElementsByClassName('poly-acc')[i].classList.remove("spin");
            }

            let x1 = Math.floor((Math.random() * spin1));
            let polywrap1 = document.getElementsByClassName('poly-wrap-acc')[x1].children[0];
            polywrap1.classList.add("spin");
            console.log(polywrap1.classList);

        }, 10000);

        return () => {
            clearInterval(myInterval1);
        }
    }, [])

    return (
        <div className="section-signup">
            <span className="poly-wrap-acc">
                <span className="poly-acc">
                </span>
            </span>
            <span className="poly-wrap-acc">
                <span className="poly-acc">
                </span>
            </span>
            <div className="bs-container">
                <form>
                    <input
                        placeholder="Country / Region of resident"
                        name="region"
                        type="text"
                        className="txt"
                        required="required"
                        value={state.region}
                        onChange={(event) => dispatch({ type: "change_region", value: event.target.value })} />

                    <input
                        placeholder="Your email address"
                        name="email"
                        type="email"
                        className="txt"
                        required="required"
                        value={state.email}
                        onChange={(event) => dispatch({ type: "change_email", value: event.target.value })} />

                    <input
                        placeholder="Choose a password"
                        name="password"
                        type="password"
                        className="txt"
                        required="required"
                        value={state.password}
                        onChange={(event) => dispatch({ type: "change_password", value: event.target.value })} />

                    <label className="container">
                        <input
                            type="checkbox"
                            name="check"
                            onBlur={() => handleCheck()}
                            defaultChecked={initialState.checked} />
                        <span className="checkmark"></span>
                    I agree to ceceive news & analytics
                </label>

                    <button type="submit">Continue</button>

                    <p>By clicking Continue you confirm that you have read, understood, and agree with all the information in the <span><a href="">Client Agreement</a></span> and the service terms and conditions listed in the following documents: <span><a href="">General Business Terms</a></span> and <span><a href="">Partnership Agreement</a></span></p>
                </form>

                <p>Already have an account? <a href="">Sign In Now</a></p>
            </div>
        </div>
    )
}

export default Signup;