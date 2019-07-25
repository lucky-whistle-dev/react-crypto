import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// [NOTE] import antd css so that it becomes available for all components in App
import 'antd/dist/antd.css';
// [NOTE] Wrap all components in a Router
import { HashRouter } from 'react-router-dom';

ReactDOM.render(<HashRouter><App/></HashRouter>, document.getElementById('root'))