import {  put, takeLatest } from 'redux-saga/effects'
import * as actionTypes from './constants'
import { setLoading } from '../common/actions';

function* getMovieList() {
  try {
    setLoading(true);
    let response = yield fetch('https://swapi.dev/api/films/?format=json');
    if (response.status === 200){
        response = yield response.json();
        setLoading(false);
        yield put({ type: actionTypes.GET_MOVIE_LIST_SUCCESS, payload: response });
    }
  } catch(e) {
    yield put({ type: actionTypes.GET_MOVIE_LIST_FAILURE, payload: e.message });
    console.log('zzr error occured', e);
  }
}

function* authWatcher() {
  yield takeLatest(actionTypes.GET_MOVIE_LIST, getMovieList);
}

export default authWatcher;