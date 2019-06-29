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
    case actionTypes.REGISTRATION_START:
      return state.set('registrationStarted', true).set('userRegistrationInfo', action.payload);

    default:
      return state;
  }
}

export default reducer
