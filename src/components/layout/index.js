import React from 'react'
import Upline from './Upline'
import Downline from './Downline'
import Footer from './Footer'
import About from './../pages/About'
import { BsTab } from "@basesShared";
// import  BsTab  from "./../../bases/shared/bsTab";
import Home from './../pages/Home'
import Trading from './../pages/Trading'


var tabDemo = [
    {
        label: "Home",
        main: () => <Home />
    },
    {
        label: "About Us",
        main: () => <About />
    },
    {
        label: "Trading",
        main: () => <Trading />
    }
];

export default function Layout() {
    return (
        <div>
            <Upline />

            <main id="main">
                <BsTab {...tabDemo} />
            </main>

            <Footer />

            <Downline />
        </div>
    )
}