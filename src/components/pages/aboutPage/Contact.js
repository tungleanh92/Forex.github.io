import React from 'react';
import './../../../styles/less/tool.less'
import './../../../styles/less/pages/module/Contact.less'

const Contact = () => {
    return (
        <div className="contact">
            <h2>Contact Us</h2>
            <div className="bs-row row-center row-xs-5">
                <div className="bs-col xs-33-5">
                    <div className="wrap">
                        <div className="contact-img">
                            <img src="./../../../static/images/logo-big.png" />
                        </div>
                    </div>
                </div>
                <div className="bs-col xs-33-5">
                    <div className="wrap2">
                        <img src="./../../../static/images/contact.png" />
                    </div>
                </div>
                <div className="bs-col xs-33-5">
                    <div className="wrap3">
                        <div className="mess-img">
                            <img src="./../../../static/images/message-big.png" />
                        </div>
                        <p>Livechat</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Contact