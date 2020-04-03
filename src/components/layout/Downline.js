import React from 'react';
import './../../styles/less/pages.less';
import './../../styles/less/tool.less';

const Downline = () => {
    return (
        <>
            <div className="Downline">
                <div className="bs-container">
                    <div className="bs-row">
                        <div className="exchange">
                            <div className="green">
                                <p>GOLD</p>
                                <p>1559.49</p>
                            </div>
                            <div className="green">
                                <p>EURUSD</p>
                                <p>1559.49</p>
                            </div>
                            <div className="green">
                                <p>USOIL</p>
                                <p>1559.49</p>
                            </div>
                            <div className="red">
                                <p>GOLD</p>
                                <p>1559.49</p>
                            </div>
                            <div className="red">
                                <p>EURUSD</p>
                                <p>1559.49</p>
                            </div>
                            <div className="red">
                                <p>USOIL</p>
                                <p>1559.49</p>
                            </div>
                            <div className="warn">
                                <p>Warning:</p>
                                <p>Trading CFDs involves risk.</p>
                            </div>
                        </div>

                        <div className="trade-btn">
                            <button className="trade">Start Trading</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Downline;