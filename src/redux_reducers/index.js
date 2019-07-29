import { combineReducers } from 'redux';
import { market_processed_table_keys } from '../constants';
import {GET_COIN_LIST, 
        GET_COIN_DETAILS, 
        GET_COIN_CHART,
        GET_EVENT_LIST,
        GET_EXCHANGES_LIST,
        GET_EXCHANGE_RATES,
        GET_GLOBAL,
        GET_STATUS_UPDATES,
        SET_HEADER_MENU_ITEM,
        SET_SIDER_MENU_ITEM } from '../redux_actions';


const coinsReducer = (state=[], action) => {
    const { type, payload } = action;

    switch(type) {
        case GET_COIN_LIST:
            return payload
        default:
            return state
    }
}



const compileMarketData = (marketData) => {

    let data = {}

    for (let market_index = 0; market_index < market_processed_table_keys.length; market_index++) {
        let field = market_processed_table_keys[market_index]
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
    }

    return Object.values(data)

} 

const coinDetailsReducer = (state = {}, action) => {
    const { type, payload } = action;
    
    switch(type) {
        case GET_COIN_DETAILS:
            const market_data_processed = compileMarketData(payload.market_data)
            return {...payload, market_data_processed}
        default:
            return state
    }

}

const coinMarketDetailsReducer = (state={}, action) => {
    const { type, payload } = action;

    switch(type) {
        case GET_COIN_CHART:
            return payload;
        default:
            return state;
    }
}

const globalReducer = (state={}, action) => {
    const { type, payload } = action;

    switch(type) {
        case GET_GLOBAL:
            return payload.data
        default:
            return state
    }
}

const exchangesReducer = (state=[], action) => {
    const { type, payload } = action;

    switch(type) {
        case GET_EXCHANGES_LIST:
            return payload
        default:
            return state
    }
}

const exchangeRatesReducer = (state=[], action) => {
    const { type, payload } = action;

    switch(type) {
        case GET_EXCHANGE_RATES:
            let rates = Object.values(payload.rates)
            return rates
        default:
            return state
    }
}


const eventReducer = (state=[], action) => {
    const { type, payload } = action;
    
    switch(type) {
        case GET_EVENT_LIST:
            return payload.data
        default:
            return state
    }
}

const statusUpdatesReducer = (state=[], action) => {
    const { type, payload } = action;

    switch(type) {
        case GET_STATUS_UPDATES:
            return payload.status_updates
        default: 
            return state
    }
}

const headerMenuItemReducer = (state='', action) => {
    const { type, payload } = action;
    
    switch(type) {
        case SET_HEADER_MENU_ITEM:
            return payload.item; 
        default:
            return state;
    }
}

const siderMenuItemReducer = (state='status-list', action) => {
    const { type, payload } = action;
    
    switch(type) {
        case SET_SIDER_MENU_ITEM:
            return payload.item; 
        default:
            return state;
    }
}


export const rootReducer = combineReducers({
    events: eventReducer,
    status_updates: statusUpdatesReducer,
    global: globalReducer,
    exchanges: exchangesReducer,
    exchange_rates: exchangeRatesReducer,
    coins: coinsReducer,
    coin_details: coinDetailsReducer,
    coin_market_details: coinMarketDetailsReducer,
    header_selected: headerMenuItemReducer,
    sider_selected: siderMenuItemReducer
})