import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
// [NOTE] import antd css so that it becomes available for all components in App
import 'antd/dist/antd.css';
// [NOTE] Wrap all components in a Router
import { HashRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

const middlewares = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const rootReducer = () => {
    return {
        test: [1,2,3,4,5]
    }
}
const store = createStore(rootReducer,
    middlewares)


ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>, 
    document.getElementById('root'))