import React,{Component} from 'react';
import ReactDOM from 'react-dom'
import {Provider, connect}from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware,{takeEvery} from 'redux-saga';
import {put, call}from 'redux-saga/effects' ;

// Reducer
const initialState = {
  url: '',
  loading: false,
  error: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUESTED_DOG':
      return {
        url: '',
        loading: true,
        error: false,
      };
    case 'REQUESTED_DOG_SUCCEEDED':
      return {
        url: action.url,
        loading: false,
        error: false,
      };
    case 'REQUESTED_DOG_FAILED':
      return {
        url: '',
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

// Action Creators
const requestDog = () => {
  return { type: 'REQUESTED_DOG' }
};

const requestDogSuccess = (result) => {
  return { type: 'REQUESTED_DOG_SUCCEEDED', url: result.message }
};

const requestDogError = () => {
  return { type: 'REQUESTED_DOG_FAILED' }
};

const fetchDog = () => {
  return { type: 'FETCHED_DOG' }
};

// Sagas
function* watchFetchDog() {
  yield takeEvery('FETCHED_DOG', fetchDogAsync);
}

function* fetchDogAsync() {
  try {
    yield put(requestDog());
    const result = yield call(() => {
      return fetch('https://dog.ceo/api/breeds/image/random')
              .then(res => res.json())
      }
    );
    yield put(requestDogSuccess(result));
  } catch (error) {
    yield put(requestDogError());
  }
}

// Component
class App extends React.Component {
  render () {
    return (
      <div>
        <button onClick={() => this.props.dispatch(fetchDog())}>Show Dog</button>
          {this.props.loading 
            ? <p>Loading...</p> 
            : this.props.error
                ? <p>Error, try again</p>
                : <p><img src={this.props.url}/></p>}
      </div>
    )
  }
}

// Store
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(watchFetchDog);

const ConnectedApp = connect((state) => {
  console.log(state);
  return state;
})(App);

// Container component
ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root')
);