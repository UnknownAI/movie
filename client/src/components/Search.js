import React from 'react';


class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      subject: '',
      filter: '',
    }
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleMovieSearch = this.handleMovieSearch.bind(this);
  }

  handleSubjectChange(event){
    this.setState({subject: event.target.value});
  }

  handleFilterChange(event){
    this.setState({filter: event.target.value});
  }

  handleMovieSearch(event){
    event.preventDefault();
    const searchSubject =  {
      subject: this.state.subject,
      filter: this.state.filter
    }
    if(searchSubject.subject === ''){
      alert('Please, enter search subject')
    }else if(searchSubject.filter === ''){
      alert('Please, choose search filter ')
    }else{
      this.props.onSearch(searchSubject);
    }
  }

  render(){
    return(
        <form className='SearchForm' onSubmit={this.handleMovieSearch}>
          <input
            type='text'
            className='SearchForm__Subject'
            placeholder='Find movies...'
            value={this.state.subject}
            onChange={this.handleSubjectChange}
            required
          />
          <div className="SearchForm__Actions">
            <div className='SearchForm__Filters'>
              <label className="SearchForm__Option">
                <input
                  className='SearchForm__Radio'
                  type="radio"
                  value="title"
                  checked={this.state.filter=== "title"}
                  onChange={this.handleFilterChange}
                  />
                by title
              </label>

              <label className="SearchForm__Option">
                <input
                  className='SearchForm__Radio'
                  type="radio"
                  value="actor"
                  checked={this.state.filter === "actor"}
                  onChange={this.handleFilterChange}
                />
                by actor name
              </label>
            </div>
            <button className='SearchForm__Button' onClick={this.handleMovieSearch}>Search</button>
            </div>
        </form>
    )
  }
}

export default Search;
