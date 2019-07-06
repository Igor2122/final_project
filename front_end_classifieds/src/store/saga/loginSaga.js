import { put, call } from 'redux-saga/effects';
import * as actions from '../actions/'
import loginAxios from '../../axios_routes/auth_routes';

export function* loginSaga(action) {
  try {
    const { token } = yield call()

    yield put(actions.userRegistrationSuccess())

  } catch (error) {
    yield put(actions.userRegistrationFail())
  }
}