import React, {Component} from 'react';
import './App.css';
import Main from './Main';
import Menu from './Menu';
import Fild from './Fild';

class App extends Component {
  render() {
    return (
    <div >
      <Menu/>
      <Main />
      <Fild />
    </div>
  );
  }
}

export default App;
