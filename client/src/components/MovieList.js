import React, { Component } from 'react';
import Movie from './Movie.js';
import Search from './Search';
import Sort from './Sort';
import SearchError from './SearchError';
import Adder from './Adder'
import './scss/List.scss'
import './scss/Actions.scss'

class MovieList extends Component {
  constructor(){
    super();
    this.state = {
      movies: [],
      isOpen: false
    }
    this.onDelete = this.onDelete.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onFilter = this.onFilter.bind(this);
  }

  componentDidMount(){
    fetch('/api/movies')
    .then(res => res.json())
    .then(movies => this.setState({movies}, () => console.log('Data fetched', movies)));
  }

  onDelete(id){
    fetch("/api/movies/" + id, {
      method: 'DELETE'
    }).then((response) => {
      response.json();
    });

    let updateMovies = this.state.movies.filter(movie => movie._id !== id);
    this.setState({movies: updateMovies});

  }

  onSearch(data){
    fetch(`/api/movies/${data.filter}/` + data.subject)
    .then(res => res.json())
    .then(movies => this.setState({movies},
      function(){
      if(movies.length===0){
      this.setState({isOpen: true})
    }
  }
    )
  );

  }

  onFilter(event){
    event.preventDefault()
    fetch('/api/movies/sort')
    .then(res => res.json())
    .then(movies => this.setState({movies}, () => console.log('Data fetched', movies)));
  }

  render() {
    return (
      <div className="Container" >
      <div className="Actions">
        <Search onSearch={this.onSearch}/>
        <div className="Actions__Wrapper">
            <Adder />
            <Sort onFilter={this.onFilter}/>
        </div>
      </div>
      {this.state.isOpen && <SearchError />}
      <ul className="MovieList" >
        {this.state.movies.map((movie) => <Movie key={movie._id} movieObject={movie} onDelete={this.onDelete} />)}
      </ul>
      </div>
    );
  }
}

export default MovieList;
