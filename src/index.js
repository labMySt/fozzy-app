import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import './index.css';
import App from './components/App';
import Routers from './components/Routers';
import registerServiceWorker from './registerServiceWorker';
import reducer from './redusers';


const middleware = applyMiddleware(thunk, createLogger());
const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store = {store}>
    <BrowserRouter>
     <App>
      <Routers/>
     </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
