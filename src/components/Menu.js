import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Menu extends Component {
  render() {

    return (
     <nav id="categories">
      <ul>
        <li>
          <Link to = "/confectionary">
            <div className="category-text"></div>
            <span>Кондитерські вироби</span>
          </Link>
        </li>
        <li>
          <Link to = "/for_kids">
            <div className="category-text"></div>
            <div>Для дітей</div>
          </Link>
        </li>
        <li>
          <Link to = "/sunflower_oil">
            <div className="category-text"></div>
            <span>Соняшникова олія</span>
          </Link>
        </li>
        <li>
          <Link to = "/alcogol">
            <div className="category-text"></div>
            <span>Алкоголь</span>
          </Link>
        </li>
        <li>
          <Link to = "/ice_cream">
            <div className="category-text"></div>
            <span>Морозиво</span>
          </Link>
        </li>
        <li>
          <Link to = "/coffee">
            <div className="category-text"></div>
            <span>Кава</span>
          </Link>
        </li>
      </ul>
    </nav>);
  }
}

export default Menu;
