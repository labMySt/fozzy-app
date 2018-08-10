import React, {Component} from 'react';
import { connect } from 'react-redux';


class Product extends Component {
  render() {
    return (
      <div className="product">
        <div className="product-image"></div>
        <div className="product-discript">
        <span>{this.props.prod.name}</span>
        <br/>
        <span>{this.props.prod.discription}</span>
        </div>
        <button className="product-but">ГОЛОСУВАТИ</button>
      </div>
   );
  }
}

const mapStateToProductProps = (state) => {

  const { filters, products } = state;
  return{}
};


export default connect(mapStateToProductProps)(Product);
