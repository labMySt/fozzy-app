import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import Groups from './Groups';

class Routers extends Component {

  render() {
    return (
      <Switch>
        <Route  path='/:id' component={Groups}/>
        <Redirect from="/" exact to="/confectionary" />
      </Switch>
    )
  }
}

export default Routers;
