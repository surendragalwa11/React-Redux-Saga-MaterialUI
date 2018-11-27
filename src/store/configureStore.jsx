import {createStore,applyMiddleware,compose} from 'redux';
import itemReducer from '../reducers/itemReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/rootSaga';


//const enhancer=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

    

const configureStore=()=>{
    
    const sagaMiddleware = createSagaMiddleware();
    console.log("configureStore called,sagaMiddleware created");
    const enhancer = composeEnhancers( applyMiddleware(sagaMiddleware));  
    console.log("saga middleware applied");
    const store = createStore( itemReducer , enhancer );
    console.log("redux store created,saga mlw applied");
    console.log("calling watcher saga");
    return { ...store,
             runSaga:sagaMiddleware.run(rootSaga)
    };
};

export default configureStore;
