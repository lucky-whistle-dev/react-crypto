import coinGecko from '../API';

export const fetchEvents = () => async (dispatch, getState ) => {
    const response = await coinGecko.get('/events')
    dispatch({
        type: 'GET_EVENTS',
        payload: response.data
    })
}