import React from 'react'
import { Row, Col, Card, Statistic } from 'antd';


export default function ReactCoinScores(props) {
    
    const cardStyle = {height: '100%'};
    const colStyle = {marginBottom: '1rem'};

    return (
        <React.Fragment>
            <Row gutter={16} style={{textAlign: 'center'}} type="flex">
                <Col xs={24} sm={24} md={8} lg={8} xl={8} style={colStyle}>
                    <Card style={cardStyle}>
                        <Statistic title="community_score" value={props.community_score}/>
                    </Card>
                </Col>

                <Col xs={24} sm={24} md={8} lg={8} xl={8} style={colStyle}>
                    <Card style={cardStyle}>
                        <Statistic title="coingecko_score" value={props.coingecko_score}/>
                    </Card>
                </Col>

                <Col xs={24} sm={24} md={8} lg={8} xl={8} style={colStyle}>
                    <Card style={cardStyle}>
                        <Statistic title="developer_score" value={props.developer_score}/>
                    </Card>
                </Col>

                <Col xs={24} sm={24} md={8} lg={8} xl={8} style={colStyle}>
                    <Card style={cardStyle}>
                        <Statistic title="market_cap_rank" value={props.market_cap_rank}/>
                    </Card>
                </Col>

                <Col xs={24} sm={24} md={8} lg={8} xl={8} style={colStyle}>
                    <Card style={cardStyle}>
                        <Statistic title="coingecko_rank" value={props.coingecko_rank}/>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}
