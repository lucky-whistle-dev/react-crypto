import coinGecko from '../API'
export const GET_COIN_LIST = 'GET_COIN_LIST'
export const GET_COIN_DETAILS = 'GET_COIN_DETAILS'
export const GET_COIN_CHART = 'GET_COIN_CHART'
export const GET_EVENT_LIST = 'GET_EVENT_LIST'
export const GET_EXCHANGE_RATES = 'GET_EXCHANGE_RATES'
export const GET_EXCHANGES_LIST = 'GET_EXCHANGES_LIST'
export const GET_GLOBAL = 'GET_GLOBAL'
export const SET_HEADER_MENU_ITEM = 'SET_HEADER_MENU_ITEM'
export const SET_SIDER_MENU_ITEM = 'SET_SIDER_MENU_ITEM'
export const GET_ASSET_PLATFORMS = 'GET_ASSET_PLATFORMS'
export const GET_TRENDING_COINS = 'GET_TRENDING_COINS'

export const fetchAssetPlatforms = () => async (dispatch, getState) => {
  const response = await coinGecko.get('/asset_platforms')
  dispatch({
    type: GET_ASSET_PLATFORMS,
    payload: response.data
  })
}

export const fetchTrendingCoins = () => async (dispatch, getState) => {
  const response = await coinGecko.get('/search/trending')
  dispatch({
    type: GET_TRENDING_COINS,
    payload: response.data
  })
}

export const fetchCoins = () => async (dispatch, getState) => {
  const response = await coinGecko.get('/coins/list')
  dispatch({
    type: GET_COIN_LIST,
    payload: response.data
  })
}

export const fetchCoinDetails = (coinId) => async (dispatch, getState) => {
  const response = await coinGecko.get(`coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=true&sparkline=false&developer_data=true`)
  dispatch({
    type: GET_COIN_DETAILS,
    payload: response.data
  })
}

export const fetchCoinMarketDetails = (coinId) => async (dispatch, getState) => {
  const response = await coinGecko.get(`coins/${coinId}/market_chart?vs_currency=usd&days=7`)
  dispatch({
    type: GET_COIN_CHART,
    payload: response.data
  })
}

export const fetchEvents = () => async (dispatch, getState) => {
  const response = await coinGecko.get('/events')
  dispatch({
    type: GET_EVENT_LIST,
    payload: response.data
  })
}

export const fetchExchangeRates = () => async (dispatch, getState) => {
  const response = await coinGecko.get('/exchange_rates')
  dispatch({
    type: GET_EXCHANGE_RATES,
    payload: response.data
  })
}

export const fetchExchanges = () => async (dispatch, getState) => {
  const response = await coinGecko.get('/exchanges')
  dispatch({
    type: GET_EXCHANGES_LIST,
    payload: response.data
  })
}

export const fetchGlobal = () => async (dispatch, getState) => {
  const response = await coinGecko.get('/global')
  dispatch({
    type: GET_GLOBAL,
    payload: response.data
  })
}

export const setHeaderMenuItem = (item) => {
  return {
    type: SET_HEADER_MENU_ITEM,
    payload: { item }
  }
}

export const setSiderMenuItem = (item) => {
  return {
    type: SET_SIDER_MENU_ITEM,
    payload: { item }
  }
}
