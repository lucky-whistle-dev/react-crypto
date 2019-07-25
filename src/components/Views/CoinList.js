import React, { Component } from 'react';
import Layout from 'antd';
import { contentStyle } from '../../styles/';
const { Content } = Layout;


export default class CoinList extends Component {
    render() {
        return (
            <div>
                <Layout style={{ padding: '1rem' }}>
                    {/* <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb> */}
                    <Content
                    style={contentStyle}
                    >
                    Content
                    </Content>
                </Layout>
            </div>
        )
    }
}
