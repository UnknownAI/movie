import React from 'react';


class Sort extends React.Component {

  render(){
    return(
        <form className='SortForm'>
        <button className='SortForm__Button' onClick={this.props.onFilter}>
          <div className='SortForm__Button__Icon'></div>
          <span>A-Z</span>
        </button>
        </form>
    )
  }
}

export default Sort;
