import { put, all, takeEvery } from 'redux-saga/effects';

const delay = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), timeout);
  });
};
export function* add() {
  console.log('add');
  yield put({ type: 'ADD' });
}
export function* addAsync() {
  console.log('addAsync');
  yield delay(1000);
  yield put({ type: 'ADD' });
}

function* watchAdd() {
  yield takeEvery('add', add);
}
function* watchAsync() {
  yield takeEvery('addAsync', addAsync);
}
export default function* rootSaga() {
  yield all([ watchAdd(), watchAsync()]);
}
