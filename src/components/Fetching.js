import React, {Component} from 'react';

class Fetching extends Component {

  render() {
    var fetching = require("../images/fetching.gif")
    return (
      <div id = "fatching">
        <img src={fetching} alt = "fetching"></img>
     </div>
  )
 }
}

export default Fetching;
