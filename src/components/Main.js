import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Groups from './Groups';

class Main extends Component {
  render() {
    return (
      <div className = "routes">
        <Switch>
          <Route exact="exact" path='/' component={Groups}/>
        </Switch>
      </div>
    );
  }
}

export default Main;
