import { takeEvery } from "redux-saga/effects";
import * as actionTypes from '../actions/actionConst';
import { registrationSaga } from "./registerLoginSaga";

export function* watchLoginRegisterSaga () {
  console.log('saga running')
  yield takeEvery(actionTypes.REGISTRATION_INIT, registrationSaga)
}