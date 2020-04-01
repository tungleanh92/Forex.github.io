import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import {
    SectionBanner,
} from "@components";
import { Modal, Slide, Tab, Collapse, Form, BsImage } from "@styles/demoComponent";



export class HomePage extends Component {
    // load when use jquery for template jquery
    // componentWillMount(){
    //     const script1 = document.createElement("script");
    //     script1.src = "src/static/js/jquery-3.2.1.js";
    //     script1.async = true;
    //     const main = document.getElementById("main");
    //     main.insertBefore(newItem, main.childNodes[0]); 
    //   }
    render() {

        return (
           <Fragment>
                <Helmet>
                    <title>Trang chủ</title>
                </Helmet>
                <SectionBanner />
                <h1>Modal</h1>
                <Modal/>
                <h1>Slide</h1>
                <Slide/>
                <h1>Tab</h1>
                <Tab/>
                <h1>Collapse</h1>
                <Collapse/>
                <h1>Form</h1>
                <Form/>
                <h1>Lazyload images</h1>
                <BsImage/>
            </Fragment>
        );
    }
}

export default HomePage;
