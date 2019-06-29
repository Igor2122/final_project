import * as actionTypes from './actionConst';

export const userRegistrationWatch = (payload) => {
  console.log(payload)
  return {type: actionTypes.REGISTRATION_WATCH, payload}
}

export const userRegistrationStart = () => {
  console.log('user reg start')
  return {type: actionTypes.REGISTRATION_START}
}
export const userRegistrationPost = () => {
  console.log('post')
  return {type: actionTypes.REGISTRATION_POST}
}


