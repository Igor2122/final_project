import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import loginReducer from './store/reducers/loginReducer';
import registerReducer from './store/reducers/registerReducer';
import getProducts from './store/reducers/getAllProducts';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { watchLoginRegisterSaga, watchLoginSaga } from './store/saga/';




const rootReducer = combineReducers({
  loginReducer,
  registerReducer,
  getProducts,
});

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchLoginRegisterSaga);
sagaMiddleware.run(watchLoginSaga);


ReactDOM.render(
  <Provider store={store}><App /></Provider>, document.getElementById('root'));


serviceWorker.unregister();
