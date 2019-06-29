import { takeEvery } from "redux-saga/effects";
import * as actionTypes from '../actions/actionConst';
import {userRegistrationWatch} from '../actions/userRegisterAction'



export function* watchLoginRegisterSaga () {
  console.log('saga running')
  yield takeEvery(actionTypes.REGISTRATION_WATCH, userRegistrationWatch)
}