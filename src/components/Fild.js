import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Groups from './Groups';
import Product from './Product';
import FildName from './FildName';
import ProductsList from './ProductsList';
import * as actions from '../actions';
import GenNaming from '../helpers/GenNaming';

class Fild extends Component {

  render() {

    const {group, subgroup} =  this.props.match.params;
    const naming = GenNaming(group, subgroup);
    if(subgroup){
      this.props.dispatch(actions.setVisidilityFilter(subgroup));
      console.log("sub", group);
    } else {
      this.props.dispatch(actions.setVisidilityFilter(group));
      console.log(group);
    }

    return (
    <div id = "fild">
      <FildName naming = {naming}/>
      <ProductsList/>
    </div>
    );
  }
}

export default connect()(Fild);
