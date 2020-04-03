import React, { useEffect } from 'react'
import './../../../styles/less/tool.less'
import './../../../styles/less/pages/module/Accounts.less'

const Accounts = () => {
    useEffect(() => {
        let spin1 = document.getElementsByClassName('poly-wrap-types').length;
        let myInterval1 = setInterval(function () {
            for (let i = 0; i < 2; i++) {
                document.getElementsByClassName('poly-types')[i].classList.remove("spin");
            }

            let x1 = Math.floor((Math.random() * spin1));
            let polywrap2 = document.getElementsByClassName('poly-wrap-types')[x1].children[0];
            polywrap2.classList.add("spin");
        }, 10000);

        return () => {
            clearInterval(myInterval1);
        }
    }, [])
    return (
        <div className="types">
            <span className="poly-wrap-types">
                <span className="poly-types">
                </span>
            </span>
            <span className="poly-wrap-types">
                <span className="poly-types">
                </span>
            </span>
            <h2>Account types</h2>
            <p>HYMC provides its Clients with the following account types defined your requirements:</p>
            <div className="create-acc-main">
                <div className="demo-acc">
                    <div className="head">
                        <p>Demo Acount</p>
                    </div>

                    <ul>
                        <li>Free to open</li>
                        <li>Step-by-step tutorials & articles</li>
                        <li>Online webinars & local seminars</li>
                        <li>Your own Account Manager</li>
                    </ul>
                    <div className="create">OPEN NOW</div>
                </div>
                <div className="live-acc">
                    <div className="head">
                        <p>Live Acount</p>
                    </div>
                    <ul>
                        <li>Tight spreads</li>
                        <li>Superfast trade execution</li>
                        <li>Hi-tech forex trading tools</li>
                        <li>Ultimate risk protection & security</li>
                    </ul>
                    <div className="create">OPEN NOW</div>
                </div>
                <div className="partner-acc">
                    <div className="head">
                        <p>Partnership</p>
                    </div>
                    <ul>
                        <li>Free to open</li>
                        <li>Step-by-step tutorials & articles</li>
                        <li>Online webinars & local seminars</li>
                        <li>Your own Account Manager</li>
                    </ul>
                    <div className="create">START FOLLOWING</div>
                </div>
            </div>

            <div className="create-acc">
                <div className="bs-container">
                    <div className="bs-row row-center row-md-15">
                        <div className="bs-col md-33-15">
                            <div className="demo">
                                <div className="head">
                                    <p>Demo Acount</p>
                                </div>

                                <ul>
                                    <li>Free to open</li>
                                    <li>Step-by-step tutorials & articles</li>
                                    <li>Online webinars & local seminars</li>
                                    <li>Your own Account Manager</li>
                                </ul>
                                <div className="create">Open now</div>

                            </div>
                        </div>
                        <div className="bs-col md-33-15">
                            <div className="live">
                                <div className="head">
                                    <p>Live Acount</p>
                                </div>
                                <ul>
                                    <li>Tight spreads</li>
                                    <li>Superfast trade execution</li>
                                    <li>Hi-tech forex trading tools</li>
                                    <li>Ultimate risk protection & security</li>
                                </ul>
                                <div className="create">Open now</div>
                            </div>
                        </div>
                        <div className="bs-col md-33-15">
                            <div className="partner">
                                <div className="head">
                                    <p>Partnership</p>
                                </div>
                                <ul>
                                    <li>Free to open</li>
                                    <li>Step-by-step tutorials & articles</li>
                                    <li>Online webinars & local seminars</li>
                                    <li>Your own Account Manager</li>
                                </ul>
                                <div className="create">Start following</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accounts