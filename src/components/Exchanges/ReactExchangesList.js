import React, { Component } from 'react';
import axios from 'axios';
import { Table, Tag, Layout, Typography } from 'antd';
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
              title: 'Id',
              dataIndex: 'id',
              key: 'id',
            },
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
              render: country => (<Tag color="purple">{country}</Tag>)
            },
            {
                title: 'Year est.',
                dataIndex: 'year_established',
                key: 'year_established',
              },
              {
                title: 'Country',
                dataIndex: 'country',
                key: 'country',
                render: country => (<Tag color="blue">{country}</Tag>)
              },
              {
                title: 'Trade 24h BTC',
                dataIndex: 'trade_volume_24h_btc',
                key: 'trade_volume_24h_btc',
              },
              {
                title: '',
                dataIndex: '',
                key: '',
              },
              {
                title: '',
                dataIndex: '',
                key: '',
              },
              {
                title: '',
                dataIndex: '',
                key: '',
              },
              {
                title: '',
                dataIndex: '',
                key: '',
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

