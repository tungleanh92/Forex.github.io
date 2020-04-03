import React, { useState, useEffect } from 'react'
import './../../../styles/less/tool.less'
import './../../../styles/less/pages/module/Range.less'

var tabDemo = {
    box1: {
        pos: 1,
        name: "Indices CFD1",
        description: "Gain exposure to the world’s largest equity markets through IC Markets’ offering of global Indices CFDs. With spreads from 0.5 points on 16 Indices, traders can take a wider view of equities markets whilst enjoying commission free and 24/5 trading across major markets."
    },
    box2: {
        pos: 2,
        name: "Indices CFD2",
        description: "Gain exposure to the world’s largest equity markets through IC Markets’ offering of global Indices CFDs. With spreads from 0.5 points on 16 Indices, traders can take a wider view of equities markets whilst enjoying commission free and 24/5 trading across major markets."
    },
    box3: {
        pos: 3,
        name: "Indices CFD3",
        description: "Gain exposure to the world’s largest equity markets through IC Markets’ offering of global Indices CFDs. With spreads from 0.5 points on 16 Indices, traders can take a wider view of equities markets whilst enjoying commission free and 24/5 trading across major markets."
    },
    box4: {
        pos: 4,
        name: "Indices CFD4",
        description: "Gain exposure to the world’s largest equity markets through IC Markets’ offering of global Indices CFDs. With spreads from 0.5 points on 16 Indices, traders can take a wider view of equities markets whilst enjoying commission free and 24/5 trading across major markets."
    },
    box5: {
        pos: 5,
        name: "Indices CFD5",
        description: "Gain exposure to the world’s largest equity markets through IC Markets’ offering of global Indices CFDs. With spreads from 0.5 points on 16 Indices, traders can take a wider view of equities markets whilst enjoying commission free and 24/5 trading across major markets."
    },
    box6: {
        pos: 6,
        name: "Indices CFD6",
        description: "Gain exposure to the world’s largest equity markets through IC Markets’ offering of global Indices CFDs. With spreads from 0.5 points on 16 Indices, traders can take a wider view of equities markets whilst enjoying commission free and 24/5 trading across major markets."
    },
    box7: {
        pos: 7,
        name: "Indices CFD7",
        description: "Gain exposure to the world’s largest equity markets through IC Markets’ offering of global Indices CFDs. With spreads from 0.5 points on 16 Indices, traders can take a wider view of equities markets whilst enjoying commission free and 24/5 trading across major markets."
    },
};

var initialState = false;
var initContent = tabDemo.box1;
var initPos = null;

const Range = () => {
    useEffect(() => {
        let spin1 = document.getElementsByClassName('poly-wrap-range').length;
        let myInterval1 = setInterval(function () {
            for (let i = 0; i < 2; i++) {
                document.getElementsByClassName('poly-range')[i].classList.remove("spin");
            }

            let x1 = Math.floor((Math.random() * spin1));
            let polywrap2 = document.getElementsByClassName('poly-wrap-range')[x1].children[0];
            polywrap2.classList.add("spin");
        }, 10000);

        return () => {
            clearInterval(myInterval1);
        }
    }, [])
    const [display, setDisplay] = useState(initialState)

    const [content, setContent] = useState(initContent)

    const [pos, setPos] = useState(initPos)

    function onToggle() {
        if (display === true && initPos !== content.pos) {
            setDisplay(initialState = true)
        }
        if (display === true && initPos === content.pos) {
            setDisplay(initialState = false)
        }
        if (display === false) {
            setDisplay(initialState = true)
        }
    }

    function onChange1() {
        setPos(initPos = 1)
        onToggle()
        setContent(initContent = tabDemo.box1)
    }

    function onChange2() {
        setPos(initPos = 2);
        onToggle()
        setContent(initContent = tabDemo.box2)
    }

    function onChange3() {
        setPos(initPos = 3)
        onToggle()
        setContent(initContent = tabDemo.box3)
    }

    function onChange4() {
        setPos(initPos = 4)
        onToggle()
        setContent(initContent = tabDemo.box4)
    }

    function onChange5() {
        setPos(initPos = 5)
        onToggle()
        setContent(initContent = tabDemo.box5)
    }

    function onChange6() {
        setPos(initPos = 6)
        onToggle()
        setContent(initContent = tabDemo.box6)
    }

    function onChange7() {
        setPos(initPos = 7)
        onToggle()
        setContent(initContent = tabDemo.box7)
    }

    return (
        <div className="range">
            <span className="poly-wrap-range">
                <span className="poly-range">
                </span>
            </span>
            <span className="poly-wrap-range">
                <span className="poly-range">
                </span>
            </span>
            <h2>Range of Markets</h2>
            <p>HYMC carefully selected range of products gives you access to the most popular and liquid markets across the world for the best trading opportunities 24/7.</p>
            <table>
                <tbody>
                    <tr>
                        <td onClick={onChange1} className="euro"><div><img src="./../../../static/images/euro.png" /></div></td>
                        <td onClick={onChange2} className="fence"><div><img src="./../../../static/images/fence.png" /></div></td>
                        <td onClick={onChange3} className="box"><div><img src="./../../../static/images/box.png" /></div></td>
                        <td onClick={onChange4} className="cart"><div><img src="./../../../static/images/cart-icon.png" /></div></td>
                    </tr>
                    <tr className={`${display === true ? "pos" : "neg"} toggle1`}>
                        <td colSpan="4">
                            <div className="content">
                                <p>{content.name} </p>
                                <p>{content.description} </p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td onClick={onChange5} className="certificate"><div><img src="./../../../static/images/certificate.png" /></div></td>
                        <td onClick={onChange6} className="bitcoin"><div><img src="./../../../static/images/bitcoin.png" /></div></td>
                        <td onClick={onChange7} className="sandclock"><div><img src="./../../../static/images/sand-clock.png" /></div></td>
                        <td><div><img src="./../../../static/images/dots.png" /></div></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Range