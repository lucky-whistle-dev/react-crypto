import React, { Component } from 'react';
import axios from 'axios';
import { Col, Statistic, Card, Row, Layout, Typography } from 'antd';
import { contentStyle, colStyle, cardStyle } from '../../styles';
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
        const { loading,
            active_cryptocurrencies, 
            market_cap_change_percentage_24h_usd,
            ongoing_icos, 
            upcoming_icos, 
            ended_icos, 
            markets} = this.state.data
        return (
        <Layout style={{ padding: '1rem' }}>
            <Content style={contentStyle}>
                <Title level={2}>Global Data</Title>
                <Paragraph>This page lists global data attributes and values.</Paragraph>
                <Row gutter={16} style={{textAlign: 'center'}} type="flex">

                    <Col xs={24} sm={24} md={8} lg={8} xl={8} style={colStyle}>
                        <Card style={cardStyle} loading={loading}>
                            <Statistic title="Markets" value={markets}/>
                        </Card>
                    </Col>

                    <Col xs={24} sm={24} md={8} lg={8} xl={8} style={colStyle}>
                        <Card style={cardStyle} loading={loading}>
                            <Statistic suffix='%' precision={2} title="Market Cap Change Percent (24hr USD)" value={market_cap_change_percentage_24h_usd}/>
                        </Card>
                    </Col>

                    <Col xs={24} sm={24} md={8} lg={8} xl={8} style={colStyle}>
                        <Card style={cardStyle} loading={loading}>
                            <Statistic title="Active Cryptocurrencies" value={active_cryptocurrencies}/>
                        </Card>
                    </Col>

                    <Col xs={24} sm={24} md={8} lg={8} xl={8} style={colStyle}>
                    <Card style={cardStyle} loading={loading}>
                            <Statistic title="Ongoing Initial Coin Offerings (ICOS)" value={ongoing_icos}/>
                        </Card>
                    </Col>

                    <Col xs={24} sm={24} md={8} lg={8} xl={8} style={colStyle}>
                        <Card style={cardStyle} loading={loading}>
                            <Statistic title="Upcoming Initial Coin Offerings (ICOS)" value={upcoming_icos}/>
                        </Card>
                    </Col>

                    <Col xs={24} sm={24} md={8} lg={8} xl={8} style={colStyle}>
                        <Card style={cardStyle} loading={loading}>
                            <Statistic title="Ended Initial Coin Offerings (ICOS)" value={ended_icos} />
                        </Card>
                    </Col>
                </Row>
            </Content>
        </Layout>
        )
    }
}

