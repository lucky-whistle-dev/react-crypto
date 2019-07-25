import React, { Component } from 'react';
import ReactCoinsList from './Coins/ReactCoinsList';
import ReactHome from './General/ReactHome';
import ReactAbout from './General/ReactAbout';
import { Route, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { contentStyle } from '../styles';
//[NOTE] React prefix used to differentiate from antd ui components.
import ReactHeader from './Layout/ReactHeader';
import ReactSider from './Layout/ReactSider';
import ReactExchangesList from './Exchanges/ReactExchangesList';


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