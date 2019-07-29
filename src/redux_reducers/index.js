import { combineReducers } from 'redux';

const coinsReducer = (state=[], action) => {
    const { type, payload } = action;

    switch(type) {
        case 'GET_COINS':
            return payload.data
        default:
            return state
    }
}

const globalReducer = (state={}, action) => {
    const { type, payload } = action;

    switch(type) {
        case 'GET_GLOBAL':
            return payload.data
        default:
            return state
    }
}

const exchangesReducer = (state=[], action) => {
    const { type, payload } = action;

    switch(type) {
        case 'GET_EXCHANGES':
            return payload
        default:
            return state
    }
}

const exchangeRatesReducer = (state=[], action) => {
    const { type, payload } = action;

    switch(type) {
        case 'GET_EXCHANGE_RATES':
            let rates = Object.values(payload.rates)
            return rates
        default:
            return state
    }
}


const eventReducer = (state=[], action) => {
    const { type, payload } = action;
    
    switch(type) {
        case 'GET_EVENTS':
            return payload.data
        default:
            return state
    }
}

const statusUpdatesReducer = (state=[], action) => {
    const { type, payload } = action;

    switch(type) {
        case 'GET_STATUS_UPDATES':
            console.log(payload)
            return payload.status_updates
        default: 
            return state
    }
}

export const rootReducer = combineReducers({
    events: eventReducer,
    status_updates: statusUpdatesReducer,
    global: globalReducer,
    exchanges: exchangesReducer,
    exchange_rates: exchangeRatesReducer,
    coins: coinsReducer
})