import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import 'antd/dist/antd.css';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import reportWebVitals from './reportWebVitals';

const rootReducer = combineReducers({
  ctrCombine:counterReducer,
  resCombine:resultReducer
});

const logger = store => {
  return next =>{
    return action =>{
      console.log("[Middleware] Dispatching", action);
      const result = next(action);
      console.log("[Moddleware] next state", store.getState());
      return result;
    }
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger,thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
