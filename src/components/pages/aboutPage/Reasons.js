import React, { useEffect } from 'react';
import './../../../styles/less/tool.less'
import './../../../styles/less/pages/module/Reasons.less'

const Reasons = () => {
    useEffect(() => {
        let spin1 = document.getElementsByClassName('poly-wrap-rs').length;
        let myInterval1 = setInterval(function () {
            for (let i = 0; i < 2; i++) {
                document.getElementsByClassName('poly-rs')[i].classList.remove("spin");
            }

            let x1 = Math.floor((Math.random() * spin1));
            let polywrap2 = document.getElementsByClassName('poly-wrap-rs')[x1].children[0];
            polywrap2.classList.add("spin");
        }, 10000);

        return () => {
            clearInterval(myInterval1);
        }
    }, [])
    return (
        <div className="reason">
            <span className="poly-wrap-rs">
                <span className="poly-rs">
                </span>
            </span>
            <span className="poly-wrap-rs">
                <span className="poly-rs">
                </span>
            </span>
            <h2>Why choose us?</h2>
            <p>HYMC LTD.is a limited liability company regulated as a Securities Dealer by the Seychelles Financial Services Authority of Seychelles (“FSA”) with license number SD013 to carry out certain categories of financial investment business as permitted under the Seychelles Securities Act 2007.</p>
            <div className="reason-cnt">
                <div className="wrap wrap1">
                    <h6>Great customer service</h6>
                    <p>We hire highly experienced professionals that have shown a history of superior customer service skills and expertise in the financial services industry. Sales and customer service is staffed 24 hours a day, 5 days a week.</p>
                </div>
                <div className="wrap wrap2">
                    <h6>Regulatory oversight</h6>
                    <p>Whether you are a private, professional or institutional investor, GULF BROKERS LTD, as a regulated and authorized broker by Financial Services Authority, offers you the fast execution and high-security regulations with the innovative technologies.</p>
                </div>
                <div className="wrap wrap3">
                    <h6>Fast order execution</h6>
                    <p>We hire highly experienced professionals that have shown a history of superior customer service skills and expertise in the financial services industry. Sales and customer service is staffed 24 hours a day, 5 days a week.</p>
                </div>
                <div className="wrap wrap4">
                    <h6>Low transaction costs</h6>
                    <p>We hire highly experienced professionals that have shown a history of superior customer service skills and expertise in the financial services industry. Sales and customer service is staffed 24 hours a day, 5 days a week.</p>
                </div>
                <div className="wrap wrap5">
                    <h6>Indemnity Insurance</h6>
                    <p>We have Professional Indemnity Insurance in place which covers claims arising as a direct result of any act of negligence, error or omission in the professional conduct of the business activities related to the Seychelles Securities Dealer licensed activities.</p>
                </div>
            </div>
        </div>
    )
}

export default Reasons