import React from 'react';
import { BsTab } from "@basesShared";
import './../../../styles/less/tool.less'
import './../../../styles/less/pages/module/Trading.less'
import Accounts from './Accounts'
import Meta from './Meta'
import Range from './Range'


var tabDemo = [
    {
        label: "Account Types",
        main: () => <Accounts />
    },
    {
        label: "MetaTrader5",
        main: () => <Meta />
    },
    {
        label: "Range of Markets",
        main: () => <Range />
    }
];
const Trading = () => {
    return (
        <>
            <div className="section-trading">
                <div className="bs-container">
                    <div className="bs-row row-center row-md-5">
                        <div className="bs-col md-50-5">
                            <div className="trading-cnt">
                                <h1>Trading</h1>
                                <p>Experience the global markets by trading CFDs on a wide range of asset classes, including currency pairs, metals, cryptocurrencies, energies and indices. Benefit from reliable order execution and competitive spreads.</p>
                                <div className="signup">START NOW</div>
                            </div>
                        </div>
                        <div className="bs-col md-50-5">
                            <div className="trading-img">
                                <img src="./../../../static/images/static.png" />
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
                        <div className="bs-col lg-50-5">
                            <div className="trade-cnt">
                                <h1>Trading with HYMC</h1>
                                <p>Start trading today on the world’s financial markets with confidence.</p>
                                <div className="btn-grp">
                                    <div className="signup">Open Account</div>
                                    <div className="signin">Log In</div>
                                </div>
                            </div>
                        </div>
                        <div className="bs-col lg-50-5">
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
export default Trading;