import { createStore, applyMiddleware } from 'redux';
//import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import rootReducer from './rootReducer'
import { save, load } from "redux-localstorage-simple"

//const store = createStore(rootReducer, applyMiddleware(logger, save))

const createStoreWithMiddleware = applyMiddleware(
        logger, 
        save({ ignoreStates: ["gameState"]})
    )(createStore);

const store = createStoreWithMiddleware(
        rootReducer, 
        load());

export default store;