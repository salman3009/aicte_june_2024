import {takeEvery,put,call} from 'redux-saga/effects';
import {fetchDataResponse} from '../actions';

const fetchAPI = async()=>{
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const data = await response.json();
      return data;
}

function* fetchData(){
    const data = yield call(fetchAPI);
    yield put(fetchDataResponse(data));
}

export function* watchFetchData(){
    yield takeEvery('FETCH_DATA_REQUEST',fetchData);
}