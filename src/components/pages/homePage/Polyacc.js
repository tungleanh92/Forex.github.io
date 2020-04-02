import React, { useEffect } from 'react'
import './../../../styles/less/pages/index.less'
export default function Polyacc() {

    useEffect(() => {
        let spin = document.getElementsByClassName('poly-wrap-acc').length;

        setInterval(function () {
            document.getElementsByClassName('poly-acc')[0].classList.remove("spin");
            document.getElementsByClassName('poly-acc')[1].classList.remove("spin");

            let x = Math.floor((Math.random() * spin));
            let polywrap = document.getElementsByClassName('poly-wrap-acc')[x].children[0];
            polywrap.classList.add("spin");
        }, 10000);
    })
    return (
        <>
            <span className="poly-wrap-acc">
                <span className="poly-acc">
                </span>
            </span>
            <span className="poly-wrap-acc">
                <span className="poly-acc">
                </span>
            </span>
        </>
    )
}