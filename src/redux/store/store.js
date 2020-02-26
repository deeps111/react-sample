import createSagaMiddleware from 'redux-saga'
import { root } from '../saga/root';
import combineReducer from '../reducers/combineReducer';
import { createStore ,applyMiddleware } from 'redux';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(combineReducer , applyMiddleware(sagaMiddleware));
sagaMiddleware.run(root);

export default store;
