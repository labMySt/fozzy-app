import React, {Component} from 'react';


class Category extends Component {
  render() {
    return (
      <div className="card" style={{width: '18rem'}}>
        <img className="card-img-top" src=".../100px180/?text=Image cap" alt="Card image cap" />
        <div className="card-body">
          <p className="card-text">{this.props.name}</p>
        </div>
      </div>
    );
  }
}

export default Category;
