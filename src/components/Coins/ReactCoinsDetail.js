import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCoinDetails, setSiderMenuItem, fetchCoinMarketDetails } from '../../redux_actions'
import { Layout, Tag, Skeleton, Typography } from 'antd'
import { contentStyle, titleStyle } from '../../styles'
import ReactCoinScores from './ReactCoinScores'
import { Line } from 'react-chartjs-2'
import { market_processed_table_keys, market_stat_keys } from '../../constants'
import chartOptions from '../../ChartConfig'
import ReactSider from '../Navigation/ReactSider'
import ReactCoinCommunityStats from './ReactCoinCommunityStats'
import ReactCoinDeveloperStats from './ReactCoinDeveloperStats'
import ReactCoinMarketStats from './ReactCoinMarketStats'
import ReactCoinMarketDetailedStats from './ReactCoinMarketDetailedStats'
import ReactCoinDetailSummary from './ReactCoinDetailSummary'

const { Content } = Layout
const { Title, Paragraph } = Typography

class ReactCoinsDetail extends Component {
  componentDidMount () {
    const { coinId } = this.props.match.params
    this.props.fetchCoinDetails(coinId)
    this.props.fetchCoinMarketDetails(coinId)
    this.props.setSiderMenuItem('coin-detail')
  }

  // helper function to generate chart data from props
  getChartData = (loading, data, key, title, colour) => {
    return {
      labels: !loading ? data[key].map(item => new Date(item[0]).toLocaleString()) : [],
      datasets: [
        {
          label: title,
          data: !loading ? data[key].map(item => item[1]) : [],
          backgroundColor: colour
        }
      ]
    }
  }

  render () {
    const finalColumns = [
      {
        title: 'currency',
        key: 'currency',
        dataIndex: 'currency',
        render: item => <Tag color="purple">{item}</Tag>
      }, ...market_processed_table_keys.map(item => ({ title: item, key: item, dataIndex: item }))
    ]

    const { coingecko_rank } = this.props.data
    const { market_cap_rank } = this.props.data
    const { developer_score } = this.props.data
    const { community_score } = this.props.data
    const { liquidity_score } = this.props.data
    const { coingecko_score } = this.props.data

    const { community_data, developer_data } = this.props.data

    const { market_data, market_data_processed } = this.props.data
    const { last_updated, name, image } = this.props.data

    const loading = !(Object.keys(this.props.data).length > 0)
    const coinMarketKeys = Object.keys(this.props.chart_data)
    const pricesLoading = !coinMarketKeys.includes('prices')
    const marketCapsLoading = !coinMarketKeys.includes('market_caps')
    const totalVolumesLoading = !coinMarketKeys.includes('total_volumes')

    // Generate chart data for Chart.js
    const { chart_data } = this.props
    const chartPricesData = this.getChartData(pricesLoading,
      chart_data,
      'prices',
      'Prices 7 Day',
      'rgba(55, 144, 255, 0.7)')
    const chartMarketCapsData = this.getChartData(marketCapsLoading,
      chart_data,
      'market_caps',
      'Market Caps 7 Day',
      'rgba(114, 17, 198, 0.7)')
    const chartTotalVolumesData = this.getChartData(totalVolumesLoading,
      chart_data,
      'total_volumes',
      'Total Volumes 7 Day',
      'rgba(26, 201, 166, 0.7)')

    return (
      <React.Fragment>
        <ReactSider/>
        <Layout style={{ padding: '1rem' }}>
          <Content style={contentStyle}>
            {
              loading
                ? <React.Fragment>
                  <Skeleton active/>
                  <Skeleton active/>
                  <Skeleton active/>
                  <Skeleton active/>
                </React.Fragment>
                : <React.Fragment>

                  <ReactCoinDetailSummary
                    name={ name }
                    last_updated = { last_updated }
                    image={ image }/>

                  <ReactCoinScores
                    coingecko_rank={coingecko_rank}
                    market_cap_rank={market_cap_rank}
                    developer_score={developer_score}
                    community_score={community_score}
                    liquidity_score={liquidity_score}
                    coingecko_score={coingecko_score}/>

                  <ReactCoinMarketStats
                    market_data={market_data}
                    market_stat_keys={market_stat_keys}/>

                  <ReactCoinMarketDetailedStats
                    data={market_data_processed}
                    columns={finalColumns}/>

                  <ReactCoinCommunityStats
                    data={community_data}/>

                  <ReactCoinDeveloperStats
                    data={developer_data}/>

                  <Title level={3} style={titleStyle}>Prices Chart</Title>
                  <Paragraph>Prices in USD for the past 7 days. Datetimes are converted from unix to locale.</Paragraph>
                  <Line data={chartPricesData} options={chartOptions}/>

                  <Title level={3} style={titleStyle}>Market Caps Chart</Title>
                  <Paragraph>Market cap data from the past 7 days. Datetimes are converted from unix to locale.</Paragraph>
                  <Line data={chartMarketCapsData} options={chartOptions}/>

                  <Title level={3} style={titleStyle}>Total Volumes Chart</Title>
                  <Paragraph>Total Volumes data from the past 7 days. Datetimes are converted from unix to locale.</Paragraph>
                  <Line data={chartTotalVolumesData} options={chartOptions}/>
                </React.Fragment>
            }
          </Content>
        </Layout>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.coin_details,
    chart_data: state.coin_market_details
  }
}

const mapActionsToProps = {
  fetchCoinDetails,
  fetchCoinMarketDetails,
  setSiderMenuItem
}

export default connect(mapStateToProps, mapActionsToProps)(ReactCoinsDetail)
