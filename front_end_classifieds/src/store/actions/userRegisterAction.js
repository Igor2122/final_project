import * as actionTypes from './actionConst';

export const userRegistrationWatch = () => {
  return {type: actionTypes.REGISTRATION_WATCH}
}

export const userRegistrationStart = (payload) => {
  console.log(payload)
  return {type: actionTypes.REGISTRATION_START, payload}
}


