import { all, takeLatest } from 'redux-saga/effects';

//import actionTypes from './redux/action/actionTypes';
import userSaga from './userSaga';
import * as actionTypes from '../action/actionTypes'

export function* root() {
    //console.log(userAction);
    yield all(       
        [yield takeLatest(actionTypes.USER.ACTION,userSaga)]
        )
}