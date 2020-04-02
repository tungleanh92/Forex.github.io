import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Layout from '@components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@styles/less/tool.less';
import '@styles/less/pages.less';
import '@styles/less/upgrade.less';
import 'jquery';
import store from './states/store';

ReactDOM.render(
    <Provider store={store}>
        <Layout />
    </Provider>, document.getElementById('root'));
