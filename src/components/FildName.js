import React, {Component} from 'react';


class FildName extends Component {
  render() {

    return (
    <div className = "fild-name" >
      <div className="fild-name-main">
        		&mdash;&mdash;&mdash;&emsp;{this.props.naming}&emsp;&mdash;&mdash;&mdash;
      </div>
      <div className="fild-name-discript">
        Проголосувавши ви отримаєте додаткову знижку -20%
      </div>
    </div>
   );
  }
}

export default FildName;
