import React, { Component } from 'react'
import { Table, Typography } from 'antd'
import { titleStyle, tableStyle } from '../../styles'

const { Title } = Typography

export default class ReactCoinMarketDetailedStats extends Component {
  render () {
    const { data, columns } = this.props
    return (
      <React.Fragment>
        <Title level={3} style={titleStyle}>Market Data (detailed)</Title>
        <Table
          style={tableStyle}
          rowKey = "currency"
          bordered
          dataSource={data}
          columns={columns}>
        </Table>
      </React.Fragment>
    )
  }
}
