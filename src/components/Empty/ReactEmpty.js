import React, { Component } from 'react';
import { Layout, Typography } from 'antd';
import { contentStyle } from '../../styles';
const { Content } = Layout;
const { Title, Paragraph } = Typography;


export default class ReactEmpty extends Component {
    render() {
        return (
            <Layout style={{ padding: '1rem' }}>
                <Content style={contentStyle}>
                    <Title level={2}>Coins List</Title>
                    <Paragraph>This page lists all available coins...</Paragraph>
                </Content>
            </Layout>        
        )
    }
}
