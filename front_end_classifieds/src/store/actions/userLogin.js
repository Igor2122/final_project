import * as actionTypes from './actionConst'



export const loginPost = (payload) => {
  console.log(payload)
  return {type: actionTypes.LOGIN_POST, payload}
}


export const loginSuccess = () => {
  return {type: actionTypes.LOGIN_SUCCESS}
}

export const loginFail = () => {
  return {type: actionTypes.LOGIN_FAIL}
}
