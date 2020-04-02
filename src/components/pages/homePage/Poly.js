import React, { useEffect } from 'react'
import './../../../styles/less/pages/index.less'
export default function Poly() {

    useEffect(() => {
        let spin = document.getElementsByClassName('poly-wrap').length;

        setInterval(function () {
            document.getElementsByClassName('poly')[0].classList.remove("spin");
            document.getElementsByClassName('poly')[1].classList.remove("spin");
            document.getElementsByClassName('poly')[2].classList.remove("spin");
            document.getElementsByClassName('poly')[3].classList.remove("spin");

            let x = Math.floor((Math.random() * spin));
            let polywrap = document.getElementsByClassName('poly-wrap')[x].children[0];
            polywrap.classList.add("spin");
        }, 10000);
    })

    return (
        <>
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
            <span className="poly-wrap">
                <span className="poly">
                </span>
            </span>
        </>
    )
}