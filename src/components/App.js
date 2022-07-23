import React, { Component } from 'react'
import ReactCoinsList from './Coins/ReactCoinsList'
import ReactCoinsDetail from './Coins/ReactCoinsDetail'
import ReactHome from './General/ReactHome'
import ReactAbout from './General/ReactAbout'
import ReactEmpty from './Empty/ReactEmpty'
import ReactGlobal from './Global/ReactGlobal'
import { Route } from 'react-router-dom'
import { Layout } from 'antd'
import ReactHeader from './Navigation/ReactHeader'
import ReactExchangesList from './Exchanges/ReactExchangesList'
import ReactExchangeRates from './ExchangeRates/ReactExchangeRates'
import ReactTrendingCoins from './Coins/ReactTrendingCoins'
import ReactFooter from './Navigation/ReactFooter'
import './App.css'
import ReactAssetPlatforms from './AssetPlatforms/ReactAssetPlatforms'

// [NOTE] React prefix used with React.Components in order to differentiate from Ant Design UI components.

export default class App extends Component {
  render () {
    return (
      <Layout style={{ minHeight: '100vh', lineHeight: '1.6rem' }}>
        <ReactHeader/>
        <Layout>
          <Route path='/' exact component={ReactHome}/>
          <Route path='/about' exact component={ReactAbout}/>
          <Route path='/trending-coins' exact component={ReactTrendingCoins}/>
          <Route path='/coins' exact component={ReactCoinsList}/>
          <Route path='/coins/:coinId/' exact component={ReactCoinsDetail}/>
          <Route path='/exchanges/list' exact component={ReactExchangesList}/>
          <Route path='/global' exact component={ReactGlobal}/>
          <Route path='/empty' exact component={ReactEmpty}/>
          <Route path='/exchange-rates' exact component={ReactExchangeRates}/>
          <Route path='/asset-platforms' exact component={ReactAssetPlatforms}/>
        </Layout>
        <ReactFooter/>
      </Layout>
    )
  }
}
