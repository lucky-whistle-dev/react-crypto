import React, { Component } from 'react';
import { Layout, List, Tag, Icon, Typography } from 'antd';
import { contentStyle } from '../../styles';
import Axios from 'axios';

const { Title, Paragraph } = Typography;
const { Content } = Layout;

export default class ReactEvents extends Component {

    state = {
        data: [],
        count: null,
        loading: true
    }


    componentDidMount() {
        Axios.get('https://api.coingecko.com/api/v3/events')
        .then(res => {
            console.log(res.data.data);
            this.setState({data: res.data.data, count: res.data.count}, ()=>{
                this.setState({loading: !this.state.loading})
            })
        })
        .catch(error => console.error(error))
    }


    render() {
        return (
            <Layout style={{ padding: '1rem' }}>
                <Content style={contentStyle}>
                    <Title level={2}>Events</Title>
                    <Paragraph>This page shows cryptocurrency related events around the globe...</Paragraph>

                    <List
                    loading={this.state.loading}
                    itemLayout="vertical"
                    size="large"
                    dataSource={this.state.data}
                    renderItem={item => (
                    <List.Item
                        key={item.title}
                        extra={
                        <img
                            width={450}
                            alt={item.title}
                            src={item.screenshot}
                        />
                        }
                    >
                        <List.Item.Meta
                        title={<a href={item.website}>{item.title}</a>}
                        description={item.venue}
                        />
                        {item.description.slice(0, 500)}...
                        <div style={{marginTop: '1rem'}} >
                        <Tag color="blue">Type: {item.type}</Tag>
                        <Tag color="blue">Location: {item.country}</Tag>
                        <Tag color="green">Start: {item.start_date}</Tag>
                        <Tag color="green">End: {item.end_date}</Tag>
                        </div>
                        
                    </List.Item>
                    )}
                />

                </Content>
            </Layout>
        )
    }
}
