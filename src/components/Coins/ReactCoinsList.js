import React, { Component } from 'react';
import axios from 'axios';
import { Layout, Typography, Button, Card, List} from 'antd';
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
        .catch(error=>console.error(error))
    }
    render() {
        return (
            <Layout style={{ padding: '1rem' }}>
                <Content style={contentStyle}>
                    <Title level={2}>Coins List</Title>
                    <Paragraph>This page lists all available coins...</Paragraph>
                    <List
                    pagination={true}
                    loading={this.state.loaded}
                    grid={{
                    gutter: 16, 
                    xs: 1, 
                    sm: 1, 
                    md: 3,
                    lg: 4, 
                    xl: 4, 
                    xxl: 5,
                    }}
                    dataSource={this.state.coinsList}
                    renderItem={(item) => (
                    <List.Item>
                        <Card
                        title={item.name}
                        actions={[<Button>View details</Button>]}>
                            Id: {item.id}
                            Symbol: {item.symbol}
                        </Card>

                    </List.Item>
                    )}
                />
                </Content>
            </Layout>
        )
    }
}

export default ReactCoinsList;
