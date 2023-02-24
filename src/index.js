import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore , applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './redux/rootReducer';
import rootSaga from './redux/rootSaga';
import Loader from './common/loader';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './assets/scss/common.scss';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

const app = (
  <React.StrictMode>
    <Provider store={store}>
      <Loader />
      <App />
    </Provider>
  </React.StrictMode>
)

const root = ReactDOM.createRoot(document.getElementById('root'));        
root.render(app);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
