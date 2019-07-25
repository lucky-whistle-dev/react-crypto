import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'antd/dist/antd.css';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(<HashRouter><App/></HashRouter>, document.getElementById('root'))