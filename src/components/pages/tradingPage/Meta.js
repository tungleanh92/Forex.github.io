import React from 'react'
import './../../../styles/less/tool.less'
import './../../../styles/less/pages/module/Meta.less'

const Meta = () => {
    return (
        <div className="metatrader">
            <div className="meta-grp">
                <h2>MetaTrader 5</h2>
                <div className="btn-grp">
                    <div className="signup">DOWNLOAD</div>
                    <div className="signin">USE WEBTERMINAL</div>
                </div>
            </div>
            <p>Discovery the best platform to access exchange markets and Forex at currently. It is a great choice for any trader with 300+ instruments.</p>
            <div className="meta-img">
                <img src="./../../../static/images/chart.png" />
            </div>
            <div className="detail">
                <div className="bs-row row-center row-md-5 row-xs-5">
                    <div className="bs-col md-20-5 xs-33-5">
                        <div>
                            <div>
                                <img src="./../../../static/images/v.png" />
                            </div>
                            <p>Easy to use and fully customisable</p>
                        </div>
                    </div>
                    <div className="bs-col md-20-5 xs-33-5">
                        <div>
                            <div>
                                <img src="./../../../static/images/speed-clock.png" />
                            </div>
                            <p>Superior execution speeds</p>
                        </div>
                    </div>
                    <div className="bs-col md-20-5 xs-33-5">
                        <div>
                            <div>
                                <img src="./../../../static/images/paper.png" />
                            </div>
                            <p>Trader's calculator, performance statistics, sentiment</p>
                        </div>
                    </div>
                    <div className="bs-col md-20-5 xs-33-5">
                        <div>
                            <div>
                                <img src="./../../../static/images/dollar.png" />
                            </div>
                            <p>Charts trading, market order depth</p>
                        </div>
                    </div>
                    <div className="bs-col md-20-5 xs-33-5">
                        <div>
                            <div>
                                <img src="./../../../static/images/300.png" />
                            </div>
                            <p>Trading 300+ instruments</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Meta