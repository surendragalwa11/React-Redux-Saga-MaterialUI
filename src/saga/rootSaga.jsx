import {call,put,takeEvery} from 'redux-saga/effects';
//import {takeEvery} from 'redux-saga';
import { startFetchAPIRequest, startFetchAPISuccess, startFetchAPIFailure } from '../actions/addEdit';

export default function* rootSaga()
{
    console.log("Watcher saga is running");
    yield takeEvery('FETCHED_ITEM', fetchAPI);
}
  
function* fetchAPI()
{
    console.log("controls came to fetchAPI saga from watcher saga");  
    try
    {
        console.log("in try block of root saga");
        yield put(startFetchAPIRequest());
        const result = yield call(() => {
            return fetch('https://reqres.in/api/users')
                   .then(res => res.json())
        });
        console.log(result);
        yield put(startFetchAPISuccess(result));
              
        console.log(result);
    } 
    catch (error)
    {
        console.log("In catch/error block of root saga");
        yield put(startFetchAPIFailure());
    }
}