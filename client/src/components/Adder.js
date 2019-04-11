import React from 'react';

import Form from './Form.js';

class Adder extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        isOpen: false
    }
    this.handleWindowOpen = this.handleWindowOpen.bind(this);
    this.handleMovieAdd = this.handleMovieAdd.bind(this);
  }

  handleWindowOpen(event){
    event.preventDefault();
    this.setState({isOpen: true})
  }

  handleMovieAdd(data){
    fetch('/api/movies', {
         method: 'POST',
         body: JSON.stringify(data),
         headers: {
             'Content-Type': 'application/json'
         },
     })
     .then(res => res.json())
     .then(data => console.log(data));
  }

  render(){
    return(
        <div className='Adder'>
        <button className='Adder__Button' onClick={this.handleWindowOpen} >+ Add Movie</button>
        <Form
          onMovieAdd={this.handleMovieAdd}
          isOpen={this.state.isOpen}
          onClose={(e) => this.setState({isOpen: false})}
        />
        </div>
    )
  }
}

export default Adder;
