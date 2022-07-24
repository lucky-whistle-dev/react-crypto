import React, { Component } from 'react'
import ReactSider from '../Navigation/ReactSider'
import { fetchTrendingCoins, setSiderMenuItem } from '../../redux_actions'
import { connect } from 'react-redux'
import { Layout, Typography, Avatar, Card, Badge, Col, Row } from 'antd'

import { contentStyle } from '../../styles'
const { Meta } = Card
const { Content } = Layout
const { Title, Paragraph } = Typography

class ReactTrendingCoins extends Component {
  componentDidMount () {
    this.props.fetchTrendingCoins()
    this.props.setSiderMenuItem('trending-coins')
  }

  render () {
    return (
      <React.Fragment>
        <ReactSider/>
        <Layout style={{ padding: '1rem' }}>
          <Content style={contentStyle}>
            <Title level={2}>Trending Coins</Title>
            <Paragraph>View coins that are trending today.</Paragraph>

            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>

              {
                this.props.data?.coins?.map(coin => {
                  const { item } = coin

                  return (<Col key={coin.symbol} className="gutter-row" span={6}>
                    <Badge.Ribbon text={
                      `rank: ${item.market_cap_rank}`
                    } color="green">
                      <Card
                        key={item.id}
                        style={{ marginBottom: '16px' }}
                        cover={
                          <img
                            alt="example"
                            src={item.large}
                            style={{ padding: '40px' }}
                          />
                        }

                      >
                        <Meta
                          avatar={<Avatar src={item.thumb} />}
                          title={`${item.name} (${item.symbol})`}
                          description={`${item.slug} has a score of ${item.score}, and an exchange value of ${item.price_btc} (btc conversion rate)`}
                        />
                      </Card>
                    </Badge.Ribbon>
                  </Col>)
                }
                )
              }
            </Row>
          </Content>
        </Layout>
      </React.Fragment>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.trending_coins
  }
}

const mapActionsToProps = { fetchTrendingCoins, setSiderMenuItem }

export default connect(mapStateToProps, mapActionsToProps)(ReactTrendingCoins)
