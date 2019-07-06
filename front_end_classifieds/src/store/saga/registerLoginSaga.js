import * as actions from '../actions/'
import { put, call } from 'redux-saga/effects';
import registerAxios from '../../axios_routes/auth_routes';
import { push } from 'react-router-redux';

const postRegDataToAPI = (data) => {
  return registerAxios.post('/register', data).then(response => response.data)
}

export function* registrationSaga(action) {
  try {
    const { token } = yield call(postRegDataToAPI, action.payload)



    if (token) {
      yield put(push('/'));
      yield put(actions.userRegistrationSuccess())
    }
  } catch (error) {
    yield put(actions.userRegistrationFail())
  }
}