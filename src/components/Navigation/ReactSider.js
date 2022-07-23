import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'

import { iconStyle } from '../../styles'
import {
  AlertOutlined,
  DollarOutlined,
  BankOutlined,
  GlobalOutlined
} from '@ant-design/icons'
import { connect } from 'react-redux'

const { Sider } = Layout
const { SubMenu } = Menu

class ReactSider extends Component {
  render () {
    return (
      <React.Fragment>
        <Sider
          breakpoint="md"
          collapsedWidth="0"
          width={240}
          style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            selectedKeys={[this.props.sider_selected]}
            defaultOpenKeys={['menu-exchange-rates', 'menu-updates', 'menu-coins', 'menu-events', 'menu-global', 'menu-exchanges']}
            style={{ height: '100%', borderRight: 0 }}
          >
            {/* Status updates */}
            <SubMenu
              key="menu-updates"
              title={
                <span>
                  <AlertOutlined style={iconStyle}/>General
                </span>
              }
            >
              <Menu.Item key="asset-platforms"><Link to='/asset-platforms'>Asset Platforms</Link></Menu.Item>
              <Menu.Item key="trending-coins"><Link to='/trending-coins'>Trending coins</Link></Menu.Item>
            </SubMenu>
            {/* Coin Sub Menu */}
            <SubMenu
              key="menu-coins"
              title={
                <span>
                  <DollarOutlined style={iconStyle}/>Coins
                </span>
              }
            >
              <Menu.Item key="coin-list"><Link to='/coins'>Coin Listing</Link></Menu.Item>
              <Menu.Item key="coin-detail"><Link to='/coins/bitcoin'>Coin Detail View</Link></Menu.Item>
            </SubMenu>

            {/* Exchanges Menu */}
            <SubMenu
              key="menu-exchanges"
              title={
                <span>
                  <BankOutlined style={iconStyle}/>
                            Exchanges
                </span>
              }>
              <Menu.Item key="exchanges-list"><Link to='/exchanges/list'>Exchanges Listing</Link></Menu.Item>
            </SubMenu>

            {/* Exchange Rates Menu */}
            <SubMenu
              key="menu-exchange-rates"
              title={
                <span>
                  <DollarOutlined style={iconStyle}/>
                            Exchange Rates
                </span>
              }>
              <Menu.Item key="exchange-rates-list"><Link to='/exchange-rates'>Exchange Rates Listing</Link></Menu.Item>
            </SubMenu>

            {/* Global Sub Menu */}
            <SubMenu
              key="menu-global"
              title={
                <span>
                  <GlobalOutlined style={iconStyle}/>
                            Global
                </span>
              }
            >
              <Menu.Item key="global-main"><Link to='/global'>Data</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sider_selected: state.sider_selected
  }
}

export default connect(mapStateToProps)(ReactSider)
