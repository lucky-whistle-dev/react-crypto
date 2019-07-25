import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

//[NOTE] React prefix used to differentiate from antd ui components.
import ReactHeader from './Layout/ReactHeader';
import ReactSider from './Layout/ReactSider';

const { Content, Sider } = Layout;


export default class App extends Component {
    render() {
        return (
            <Layout>
                <ReactHeader/>
                <Layout>
                <ReactSider/>
                <Layout style={{ padding: '1rem' }}>
                    {/* <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb> */}
                    <Content
                    style={{
                        background: '#fff',
                        padding: 24,
                        margin: 0,
                        minHeight: 700,
                    }}
                    >
                    Content
                    </Content>
                </Layout>
                </Layout>
            </Layout>
        )
    }
}