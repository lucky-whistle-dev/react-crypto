import React, { Component } from 'react';
import axios from 'axios';
import { Col, Skeleton, Statistic, Card, Row, Layout, Typography } from 'antd';
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
        const cardStyle = {height: '100%'};
        const colStyle = {marginBottom: '1rem'};
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
                <Row gutter={16} style={{textAlign: 'center'}} type="flex">

                    <Col xs={24} sm={24} md={8} lg={8} xl={8} style={colStyle}>
                    <Card style={cardStyle}>
                            <Statistic title="Markets" value={markets}/>
                        </Card>
                    </Col>

                    <Col xs={24} sm={24} md={8} lg={8} xl={8} style={colStyle}>
                        <Card style={cardStyle}>
                            <Statistic suffix='%' precision={2} title="Market Cap Change Percent (24hr USD)" value={market_cap_change_percentage_24h_usd}/>
                        </Card>
                    </Col>

                    <Col xs={24} sm={24} md={8} lg={8} xl={8} style={colStyle}>
                        <Card style={cardStyle}>
                            <Statistic title="Ended Icos" value={ended_icos} />
                        </Card>
                    </Col>

                    <Col xs={24} sm={24} md={8} lg={8} xl={8} style={colStyle}>
                        <Card style={cardStyle}>
                            <Statistic title="Active Cryptocurrencies" value={active_cryptocurrencies}/>
                        </Card>
                    </Col>

                    <Col xs={24} sm={24} md={8} lg={8} xl={8} style={colStyle}>
                    <Card style={cardStyle}>
                            <Statistic title="Ongoing Initial Coin Offerings (ICOS)" value={ongoing_icos}/>
                        </Card>
                    </Col>

                    <Col xs={24} sm={24} md={8} lg={8} xl={8} style={colStyle}>
                        <Card style={cardStyle}>
                            <Statistic title="Upcoming Initial Coin Offerings (ICOS)" value={upcoming_icos}/>
                        </Card>
                    </Col>
                </Row>
            </Content>
        </Layout>
        )
    }
}

