import { call, put } from "redux-saga/effects";
import userService from "../service/service";
import * as actionTypes from "../action/actionTypes";

function* userSaga() {
  try {
    const users = userService();
    //const data =  yield call(userService);
    yield put({ type: actionTypes.USER.SUCCESS, users });
  } catch (error) {
    yield put({ type: actionTypes.USER.ERROR, error });
  }
}

export default userSaga;
