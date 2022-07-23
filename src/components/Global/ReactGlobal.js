import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchGlobal, setSiderMenuItem } from '../../redux_actions'
import ReactSider from '../Navigation/ReactSider'
import { Col, Statistic, Card, Row, Layout, Typography } from 'antd'
import { contentStyle, colStyle, cardStyle } from '../../styles'

const { Content } = Layout
const { Paragraph, Title } = Typography

class ReactGlobal extends Component {
  componentDidMount () {
    this.props.fetchGlobal()
    this.props.setSiderMenuItem('global-main')
  }

  render () {
    const loading = !(Object.keys(this.props.data).length > 0)
    const {
      active_cryptocurrencies,
      market_cap_change_percentage_24h_usd,
      ongoing_icos,
      upcoming_icos,
      ended_icos,
      markets
    } = this.props.data
    return (
      <React.Fragment>
        <ReactSider/>
        <Layout style={{ padding: '1rem' }}>
          <Content style={contentStyle}>
            <Title level={2}>Global Data</Title>
            <Paragraph>This page lists global data attributes and values.</Paragraph>
            <Row gutter={16} style={{ textAlign: 'center' }} type="flex">

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
      </React.Fragment>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.global
  }
}

const mapActionsToProps = {
  fetchGlobal,
  setSiderMenuItem
}

export default connect(mapStateToProps, mapActionsToProps)(ReactGlobal)
