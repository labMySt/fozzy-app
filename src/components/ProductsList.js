import React, {Component} from 'react';
import { connect } from 'react-redux';
import FilterItems from '../helpers/FilterItems'
import Product from './Product';


class ProductsList extends Component {
  render() {
    const listItems = this.props.products.map((prod) => {
      return (
        <Product prod = {prod}/>
      )
    })

    return (
      <div>
       {listItems}
      </div>
   );
}
}

const mapStateToProductsListProps = (state) => {
  return {
    products: FilterItems(state)
  }
};


export default connect(mapStateToProductsListProps)(ProductsList);
