import coinGecko from '../API';

export const fetchEvents = () => async (dispatch, getState ) => {
    const response = await coinGecko.get('/events')
    dispatch({
        type: 'GET_EVENTS',
        payload: response.data
    })
}

export const fetchExchangeRates = () => async (dispatch, getState ) => {
    const response = await coinGecko.get('/exchange_rates')
    dispatch({
        type: 'GET_EXCHANGE_RATES',
        payload: response.data
    })
}

export const fetchExchanges = () => async (dispatch, getState ) => {
    const response = await coinGecko.get('/exchanges')
    dispatch({
        type: 'GET_EXCHANGES',
        payload: response.data
    })
}

export const fetchStatusUpdates = () => async (dispatch, getState ) => {
    const response = await coinGecko.get('/status_updates')
    dispatch({
        type: 'GET_STATUS_UPDATES',
        payload: response.data
    })
}

export const fetchGlobal = () => async (dispatch, getState) => {
    const response = await coinGecko.get('/global')
    dispatch({
        type: 'GET_GLOBAL',
        payload: response.data
    })
}