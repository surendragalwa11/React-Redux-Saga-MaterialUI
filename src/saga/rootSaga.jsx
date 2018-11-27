import {call,put,takeEvery} from 'redux-saga/effects';
import { startFetchAPIRequest, startFetchAPISuccess, startFetchAPIFailure } from '../actions/addEdit';

export default function* rootSaga()
{
    yield takeEvery('FETCHED_ITEM', fetchAPI);
}
  
function* fetchAPI()
{
    try
    {
        yield put(startFetchAPIRequest());
        const result = yield call(() => {
            return fetch('https://reqres.in/api/users')
                   .then(res => res.json())
        });
        yield put(startFetchAPISuccess(result));
    } 
    catch (error)
    {
        yield put(startFetchAPIFailure());
    }
}
