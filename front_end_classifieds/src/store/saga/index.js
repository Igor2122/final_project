import { takeEvery } from "redux-saga/effects";
import * as actionTypes from '../actions/actionConst';
import { registrationSaga } from "./registerLoginSaga";
import { loginSaga } from "./loginSaga";


export function* watchLoginRegisterSaga () {
  console.log('saga running')
  yield takeEvery(actionTypes.REGISTRATION_INIT, registrationSaga)
}

export function* watchLoginSaga () {
  console.log('saga running')
  yield takeEvery(actionTypes.LOGIN_POST, loginSaga)
}