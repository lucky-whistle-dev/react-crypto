import coinGecko from '../API';

export const fetchEvents = () => async (dispatch, getState ) => {
    const response = await coinGecko.get('/events')
    dispatch({
        type: 'GET_EVENTS',
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
    const response = await coinGecko.get('/gloabl')
    dispatch({
        type: 'GET_GLOBAL',
        payload: response.data
    })
}