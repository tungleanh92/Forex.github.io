import React from 'react';
import './../../../styles/less/tool.less'
import './../../../styles/less/pages/module/Deposit.less'

const Deposit = () => {
    return (
        <div className="deposits">
            <h2>Deposits and withdrawals</h2>
            <p>Fast and hassle-free deposit and withdrawal transaction with HYMC</p>
            <div className="bs-row row-center row-lg-15">
                <div className="bs-col lg-50-15">
                    <div className="wrap wrap1">
                        <p>Fast</p>
                        <p>Transaction speed is almost instant</p>
                    </div>
                </div>
                <div className="bs-col lg-50-15">
                    <div className="wrap wrap2">
                        <p>Hassle-free</p>
                        <p>Just a few steps to approach your money</p>
                    </div>
                </div>
            </div>
            <p className="nd">Deposit and withdraw funds with the most popular payment gateways</p>
            <table>
                <tbody>
                    <tr>
                        <td className="xetra rp"><div><img src="./../../../static/images/xetra.png" /></div></td>
                        <td className="net rp"><div><img src="./../../../static/images/netewer.png" /></div></td>
                        <td className="skrill rp"><div><img src="./../../../static/images/skrill.png" /></div></td>
                        <td className="cash rp"><div><img src="./../../../static/images/cash.png" /></div></td>
                    </tr>
                    <tr>
                        <td className="web rp"><div><img src="./../../../static/images/webmoney.png" /></div></td>
                        <td className="visa rp"><div><img src="./../../../static/images/visa.png" /></div></td>
                        <td className="card rp"><div><img src="./../../../static/images/mastercard.png" /></div></td>
                        <td className="rp"><div><img src="./../../../static/images/arrow.png" /></div></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Deposit