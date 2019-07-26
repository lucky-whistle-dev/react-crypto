import React, { Component } from 'react';
import axios from 'axios';
import { Layout } from 'antd';

const { Sider } = Layout;

export default class ReactStatusUpdates extends Component {
    
    state = {
        data: null,
        loading: true
    }

    componentDidMount() {
        
        const url = 'https://api.coingecko.com/api/v3/status_updates'

        axios.get(url)
        .then(res => {
            this.setState({ data: res.data },
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
                </Content>
            </Layout>
        )
    }
}
