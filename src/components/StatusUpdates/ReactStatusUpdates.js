import React, { Component } from 'react';
import axios from 'axios';
import { Layout, Typography, Row, Col, List, Tag} from 'antd';
import { colStyle, contentStyle } from '../../styles';

const { Content } = Layout;
const { Title, Paragraph } = Typography;


export default class ReactStatusUpdates extends Component {
    
    state = {
        data: [],
        loading: true
    }

    componentDidMount() {
        
        const url = 'https://api.coingecko.com/api/v3/status_updates'

        axios.get(url)
        .then(res => {
            this.setState({ data: res.data.status_updates },
                () => {
                    this.setState({ loading: !this.state.loading })
                })
        })
        .catch(error=>console.error(error))
    }

    render() {
        return (
            <Layout style={{ padding: '1rem' }}>
                <Content style={contentStyle}>
                    <Title level={2}>Status Updates</Title>
                    <Paragraph>This feature is currently in beta. List all status_updates with data (description, category, created_at, user, user_title and pin)</Paragraph>
                    <Row gutter={16} style={{textAlign: 'center'}} type="flex">

                        <Col xs={24} sm={24} md={8} lg={8} xl={8} style={colStyle}>
                        </Col>
                    </Row>

                    <List
                    pagination={this.state.loading ? false : true}
                    loading={this.state.loading}
                    itemLayout="vertical"
                    size="large"
                    dataSource={this.state.data}
                    renderItem={item => (
                    <List.Item
                        key={item.project.name}
                        extra={
                        <img
                            width={120}
                            alt={item.project.name}
                            src={item.project.image.large}
                        />
                        }
                    >
                        <List.Item.Meta
                        title={item.project.name}
                        description={`Posted by: ${item.user} - ${item.user_title} on ${item.created_at}`}
                        />
                        { item.description }
                        <div style={{marginTop: '1rem'}} >
                            <Tag color="orange">{item.category}</Tag>
                        </div>
                        
                    </List.Item>)}
                ></List>
                </Content>
            </Layout>
        )
    }
}
