import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Menu extends Component {
  render() {

    return (
     <nav id="categories">
      <ul>
        <li>
          <Link to = "#">
            <div className="category-text"></div>
            <span>Кондитерські вироби</span>
          </Link>
        </li>
        <li>
          <Link to = "#">
            <div className="category-text"></div>
            <div>Для дітей</div>
          </Link>
        </li>
        <li>
          <Link to = "#">
            <div className="category-text"></div>
            <span>Соняшникова олія</span>
          </Link>
        </li>
        <li>
          <Link to = "#">
            <div className="category-text"></div>
            <span>Алкоголь</span>
          </Link>
        </li>
        <li>
          <Link to = "#">
            <div className="category-text"></div>
            <span>Морозиво</span>
          </Link>
        </li>
        <li>
          <Link to = "#">
            <div className="category-text"></div>
            <span>Кава</span>
          </Link>
        </li>
      </ul>
    </nav>);
  }
}

export default Menu;
