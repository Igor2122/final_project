import * as actions from '../actions/'
import {put, call} from 'redux-saga/effects';
import registerAxios from '../../axios_routes/auth_routes';

const postRegDataToAPI = (data) => {
    return registerAxios.post('/register', data).then(response => response.data)
}

export function* registrationSaga(action) {
  try {
    const {token} = yield call(postRegDataToAPI, action.payload)
    console.log(token)


    yield put(actions.userRegistrationStart())
    yield put(actions.userRegistrationPost())
  } catch (error) {
    
  }
}