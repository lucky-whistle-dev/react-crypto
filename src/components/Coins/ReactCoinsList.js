import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Layout, Table, Typography, Button, Card, List } from 'antd';
import { contentStyle } from '../../styles';
const { Content } = Layout;
const { Title, Paragraph } = Typography;


class ReactCoinsList extends Component {

    state = {
        coinsList: [],
        loaded: true
    }

    componentDidMount () {
        axios.get('https://api.coingecko.com/api/v3/coins/list')
        .then(res => {
            this.setState({coinsList: res.data}, 
                () => {this.setState({loaded: !this.state.loaded })})
        })
        .catch(error => console.error(error))
    }

    render() {

        const columns=[
            {}
        ];
        return (
            <Layout style={{ padding: '1rem' }}>
                <Content style={contentStyle}>
                    <Title level={2}>Coins List</Title>
                    <Paragraph>This page lists all available coins...</Paragraph>
                    <Table dataSource={this.state.coinsList} columns={columns}/>
                </Content>
            </Layout>
        )
    }
}

export default ReactCoinsList;
