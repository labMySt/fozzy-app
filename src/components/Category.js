import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import { connect } from 'react-redux';


class Category extends Component {
  render() {
    const categoryLink = '/'+this.props.path;
    console.log(categoryLink);
    return (
      <li>
        <Link to = {categoryLink}>
          <div className="category-text"></div>
          <span>{this.props.category}</span>
        </Link>
      </li>
    );
  }
}


export default connect()(Category);
