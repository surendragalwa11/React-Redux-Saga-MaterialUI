import configureMockStore from 'redux-mock-store';
import { 
  deleteItem,
  fetchAPIError,
  fetchItem,
  startFetchAPISuccess,
  startFetchAPIRequest,
  addItem,
  editItem 
  }
from '../../actions/addEdit';

import items from '../fixtures';

const middlewares=[];
const createMockStore=configureMockStore(middlewares);

beforeEach(()=>{
  jest.setTimeout(20000);
});

test('should return deleteItem action',()=>{
  const action=deleteItem(1);
  expect(action).toEqual({
    type:'DELETE_ITEM',
    id:1
  });
});

test('should return fetch api error action',()=>{
  const action=fetchAPIError();
  expect(action).toEqual({
    type:'API_FETCH_FAILURE'
  });
});

test('should return fetchItem action type',()=>{
  const action=fetchItem();
  expect(action).toEqual({
    type:'FETCHED_ITEM'
  });
});

test('should return startFetchAPISuccess action type',()=>{
  const action=startFetchAPISuccess(items);
  expect(action).toEqual({
    type:'API_FETCH_SUCCESS',
    result:items
  });
});

test('should return startFetchAPIRequest action type',()=>{
  const action=startFetchAPIRequest();
  expect(action).toEqual({
    type:'API_FETCH_REQUEST'
  });
});

test('should return addItem action type',()=>{
  const action=addItem(items[0]);
  expect(action).toEqual({
    type:'ADD_ITEM',
    item:items[0]
  });
});

test('should return editItem action type',()=>{
  const action=editItem(1,{first_name:'James Carlos'});
  expect(action).toEqual({
    type:'EDIT_ITEM',
    id:1,
    updates:{first_name:'James Carlos'}
  });
});

//test for startDeleteItem & startAPIFailure
test('startDeleteItem: should dispatch deleteItem action',()=>{
  const initialState={};
  const store=createMockStore(initialState);
  store.dispatch(deleteItem(2));
  const actions=store.getActions();
  expect(actions).toEqual([{
    type:'DELETE_ITEM',
    id:2
  }]);
});


test('startFetchfaiure: should dispatch fetchAPIFailure action',()=>{
  const initialState={};
  const store=createMockStore(initialState);
  store.dispatch(fetchAPIError());
  const action=store.getActions();
  expect(action).toEqual([{
    type:'API_FETCH_FAILURE'
  }]);
});