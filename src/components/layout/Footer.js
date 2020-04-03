import React from 'react';
import './../../styles/less/tool.less'
import './../../styles/less/pages.less'
import './../../styles/less/pages/index.less'

const Footer = ({ history }) => {
    return (
        <div className="Footer">
            {
                history.location.pathname !== "/login" && history.location.pathname !== "/signup" ?
                    <>
                        <span className="poly-wrap-footer">
                            <span className="poly spin">
                            </span>
                        </span>
                    </>
                    :
                    <></>
            }
            <div className="bs-container">
                <div className="bs-row">
                    <div className="part1">
                        <div className="logos">
                            <div>
                                <img src="./../../../static/images/logo-red.png" />
                            </div>
                            <p>LEGAL FORMS & DOCUMENTS</p>
                            <p>RISK WARNINGS</p>
                            <p>COOKIES POLICY</p>
                        </div>
                        <ul className="links">
                            <li><a><img src="./../../../static/images/plane.png" /></a></li>
                            <li><a><img src="./../../../static/images/twitter.png" /></a></li>
                            <li><a><img src="./../../../static/images/fb.png" /></a></li>
                        </ul>
                    </div>
                    <div className="part2">
                        <hr />
                        <div className="bs-row row-center row-lg-15">
                            <div className="bs-col lg-33-15 content">
                                <p>HIGH RISK INVESTMENT WARNING</p>
                                <p>FOREXDEMO does not offer Contracts for Difference to residents of certain jurisdictions including the USA, Iran and Canada. With regards to the FSB authorisation, FMKFX provides execution services and enters into principal to principal transactions with its clients on FMKFX's prices. These transactions are not traded on an exchange. CFDs with FMKFX are not regulated by the FAIS Act and intermediary services are not provided.</p>
                            </div>
                            <div className="bs-col lg-33-15 content">
                                <p>DISCLAIMER</p>
                                <p>FOREXDEMO does not offer Contracts for Difference to residents of certain jurisdictions including the USA, Iran and Canada. With regards to the FSB authorisation, FMKFX provides execution services and enters into principal to principal transactions with its clients on FMKFX's prices. These transactions are not traded on an exchange. CFDs with FMKFX are not regulated by the FAIS Act and intermediary services are not provided.</p>
                            </div>
                            <div className="bs-col lg-33-15 content">
                                <p>REGIONAL RESTRICTIONS</p>
                                <p>FOREXDEMO does not offer Contracts for Difference to residents of certain jurisdictions including the USA, Iran and Canada. With regards to the FSB authorisation, FMKFX provides execution services and enters into principal to principal transactions with its clients on FMKFX's prices. These transactions are not traded on an exchange. CFDs with FMKFX are not regulated by the FAIS Act and intermediary services are not provided.</p>
                            </div>
                        </div>
                    </div>
                    <div className="part3">
                        <hr />
                        <p>FULLY REGULATED</p>
                        <div className="bs-row row-center row-md-15 row-xs-5">
                            <div className="bs-col md-33-15 xs-33-5">
                                <div className="content">
                                    <div className="img-cnt">
                                        <img src="./../../../static/images/logo-blue.png" />
                                    </div>
                                    <div className="cnt">
                                        <p>Company 1</p>
                                        <p>Slogan or company information/position</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bs-col md-33-15 xs-33-5">
                                <div className="content">
                                    <div className="img-cnt">
                                        <img src="./../../../static/images/logo-orange.png" />
                                    </div>
                                    <div className="cnt">
                                        <p>Company 2</p>
                                        <p>Slogan or company information/position</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bs-col md-33-15 xs-33-5">
                                <div className="content">
                                    <div className="img-cnt">
                                        <img src="./../../../static/images/logo-green.png" />
                                    </div>
                                    <div className="cnt">
                                        <p>Company 3</p>
                                        <p>Slogan or company information/position</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="part4">
                        <hr />
                        <div className="bs-row row-center row-lg-15">
                            <div className="bs-col lg-66-15">
                                <div className="content-part4">
                                    <p className="header">LEGAL INFORMATION</p>

                                    <p>HYCM is the trading name of Henyep Capital Markets (UK) Limited, HYCM (Europe) Ltd, HYCM Limited and
                                Henyep Capital Markets (DIFC) Limited for which the Henyep Capital Markets group is holding company and its assets are a controlling equity interest in them.</p>

                                    <p>www.hycm.com is operated by HYCM Limited</p>

                                    <p>Henyep’s journey started since 1977</p>

                                    <p>Copyright © 2019 HYCM</p>
                                </div>
                            </div>
                            <div className="bs-col lg-33-15">
                                <div className="bs-row row-md-15 row-center">
                                    <div className="bs-col md-50-15">
                                        <div className="content-part4 rp">
                                            <p className="header">ABOUT US</p>

                                            <p>Learn more about us</p>

                                            <p>Why choose us?</p>

                                            <p>Regulations and licences</p>
                                            <p>Deposit and withdrawals</p>

                                            <p>Contact Us</p>
                                        </div>
                                    </div>
                                    <div className="bs-col md-50-15">
                                        <div className="content-part4 rp">
                                            <p className="header">TRADING</p>
                                            <p>Account Types</p>
                                            <p>MetaTrade5</p>
                                            <p>Range of markets</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Downline-sm">
                START TRADING
            </div>
        </div>
    )
}
export default Footer;