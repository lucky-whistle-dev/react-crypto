import { combineReducers } from 'redux';

const coinsReducer = (state=[], action) => {
    const { type, payload } = action;

    switch(type) {
        case 'GET_COINS':
            return payload
        default:
            return state
    }
}

export const fields = ["ath"
        ,"ath_change_percentage"
        ,"current_price"
        ,"high_24h"
        ,"low_24h"
        ,"market_cap"
        ,"price_change_percentage_7d_in_currency"
        ,"price_change_percentage_30d_in_currency"
        ,"total_volume"]

const compileMarketData = (marketData) => {
    
    let data = {}

    fields.map(field => {
        let entries = Object.entries(marketData[field])
        for (let i = 0; i < entries.length; i ++) {
            let key = entries[i][0]
            let value = entries[i][1]
            if (Object.keys(data).includes(key)){
                data[key] = { ...data[key], [field]: value, currency: key }
            } else {
                data[key] = { [field]: value, currency: key }
            }   
        }
    })

    return Object.values(data)

} 

const coinDetailsReducer = (state = {}, action) => {
    const { type, payload } = action;
    
    switch(type) {
        case 'GET_COIN_DETAILS':
            const market_data_processed = compileMarketData(payload.market_data)
            return {...payload, market_data_processed}
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
    coins: coinsReducer,
    coin_details: coinDetailsReducer
})