import React, {Component} from 'react';
import { connect } from 'react-redux';
import Category from './Category';
import Fetching from './Fetching';
import * as actions from '../actions';

class Menu extends Component {
  componentWillMount() {

        this.props.dispatch(actions.getCategories());
  }
  render() {

    const categories = this.props.categories;
    let listItems = null;
    if(categories) {
      listItems = [];
      for(let i in categories) {
        listItems.push(<Category category = {categories[i].name} path = {categories[i].path}/>)
      }
    }
    if(this.props.fetching) {
      listItems =  <Fetching />
    }


    return (
     <nav id="categories">
      <ul>
       {listItems}
      </ul>

    </nav>);
  }
}
const mapStateToMenuProps = (state) => {
  return {
    categories: state.categories,
    fetching: state.categoriesFetching
  }
};
export default connect(mapStateToMenuProps)(Menu);
