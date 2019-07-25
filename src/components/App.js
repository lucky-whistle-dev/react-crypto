import React, { Component } from 'react';
import CoinsList from './Coins/CoinsList';
import { Route, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { contentStyle } from '../styles';
//[NOTE] React prefix used to differentiate from antd ui components.
import ReactHeader from './Layout/ReactHeader';
import ReactSider from './Layout/ReactSider';



const { Content, Sider } = Layout;


export default class App extends Component {
    render() {
        return (
            <Layout>
                <Link to='coins'>AYYY</Link>
                <ReactHeader/>
                <Layout>
                <ReactSider/>
                    <Route path='coins' exact component={CoinsList}/>
                    <Layout style={{ padding: '1rem' }}>
                        <Content style={contentStyle}>
                        Est labore amet est occaecat ad do occaecat consectetur cillum eu exercitation ullamco.
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}