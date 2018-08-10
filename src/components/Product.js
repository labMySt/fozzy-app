import React, {Component} from 'react';

class Product extends Component {
  render() {
    //console.log("../images/beer.png" === this.props.prod.image);      => thrue
    //var image = require(this.props.prod.image)   -                    does`t work!!! why ?
     var image = require("../images/beer.png")
    return (

      <div className="product">
      <div className="product-image">
        <img src={image} alt = {this.props.prod.name}></img>
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


export default Product;
