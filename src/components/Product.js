import React, {Component} from 'react';
import { connect } from 'react-redux';

class Product extends Component {
  render() {
    let warning = null
    if(this.props.alcogol)
    warning =   <img className = "product-image-warning"
                  src= "https://s.0332.ua/section/newsInternalIcon/upload/images/news/icon/000/016/727/Samolik_pred5a1fcd8ebdf73.jpg"
                  alt = "WARNING" >
                </img>

    return (

      <div className="product">
      <div className="product-container">
        <img className = "product-image" src={this.props.prod.image} alt = {this.props.prod.name}></img>
      </div>
{warning}
      <div className="product-discript">
        <span>{this.props.prod.name}</span>
        <br/>
        <span>{this.props.prod.discription}</span>
      </div>
      <button className="product-but">ГОЛОСУВАТИ</button>
    </div>);
  }
}

function IsAlcogol(filter) {
  if(filter ==="alcogol") return true;
  return false;
}

/*
   just verify if current products group is 'alcogol'
   to put warning image
*/

const mapStateToProductProps = (state) => {
  return {
    alcogol: IsAlcogol(state.filters[0]),
  }
};

export default connect(mapStateToProductProps)(Product);
