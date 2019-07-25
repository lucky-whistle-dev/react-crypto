import React, { Component } from 'react';
import axios from 'axios';
import { Col, Skeleton, Card, Row, Layout, Typography } from 'antd';
import { contentStyle } from '../../styles';
const { Meta } = Card;
const { Content } = Layout;
const { Paragraph, Title } = Typography;

export default class ReactGlobal extends Component {
    state = {
        data: {},
        loading: true
    }
    
    componentDidMount() {
        axios.get("https://api.coingecko.com/api/v3/global")
        .then(res => this.setState({ data: res.data.data },
            this.setState({ loading: !this.state.loading })))
    }
    render() {
        const cardStyle = {marginBottom: '1rem'};
        const { loading,
            active_cryptocurrencies, 
            market_cap_change_percentage_24h_usd,
            ongoing_icos, 
            upcoming_icos, 
            ended_icos, 
            updated_at,
            markets} = this.state.data
        return (
            <Layout style={{ padding: '1rem' }}>
                <Content style={contentStyle}>
                    <Title level={2}>Global Data</Title>
                    <Paragraph>This page lists global data. Prices were last updated at {}</Paragraph>
                    <Row gutter={16} style={{textAlign: 'center'}}>

                        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                            <Card style={cardStyle}>
                                <Skeleton loading={loading}>
                                    <Meta
                                    title="Markets"
                                    description={markets}/>
                                </Skeleton>
                            </Card>
                        </Col>

                        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                            <Card style={cardStyle}>
                                <Skeleton loading={loading}>
                                    <Meta
                                    title="Market Cap Change Percent (24hr USD)"
                                    description={market_cap_change_percentage_24h_usd}/>
                                </Skeleton>
                            </Card>
                        </Col>

                        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <Card style={cardStyle}>
                            <Skeleton loading={loading}>
                                <Meta
                                title="Ended Icos"
                                description={ended_icos}/>
                            </Skeleton>
                            </Card>
                        </Col>

                        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <Card style={cardStyle}>
                            <Skeleton loading={loading}>
                                    <Meta
                                    title="Active Cryptocurrencies"
                                    description={active_cryptocurrencies}/>
                                </Skeleton>
                            </Card>
                        </Col>

                        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                            <Card style={cardStyle}>
                                <Skeleton loading={loading}>
                                    <Meta
                                    title="Ongoing Icos"
                                    description={ongoing_icos}/>
                                </Skeleton>
                            </Card>
                        </Col>

                        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                            <Card style={cardStyle}>
                                <Skeleton loading={loading}>
                                    <Meta
                                    title="Upcoming Icos"
                                    description={upcoming_icos}/>
                                </Skeleton>
                            </Card>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        )
    }
}

