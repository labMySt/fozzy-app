import React, {Component} from 'react';
import { connect } from 'react-redux';
import FilterItems from '../helpers/FilterItems'
import Product from './Product';
import Fetching from './Fetching';


class ProductsList extends Component {

  render() {
    let listItems = null;
    const products = this.props.products;
    console.log("producnts",products)
    if(products) {
      listItems = this.props.products.map((prod) => {
        return (
          <Product prod = {prod}/>
        )
      })
    }
    if(this.props.fetching)
     listItems = <Fetching />;

    return (
      <div>
      {listItems}
      </div>
   );
}
}

const mapStateToProductsListProps = (state) => {
  return {
    products: FilterItems(state),
    fetching: state.productsFetching
  }
};


export default connect(mapStateToProductsListProps)(ProductsList);
