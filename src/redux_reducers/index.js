import { combineReducers } from 'redux'
import { market_processed_table_keys } from '../constants'
import {
  GET_COIN_LIST,
  GET_COIN_DETAILS,
  GET_COIN_CHART,
  GET_EVENT_LIST,
  GET_EXCHANGES_LIST,
  GET_EXCHANGE_RATES,
  GET_GLOBAL,
  SET_HEADER_MENU_ITEM,
  SET_SIDER_MENU_ITEM,
  GET_ASSET_PLATFORMS,
  GET_TRENDING_COINS
} from '../redux_actions'

const assetPlatformsReducer = (state = [], action) => {
  const { type, payload } = action

  switch (type) {
  case GET_ASSET_PLATFORMS:
    return payload
  default:
    return state
  }
}

const coinsTrendingReducer = (state = [], action) => {
  const { type, payload } = action

  switch (type) {
  case GET_TRENDING_COINS:
    return payload
  default:
    return state
  }
}

const coinsReducer = (state = [], action) => {
  const { type, payload } = action

  switch (type) {
  case GET_COIN_LIST:
    return payload
  default:
    return state
  }
}

const compileMarketData = (marketData) => {
  const data = {}

  for (let market_index = 0; market_index < market_processed_table_keys.length; market_index++) {
    const field = market_processed_table_keys[market_index]
    const entries = Object.entries(marketData[field])
    for (let i = 0; i < entries.length; i++) {
      const key = entries[i][0]
      const value = entries[i][1]
      if (Object.keys(data).includes(key)) {
        data[key] = { ...data[key], [field]: value, currency: key }
      } else {
        data[key] = { [field]: value, currency: key }
      }
    }
  }

  return Object.values(data)
}

const coinDetailsReducer = (state = {}, action) => {
  const { type, payload } = action

  switch (type) {
  case GET_COIN_DETAILS:
    const market_data_processed = compileMarketData(payload.market_data)
    return { ...payload, market_data_processed }
  default:
    return state
  }
}

const coinMarketDetailsReducer = (state = {}, action) => {
  const { type, payload } = action

  switch (type) {
  case GET_COIN_CHART:
    return payload
  default:
    return state
  }
}

const globalReducer = (state = {}, action) => {
  const { type, payload } = action

  switch (type) {
  case GET_GLOBAL:
    return payload.data
  default:
    return state
  }
}

const exchangesReducer = (state = [], action) => {
  const { type, payload } = action

  switch (type) {
  case GET_EXCHANGES_LIST:
    return payload
  default:
    return state
  }
}

const exchangeRatesReducer = (state = [], action) => {
  const { type, payload } = action

  switch (type) {
  case GET_EXCHANGE_RATES:
    const rates = Object.values(payload.rates)
    return rates
  default:
    return state
  }
}

const eventReducer = (state = [], action) => {
  const { type, payload } = action

  switch (type) {
  case GET_EVENT_LIST:
    return payload.data
  default:
    return state
  }
}

const headerMenuItemReducer = (state = '', action) => {
  const { type, payload } = action

  switch (type) {
  case SET_HEADER_MENU_ITEM:
    return payload.item
  default:
    return state
  }
}

const siderMenuItemReducer = (state = 'asset-platforms', action) => {
  const { type, payload } = action

  switch (type) {
  case SET_SIDER_MENU_ITEM:
    return payload.item
  default:
    return state
  }
}

export const rootReducer = combineReducers({
  events: eventReducer,
  global: globalReducer,
  exchanges: exchangesReducer,
  exchange_rates: exchangeRatesReducer,
  coins: coinsReducer,
  coin_details: coinDetailsReducer,
  coin_market_details: coinMarketDetailsReducer,
  trending_coins: coinsTrendingReducer,
  header_selected: headerMenuItemReducer,
  sider_selected: siderMenuItemReducer,
  asset_platforms: assetPlatformsReducer
})
