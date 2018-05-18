import React from "react";
import { setFilter } from "STORE/actions.js";
import { connect } from "react-redux";

import "APP/BaseStyle.less";

class SearchInput extends React.Component {
  constructor(props) {
    super();
  }

  onChange(evt, type){
    let currentFilter = this.props.app.filter;
    let currentSort = this.props.app.sort;

    switch(type){
      case 'filter':
          currentFilter = evt.target.value
          break
      case 'sort':
          currentSort = evt.target.value
          break
    }
     this.props.setFilter(currentFilter, currentSort)    
  }

  render() {
    return(
      <div>
        <input  type="text" onChange={(evt) => this.onChange(evt,'filter')}/>
        <select onChange={(evt) => this.onChange(evt, 'sort')} name="" id="">
            <option value="sortbyName">Name</option>
            <option value="sortbyDate">Datum</option>
            <option value="sortbyZip">Postleitzahl</option>
        </select>
      </div>
    );
    
    
  }
}

const mapStoreToProps = (store, ownProps) => {
  return {
    app: store.app
  };
};

export default connect(mapStoreToProps, {setFilter})(SearchInput);
