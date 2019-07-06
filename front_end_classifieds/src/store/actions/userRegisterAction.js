import * as actionTypes from './actionConst';

export const userRegistrationWatch = (payload) => {
  return {type: actionTypes.REGISTRATION_INIT, payload}
}

export const userRegistrationStart = () => {
  return {type: actionTypes.REGISTRATION_START}
}
export const userRegistrationPost = () => {
  return {type: actionTypes.REGISTRATION_POST}
}
export const userRegistrationSuccess = () => {
  return {type: actionTypes.REGISTRATION_SUCCESS}
}
export const userRegistrationFail = () => {
  return {type: actionTypes.REGISTRATION_FAIL}
}




