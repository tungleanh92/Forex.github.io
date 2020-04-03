import React, { useEffect } from 'react'
import './../../../styles/less/tool.less'
import './../../../styles/less/pages/module/Meta.less'

const Meta = () => {
    useEffect(() => {
        let spin1 = document.getElementsByClassName('poly-wrap-meta').length;
        let myInterval1 = setInterval(function () {
            for (let i = 0; i < 2; i++) {
                document.getElementsByClassName('poly-meta')[i].classList.remove("spin");
            }

            let x1 = Math.floor((Math.random() * spin1));
            let polywrap2 = document.getElementsByClassName('poly-wrap-meta')[x1].children[0];
            polywrap2.classList.add("spin");
        }, 10000);

        return () => {
            clearInterval(myInterval1);
        }
    }, [])
    return (
        <div className="metatrader">
            <span className="poly-wrap-meta">
                <span className="poly-meta">
                </span>
            </span>
            <span className="poly-wrap-meta">
                <span className="poly-meta">
                </span>
            </span>
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