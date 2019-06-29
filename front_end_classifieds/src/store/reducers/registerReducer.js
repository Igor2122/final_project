import fetchLoginRegister from '../../axios_routes/auth_routes';


const initialState = {
  userLoggedIn: false,
  userRegistrationInfo: {
    name: null,
    email: null,
    password: null,
    password_confirmation: null
  }
}

const reducer = (state = initialState, action) => {
  
  // .post('/register', {

  return state;
}

export default reducer
