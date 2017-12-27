import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';

import rootSaga from './rootSagas';

const LOCAL_STORAGE_KEY = 'redux-store';

// ------------------------------------------------------
// * Create middlewares for store
// ------------------------------------------------------

const logger = store => next => action => {
    let result;
    console.groupCollapsed("dispatching", action.type);
    console.log('prev state: ', store.getState());
    console.log('action', action);
    result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
    return result;
};

const saver = store => next => action => {
    let result = next(action);
    // localStorage[LOCAL_STORAGE_KEY] = JSON.stringify(store.getState())
    return result;
};

const saga = createSagaMiddleware();

const storeFactory = (initialState = {}) => { 
    let store = applyMiddleware(logger, saver, saga)(createStore)(
        rootReducer,
        (localStorage[LOCAL_STORAGE_KEY]) ?
            JSON.parse(localStorage[LOCAL_STORAGE_KEY]) :
            {}
    );

    saga.run(rootSaga);

    return store;
};
    
export default storeFactory;