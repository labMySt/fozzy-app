import React, {Component} from 'react';
import {Redirect, Link, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import Fild from './Fild';
import Fetching from './Fetching';



class Groups extends Component {

  render() {

    const id = this.props.match.params.id;

    const url = this.props.match.url;
    const categories = this.props.categories;
    let listItems = null;
    let urlTo = url;
    if(categories && id) {

      urlTo = `${this.props.match.url}/${categories[id].groups[0].path}`;
      listItems = categories[id].groups.map((group) => {
      if(!group.subgroups) {
      return (
        <li>
         <Link to={`${this.props.match.url}/${group.path}`}>
           <span>{group.name}</span>
         </Link>
       </li>
      )
    } else {
        const listSubgroups = group.subgroups.map((sub) =>
          <li>
           <Link to={`${this.props.match.url}/${group.path}/${sub.path}`}>
             <span>{sub.name}</span>
           </Link>
         </li>
       )
       return (
         <li>
           <Link to={`${this.props.match.url}/${group.path}`}>
             <span>{group.name}</span>
           </Link>
               <ul>{listSubgroups}</ul>
         </li>
       )
     }});
     if(this.props.fetching)
       listItems = <Fetching />;
   }

    return (
    <div>
      <div className="groups-list">
        <ul>{listItems}</ul>
      </div>
       <Route path={`${this.props.match.path}/:group/:subgroup?`} component={Fild}/>
       <Redirect from={url} exact to={urlTo} />
    </div>
   );
  }
}

const mapStateToGroupsProps = (state) => {
  return {
    categories: state.categories,
  }
};
export default connect(mapStateToGroupsProps)(Groups);
