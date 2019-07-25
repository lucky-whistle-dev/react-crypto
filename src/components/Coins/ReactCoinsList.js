import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Layout, Table, Typography, Button, Tag } from 'antd';
import { contentStyle } from '../../styles';
const { Content } = Layout;
const { Title, Paragraph } = Typography;


class ReactCoinsList extends Component {

    state = {
        coinsList: [],
        loading: true
    }

    componentDidMount () {
        axios.get('https://api.coingecko.com/api/v3/coins/list')
        .then(res => {
            this.setState({coinsList: res.data}, 
                () => {this.setState({loading: !this.state.loading })})
        })
        .catch(error => console.error(error))
    }

    render() {
        const { coinsList, loading } = this.state;
        const columns=[
            {
                title:'Id',
                dataIndex:'id',
                key:'id'
            },
            {
                title:'Symbol',
                dataIndex:'symbol',
                key:'symbol'
            },
            {
                title:'Name',
                dataIndex:'name',
                key:'name',
                render: item => <Tag color="purple">{item}</Tag>
            },
            {
                title:'View Details',
                dataIndex:'symbol',
                key:'symbol',
                render: item => (<Button type="primary"><Link to="/empty">View</Link></Button>)
            }
        ];
        return (
            <Layout style={{ padding: '1rem' }}>
                <Content style={contentStyle}>
                    <Title level={2}>Coins List</Title>
                    <Paragraph>This page lists all available coins...</Paragraph>
                    <Table 
                    bordered={true}
                    loading={loading} 
                    dataSource={coinsList} 
                    columns={columns}/>
                </Content>
            </Layout>
        )
    }
}

export default ReactCoinsList;
