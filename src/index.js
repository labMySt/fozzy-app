import React from 'react';
import ReactDOM from 'react-dom';
import {Redirect, Route, Switch, BrowserRouter} from 'react-router-dom';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import './index.css';
import App from './components/App';
import Groups from './components/Groups';
import registerServiceWorker from './registerServiceWorker';
import reducer from './redusers';

const middleware = applyMiddleware(thunk, createLogger());
const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store = {store}>
    <BrowserRouter>
     <App>
     <Switch>
       <Route  path='/:id' component={Groups}/>
       <Redirect from="/" exact to="/confectionary" />
     </Switch>
     </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
