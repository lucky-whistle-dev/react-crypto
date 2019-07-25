import React, { Component } from 'react';
import axios from 'axios';
import { Table, Tag, Layout, Typography } from 'antd';
import { contentStyle } from '../../styles';

const { Content } = Layout;
const { Paragraph, Title } = Typography;

export default class ReactGlobal extends Component {
    state = {
        data: [],
        loading: true
    }
    
    componentDidMount() {
        axios.get("https://api.coingecko.com/api/v3/global")
        .then(res => this.setState({ data: res.data.data },
            this.setState({ loading: !this.state.loading })))
    }
    render() {
        return (
            <Layout style={{ padding: '1rem' }}>
                <Content style={contentStyle}>
                    <Title level={2}>Global Data</Title>
                    <Paragraph>This page lists global data.</Paragraph>
                </Content>
            </Layout>
        )
    }
}

