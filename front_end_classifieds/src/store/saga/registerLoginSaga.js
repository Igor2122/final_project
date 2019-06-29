import * as actions from '../actions/'
import {put, call} from 'redux-saga/effects';

export function* registrationSaga(action) {
  try {
    console.log('hello')
    console.log(action)
    yield put(actions.userRegistrationStart())
    yield put(actions.userRegistrationPost())
  } catch (error) {
    
  }
}