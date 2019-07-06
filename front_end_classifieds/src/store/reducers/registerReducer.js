import fetchLoginRegister from '../../axios_routes/auth_routes';
import { Map } from 'immutable'
import * as actionTypes from '../actions/actionConst'

const initialState = Map({
  registrationStarted: false,
  userLoggedIn: false,
  userRegistrationInfo: {}
})

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.REGISTRATION_INIT:
      {
        return state.set('registrationStarted', true).set('userRegistrationInfo', action.payload);
      }

    case actionTypes.REGISTRATION_SUCCESS:
      {
        return state.set('registrationStarted', true).set('userLoggedIn', true)
      }

    case actionTypes.REGISTRATION_FAIL:
      {
        return state.set('registrationStarted', false).set('userLoggedIn', false)
      }
    default:
      return state;
  }
}

export default reducer
