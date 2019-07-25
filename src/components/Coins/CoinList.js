import React, { Component } from 'react';
import Layout from 'antd';
import { contentStyle } from '../../styles';
const { Content } = Layout;


class CoinList extends Component {
    render() {
        return (
            <Layout style={{ padding: '1rem' }}>
                <Content
                style={contentStyle}
                >
                Coin List Component
                </Content>
            </Layout>
        )
    }
}

export default CoinsList;
