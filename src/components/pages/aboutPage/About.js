import React, { useEffect } from 'react';
import { BsTab } from "@basesShared";
import './../../../styles/less/tool/basic.less'
import './../../../styles/less/pages/module/About.less'
import AboutUs from './AboutUs'
import Reasons from './Reasons'
import Licences from './Licences'
import Deposit from './Deposit'
import Contact from './Contact'

var tabDemo = [
    {
        label: "About us",
        main: () => <AboutUs />
    },
    {
        label: "Why Choose Us?",
        main: () => <Reasons />
    },
    {
        label: "Regulations and Licences",
        main: () => <Licences />
    },
    {
        label: "Deposit and Withdrawals",
        main: () => <Deposit />
    },
    {
        label: "Contact Us",
        main: () => <Contact />
    }
];

const About = () => {

    useEffect(() => {
        let spin2 = document.getElementsByClassName('poly-wrap').length;
        console.log(spin2);

        let myInterval2 = setInterval(function () {
            for (let i = 0; i < 3; i++) {
                document.getElementsByClassName('poly')[i].classList.remove("spin");
            }

            let x2 = Math.floor((Math.random() * spin2));
            console.log(x2);

            let polywrap2 = document.getElementsByClassName('poly-wrap')[x2].children[0];
            polywrap2.classList.add("spin");
        }, 10000);

        return () => {
            clearInterval(myInterval2);
        }
    }, [])

    return (
        <>
            <div className="section-about">
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
                    <div className="bs-row row-center row-md-5">
                        <div className="bs-col md-50-5">
                            <div className="about-cnt">
                                <h1>About us</h1>
                                <p>HYMC LTD. is a licensed and regulated broker. Located in a stable and secure marketplace, HYMC LTD. is an excellent choice to take part in global trading. Opening a live trading account with us is a matter of minutes, and you will get immediate access to real markets.</p>
                                <div className="signup">JOIN NOW</div>
                            </div>
                        </div>
                        <div className="bs-col md-50-5">
                            <div className="about-img">
                                <img src="./../../../static/images/tablet.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-content">
                <div className="bs-container">
                    <BsTab {...tabDemo} />
                </div>
            </div>

            <div className="section-trade">
                <div className="bs-container">
                    <div className="bs-row row-center row-lg-5">
                        <div className="bs-col lg-40-5">
                            <div className="trade-cnt">
                                <h1>Trading with HYMC</h1>
                                <p>Start trading today on the world’s financial markets with confidence.</p>
                                <div className="btn-grp">
                                    <div className="signup">Open Account</div>
                                    <div className="signin">Log In</div>
                                </div>
                            </div>
                        </div>
                        <div className="bs-col lg-60-5">
                            <div className="trade-img">
                                <img src="./../../../static/images/desktop.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About;