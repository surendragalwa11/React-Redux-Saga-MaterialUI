import  rootSaga, {fetchAPI } from '../../saga/rootSaga';
import {call,put,takeEvery} from 'redux-saga/effects';
import {
    startFetchAPIRequest,
    startFetchAPISuccess,
  } 
from '../../actions/addEdit';



test('rootSaga : rootSaga must call watcher saga',()=>{
  const generator=rootSaga();
  const testValue=generator.next().value;
  expect(testValue).toEqual( takeEvery('FETCHED_ITEM',fetchAPI));
});

describe('fetchAPI ',()=>{
  const generator= fetchAPI();

  it('fetchAPI : should dispatch startFetchAPIRequest',()=>{
    const testValue=generator.next().value;
    expect(testValue).toEqual(put(startFetchAPIRequest()));
  });

  it('should call the API link ',()=>{
    const testValue=generator.next().value;
    expect(JSON.stringify(testValue)).toEqual(JSON.stringify(call(() => {
      return fetch('https://reqres.in/api/users')
             .then(res => res.json())
    })));
  });

  test('should call startFetchAPISuccess',()=>{
    const testValue=generator.next().value;
    expect(testValue).toEqual( put(startFetchAPISuccess()) );
  });
  
})