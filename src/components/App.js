import React, { Component } from 'react';
import ReactCoinsList from './Coins/ReactCoinsList';
import ReactHome from './General/ReactHome';
import ReactAbout from './General/ReactAbout';
import ReactGlobal from './Global/ReactGlobal';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';
//[NOTE] React prefix used to differentiate from antd ui components.
import ReactHeader from './Navigation/ReactHeader';
import ReactSider from './Navigation/ReactSider';
import ReactExchangesList from './Exchanges/ReactExchangesList';
import './App.css'


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
                    
                    {/* <Layout style={{ padding: '1rem' }}>
                        <Content style={contentStyle}>
                        Est labore amet est occaecat ad do occaecat consectetur cillum eu exercitation ullamco.
                        </Content>
                    </Layout> */}
                </Layout>
            </Layout>
        )
    }
}