import { all, call } from 'redux-saga/effects';
import home from './home/saga';

export default function* rootSaga() {
    return yield all([
      call(home)
    ]);
}