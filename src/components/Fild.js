import React, {Component} from 'react';
import { connect } from 'react-redux';
import FildName from './FildName';
import ProductsList from './ProductsList';
import * as actions from '../actions';
import GenNaming from '../helpers/GenNaming';
import Parser from '../helpers/Parser'

class Fild extends Component {
  componentWillMount() {

    const id = this.props.match.params.id;
    this.props.dispatch(actions.getProducts(id));
  }

  render() {

    const url =  this.props.match.url;
    let naming = "";
    if(this.props.categories) {
      naming = GenNaming(Parser(url), this.props.categories);
    }

    this.props.dispatch(actions.setVisidilityFilter(Parser(url)));


    return (
    <div id = "fild">
      <FildName naming = {naming}/>
      <ProductsList/>
    </div>
    );
  }
}

const mapStateToFildProps = (state) => {
  return {
    categories: state.categories
  }
};
export default connect(mapStateToFildProps)(Fild);
