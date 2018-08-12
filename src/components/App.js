import React, {Component} from 'react';
import Menu from './Menu';


class App extends Component {

  render() {

    return (
    <div className = "app">
      <Menu/>
      <div id = "groups">
          {this.props.children}
      </div>
    </div>
  );
  }
};

export default App;
