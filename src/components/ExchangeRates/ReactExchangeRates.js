//https://api.coingecko.com/api/v3/exchange_rates

import React, { Component } from 'react';
import { Layout, Typography } from 'antd';
import { contentStyle } from '../../styles';
const { Content } = Layout;
const { Title, Paragraph } = Typography;


class ReactAbout extends Component {

    render() {

        return (
            <Layout style={{ padding: '1rem' }}>
                <Content className="text-focus-in" style={{...contentStyle}}>
                    <Title level={2}>Exchange Rates</Title>
                    <Paragraph>View BTC-to-Currency exchange rates.</Paragraph>
                </Content>
            </Layout>
        )
    }
}


export default ReactAbout;




