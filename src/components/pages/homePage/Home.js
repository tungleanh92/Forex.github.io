import React, { useEffect } from 'react';
import './../../../styles/less/tool.less'
import './../../../styles/less/pages.less'
import './../../../styles/less/pages/index.less'


const Home = () => {
    useEffect(() => {
        let spin2 = document.getElementsByClassName('poly-wrap').length;
        let myInterval2 = setInterval(function () {
            for (let i = 0; i < 4; i++) {
                document.getElementsByClassName('poly')[i].classList.remove("spin");
            }

            let x2 = Math.floor((Math.random() * spin2));
            let polywrap2 = document.getElementsByClassName('poly-wrap')[x2].children[0];
            polywrap2.classList.add("spin");
        }, 10000);

        return () => {
            clearInterval(myInterval2);
        }
    }, [])

    useEffect(() => {
        let spin1 = document.getElementsByClassName('poly-wrap-pl').length;
        let myInterval1 = setInterval(function () {
            for (let i = 0; i < 2; i++) {
                document.getElementsByClassName('poly-pl')[i].classList.remove("spin");
            }

            let x1 = Math.floor((Math.random() * spin1));
            let polywrap2 = document.getElementsByClassName('poly-wrap-pl')[x1].children[0];
            polywrap2.classList.add("spin");
        }, 10000);

        return () => {
            clearInterval(myInterval1);
        }
    }, [])

    return (
        <>
            <div className="section-banner">
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
                <div className="bs-container">
                    <div className="bs-row row-center row-md-15">
                        <div className="bs-col md-40-15">
                            <h1>Trading with HYMC</h1>
                            <p>Start trading today on the world's financial markets with confidence</p>
                            <ul>
                                <li>Save time and money</li>
                                <li>Connect with export support</li>
                                <li>Transparent tick history</li>
                                <li>Access your fund today</li>
                            </ul>
                            <div className="grp-btn">
                                <div className="signup">Open Account</div>
                                <div className="more">Learn more</div>
                            </div>
                        </div>
                        <div className="bs-col md-60-15">
                            <div className="banner-img">
                                <img src="./../../../static/images/devices.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-static">
                <div className="bs-container">
                    <div className="bs-row row-center row-md-15">
                        <div className="bs-col md-20-5">
                            <div className="wrapper">
                                <h1>900K+</h1>
                                <p>trading accounts opened</p>
                            </div>
                        </div>
                        <div className="bs-col md-20-5">
                            <div className="wrapper">
                                <h1>10K+</h1>
                                <p>transactions in last 24 hours</p>
                            </div>
                        </div>
                        <div className="bs-col md-20-5">
                            <div className="wrapper">
                                <h1>0.1</h1>
                                <p>spread as low as 0.1 pips</p>
                            </div>
                        </div>
                        <div className="bs-col md-20-5">
                            <div className="wrapper">
                                <h1>2.5M</h1>
                                <p>$2.5 Million coverrage</p>
                            </div>
                        </div>
                        <div className="bs-col md-20-5">
                            <div className="wrapper">
                                <h1>0%</h1>
                                <p>0% fees on deposits & withdrawals</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-create-acc">
                <div className="bs-container">
                    <div className="bs-row row-center row-md-15">
                        <div className="bs-col md-33-15">
                            <div className="demo">
                                <div className="head">
                                    <p>Demo Account</p>
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
                                    <p>Live Account</p>
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

            <div className="section-platform">
                <span className="poly-wrap-pl">
                    <span className="poly-pl">
                    </span>
                </span>
                <span className="poly-wrap-pl">
                    <span className="poly-pl">
                    </span>
                </span>
                <div className="bs-container">
                    <h1>Trading Platforms</h1>
                    <p>FMKFX provides clients with a wide range of desktop, web and mobile trading platforms to choose from.</p>
                    <div className="meta">
                        <p>MetaTrade5</p>
                        <img src="./../../../static/images/star.png" />
                    </div>

                    <div className="bs-row row-center row-md-15">
                        <div className="bs-col md-50-15 xs-order-2 sm-order-2">
                            <div className="meta-cnt">
                                <h2>MetaTrader5</h2>
                                <ul>
                                    <li>Easy to use and fully customisable</li>
                                    <li>Superior execution speeds</li>
                                    <li>Trader's calculator, performance statistics, sentiment</li>
                                    <li>Charts trading, market order depth</li>
                                </ul>
                                <div className="more">Learn more</div>
                            </div>
                        </div>
                        <div className="bs-col md-50-15 xs-order-1 sm-order-1">
                            <div className="pf-img">
                                <img src="./../../../static/images/metatrade.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-service">
                <div className="bs-container">
                    <h1>Professional Services</h1>
                    <div className="bs-row row-center row-xs-5">
                        <div className="bs-col xs-25-5">
                            <div className="wrapper">
                                <img src="./../../../../static/images/coin.png" />
                                <p>Enjoy Low Transaction Costs</p>
                            </div>
                        </div>
                        <div className="bs-col xs-25-5">
                            <div className="wrapper">
                                <img src="./../../../../static/images/lock.png" />
                                <p>Rely Negative Balance Protection</p>
                            </div>
                        </div>
                        <div className="bs-col xs-25-5">
                            <div className="wrapper">
                                <img src="./../../../../static/images/tlsales.png" />
                                <p>Visit Upgraded Help Center</p>
                            </div>
                        </div>
                        <div className="bs-col xs-25-5">
                            <div className="wrapper">
                                <img src="./../../../../static/images/clock.png" />
                                <p>Get Fast Order Execution</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;