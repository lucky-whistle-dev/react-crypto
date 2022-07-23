import React from 'react'
import { Row, Col, Card, Statistic, Typography } from 'antd'
import { cardStyle, colStyle } from '../../styles'

export default function ReactCoinScores (props) {
  return (
    <React.Fragment>
      <Typography.Title
        level={3}
        style={{ marginTop: '3rem' }}>
                Scores and Ranks
      </Typography.Title>
      <Row gutter={16} style={{ textAlign: 'center' }} type="flex">
        <Col xs={24} sm={24} md={12} lg={8} xl={8} style={colStyle}>
          <Card style={cardStyle}>
            <Statistic precision={1} title="community_score" value={props.community_score}/>
          </Card>
        </Col>

        <Col xs={24} sm={24} md={12} lg={8} xl={8} style={colStyle}>
          <Card style={cardStyle}>
            <Statistic precision={1} title="coingecko_score" value={props.coingecko_score}/>
          </Card>
        </Col>

        <Col xs={24} sm={24} md={12} lg={8} xl={8} style={colStyle}>
          <Card style={cardStyle}>
            <Statistic precision={1} title="developer_score" value={props.developer_score}/>
          </Card>
        </Col>

        <Col xs={24} sm={24} md={12} lg={8} xl={8} style={colStyle}>
          <Card style={cardStyle}>
            <Statistic title="liquitidy_score" value={props.liquitidy_score}/>
          </Card>
        </Col>

        <Col xs={24} sm={24} md={12} lg={8} xl={8} style={colStyle}>
          <Card style={cardStyle}>
            <Statistic title="market_cap_rank" value={props.market_cap_rank}/>
          </Card>
        </Col>

        <Col xs={24} sm={24} md={12} lg={8} xl={8} style={colStyle}>
          <Card style={cardStyle}>
            <Statistic title="coingecko_rank" value={props.coingecko_rank}/>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  )
}
