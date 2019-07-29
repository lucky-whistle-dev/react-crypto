import { combineReducers } from 'redux';


const eventReducer = (state=[], action) => {
    const { type, payload } = action;
    
    switch(type) {
        case 'GET_EVENTS':
            return payload.data
        default:
            return state
    }
}


export const rootReducer = combineReducers({
    events: eventReducer
})