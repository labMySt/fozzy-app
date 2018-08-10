import React, {Component} from 'react';
import {connect} from 'react-redux';
import ing from "../images/beer.png"

class Product extends Component {
  render() {
    //console.log("../images/beer.png" === this.props.prod.image);      => thrue
    //var image = require(this.props.prod.image)   -                    does`t work!!! why ?
     var image = require("../images/beer.png")
    return (

      <div className="product">
      <div className="product-image">
        <img src={image}></img>
      </div>

      <div className="product-discript">
        <span>{this.props.prod.name}</span>
        <br/>
        <span>{this.props.prod.discription}</span>
      </div>
      <button className="product-but">ГОЛОСУВАТИ</button>
    </div>);
  }
}

const mapStateToProductProps = (state) => {

  const {filters, products} = state;
  return {}
};

export default connect(mapStateToProductProps)(Product);
