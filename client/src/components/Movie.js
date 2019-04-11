import React, { Component } from 'react';
import './scss/List.scss'

class Movie extends Component {
  constructor(){
    super();
    this.state= {
      show: false
    }
    this.handleFullInfo = this.handleFullInfo.bind(this);
    this.formatToString = this.formatToString.bind(this);
  }

 handleFullInfo(){
   const {show} = this.state;
   this.setState({show: !show});

 }
 handleDelete(){
   this.props.onDelete(this.props.movieObject._id);
 }

formatToString(array){
  let newArray = [];
  array.forEach(item => newArray.push(item.name + ' ' + item.surname));
  array = newArray.toString();
  return array;
}

  render() {
    return (
      <li  className="MovieList__Item">
        <div className="MovieList__Wrapper">
          <div className="MovieList__Header">
            <h2  className="MovieList__Title">{this.props.movieObject.title}</h2>
            <div className="MovieList__Actions">
              <button className="MovieList__Btn" onClick={() => this.handleFullInfo()}><div className="MovieList__Btn-show"></div></button>
              <button className="MovieList__Btn" onClick={e=>this.handleDelete(e)}><div className="MovieList__Btn-delete"></div></button>
            </div>
          </div>
        { this.state.show &&
          <div className="MovieList__FullInfo">
            <p> Year: {this.props.movieObject.year}</p>
            <p> Format: {this.props.movieObject.format}</p>
            <p> Actors: {this.formatToString(this.props.movieObject.actors)}</p>
          </div>
        }
        </div>
      </li>
    );
  }
}

export default Movie;
