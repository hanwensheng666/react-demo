import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import aSaga from './sagas/a';
import aReducer from './reducers/a';

const sagaMiddleware = createSagaMiddleware(aSaga);

const store = createStore(
  combineReducers({
    a: aReducer,
  }),
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(aSaga);
export default store;
