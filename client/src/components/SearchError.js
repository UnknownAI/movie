import React from 'react';


class SearchError extends React.Component {

  render(){
    return(
      <div className="SearchError">
        <p className="SearchError__text">Sorry we couldn't find any matches...</p>
        <div className="SearchError__img"></div>
      </div>
    )
  }
}

export default SearchError;
