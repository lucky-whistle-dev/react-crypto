import React, { Component } from 'react';
import axios from 'axios';
import { Table, Layout, Typography } from 'antd';
import { contentStyle } from '../../styles';

const { Content } = Layout;
const { Paragraph, Title } = Typography;

export default class ReactExchangesList extends Component {
    state = {
        exchanges: [],
        loading: true
    }
    
    componentDidMount() {
        axios.get("https://api.coingecko.com/api/v3/exchanges")
        .then(res => this.setState({ exchanges: res.data },
            this.setState({ loading: !this.state.loading })))
    }
    render() {
          const columns = [
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: 'Age',
              dataIndex: 'age',
              key: 'age',
            },
            {
              title: 'Address',
              dataIndex: 'address',
              key: 'address',
            },
            ];

        return (
            <Layout style={{ padding: '1rem' }}>
                <Content style={contentStyle}>
                    <Title level={2}>Exchanges List</Title>
                    <Paragraph>This page lists available exchanges.</Paragraph>
                    <Table dataSource={this.state.exchanges} columns={columns} />
                </Content>
            </Layout>
        )
    }
}

