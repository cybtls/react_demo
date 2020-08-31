import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import countReducer from './demo08/store'
import todoListReducer from './demo09/store'
// combineReducers时用来连接多个reducer的  我们同时可以起别名({ a:countReducer })这样写
const allReducer = combineReducers({ countReducer, todoListReducer })

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);

const store = createStore(allReducer, enhancer);

// const store = createStore(allReducer, applyMiddleware(thunk));
export default store