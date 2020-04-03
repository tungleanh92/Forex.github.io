import React, { useEffect } from 'react';
import './../../../styles/less/tool.less'
import './../../../styles/less/pages/module/AboutUs.less'

const AboutUs = () => {
    useEffect(() => {
        let spin1 = document.getElementsByClassName('poly-wrap-more').length;
        let myInterval1 = setInterval(function () {
            for (let i = 0; i < 2; i++) {
                document.getElementsByClassName('poly-more')[i].classList.remove("spin");
            }

            let x1 = Math.floor((Math.random() * spin1));
            let polywrap2 = document.getElementsByClassName('poly-wrap-more')[x1].children[0];
            polywrap2.classList.add("spin");
        }, 10000);

        return () => {
            clearInterval(myInterval1);
        }
    }, [])

    return (
        <div className="more">
            <span className="poly-wrap-more">
                <span className="poly-more">
                </span>
            </span>
            <span className="poly-wrap-more">
                <span className="poly-more">
                </span>
            </span>
            <h2>Learn more about us</h2>
            <div className="more-img">
                <img src="./../../../static/images/laptop.png" />
            </div>
            <div className="more-cnt">
                <h6>Inception</h6>
                <p>HYMC LTD. is a licensed and regulated broker. Located in a stable and secure marketplace, HYMC LTD. is an excellent choice to take part in global trading. Opening a live trading account with us is a matter of minutes, and you will get immediate access to real markets.</p>
            </div>
            <div className="more-cnt">
                <h6>Leadership</h6>
                <p>In the past few years, HYMC LTD. has developed at an impressive rate, and is recognized today as an industry leader. By December 2018, our clients' monthly trading volume reached 348.4 billion USD and our active traders around the world surpassed 50,342. Currently HYMC LTD.  offers a wide range of financial instruments, including currency pairs, metals, cryptocurrencies, energies, and indices.</p>
            </div>
            <div className="more-cnt">
                <h6>Growth</h6>
                <p>Continuous development, guided primarily by the systematic improvement of trading conditions, is the key to the HYMC LTD. 's long-term success. We run an extremely customer-centric business, therefore, improving the quality of our services is our top priority.</p>
            </div>
            <div className="more-cnt">
                <h6>Customer Support</h6>
                <p>Our customers enjoy the highest level of customer service through our personal and truly international approach. Our official website has been localized into 15 languages and we offer client support in 13 languages, including 24/5 support in 11 languages and 24/7 support in English and Chinese. We give traders exactly what they seek: constant improvement, new opportunities to explore the financial markets, and the opportunity to work with a recognized leader in the financial industry.</p>
            </div>
        </div>
    )
}

export default AboutUs