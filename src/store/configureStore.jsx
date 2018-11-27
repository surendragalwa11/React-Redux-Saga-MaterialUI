import {createStore,applyMiddleware,compose} from 'redux';
import itemReducer from '../reducers/itemReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/rootSaga';

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

    

const configureStore=()=>{
    
    const sagaMiddleware = createSagaMiddleware();
    const enhancer = composeEnhancers( applyMiddleware(sagaMiddleware));
    const store = createStore( itemReducer , enhancer );
    return { ...store,
             runSaga:sagaMiddleware.run(rootSaga)
    };
};

export default configureStore;
