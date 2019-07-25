import React, { Component } from 'react';
import ReactCoinsList from './Coins/ReactCoinsList';
import ReactHome from './General/ReactHome';
import ReactAbout from './General/ReactAbout';
import ReactEvents from './Events/ReactEvents';
import ReactEmpty from './Empty/ReactEmpty';
import ReactGlobal from './Global/ReactGlobal';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';
import ReactHeader from './Navigation/ReactHeader';
import ReactSider from './Navigation/ReactSider';
import ReactExchangesList from './Exchanges/ReactExchangesList';
import './App.css'
//[NOTE] React prefix used with React.Components in order to differentiate from Ant Design UI components.

const { Content, Sider } = Layout;


export default class App extends Component {
    render() {
        return (
            <Layout>    
                <ReactHeader/>
                <Layout>
                <ReactSider/>
                    <Route path='/' exact component={ReactHome}/>
                    <Route path='/about' exact component={ReactAbout}/>
                    <Route path='/coins' exact component={ReactCoinsList}/>
                    <Route path='/exchanges/list' exact component={ReactExchangesList}/>
                    <Route path='/global' exact component={ReactGlobal}/>
                    <Route path='/empty' exact component={ReactEmpty}/>
                    <Route path='/events/list' exact component={ReactEvents}/>
                </Layout>
            </Layout>
        )
    }
}