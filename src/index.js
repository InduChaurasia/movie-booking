import React from 'react';
import { render } from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import './index.css';
import App from './App';
import reducers from './reducers';
import rootSaga from './sagas';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers, 
  applyMiddleware(sagaMiddleware,logger)
  );
sagaMiddleware.run(rootSaga);

render(<Provider store={store}>
  <App/>
</Provider>, document.getElementById('root'));


