import React from 'react';
import './Form.scss';


class Form extends React.Component {

 constructor(props){
   super(props);
   this.state = {
       title:'',
       year:'',
       format:'',
       actors:'',
       isOpenError: false

   }
   this.handleTitleChange = this.handleTitleChange.bind(this);
   this.handleYearChange = this.handleYearChange.bind(this);
   this.handleFormatChange = this.handleFormatChange.bind(this);
   this.handleActorsChange = this.handleActorsChange.bind(this);
   this.handleMovieAdd = this.handleMovieAdd.bind(this);
 }

 formatToArray(str){
   let objArr = [];
   str = str.split(', ');
   for(let i = 0; i < str.length; i++ ){
     let actor = str[i].split(' ');
     let obj = {
       name: actor[0],
       surname: actor[1]
     }
     objArr.push(obj);
   }
   return objArr;
 }

  handleTitleChange(event){
    this.setState({title: event.target.value});
  }

  handleYearChange(event){
    this.setState({year: event.target.value});
  }

  handleFormatChange(event){
    this.setState({format: event.target.value});
  }

  handleActorsChange(event){
    this.setState({actors:event.target.value});
  }

  handleMovieAdd(event){
    event.preventDefault();
    const newMovie = {
      title: this.state.title,
      year:  this.state.year,
      format: this.state.format,
      actors: this.formatToArray(this.state.actors)
    }
    if(newMovie.year < 1920 || newMovie.year > 3000 || newMovie.year ===''|| newMovie.title ==='' || newMovie.actors ===''){
      alert('Oops, something went wrong!');
    }else{
      this.props.onMovieAdd(newMovie);
      this.props.onClose();
      window.location.reload();
      this.setState({title: '', year:'', format:'', actors:''});
    }
  }

  render(){
    let dialog = (
      <div className='MovieFormWrapper'>
      <div className='Shadow'></div>
      <div className='MovieEditor'>
          <h2 className='MovieEditor__Title'>Add Movie</h2>
          <form className='MovieEditor__Form' onSubmit = {this.handleMovieAdd}>
                  <input
                  type='text'
                  className = 'MovieEditor__Form__input'
                  placeholder='Enter title'
                  value={this.state.title}
                  onChange={this.handleTitleChange}
                  />
                  <input
                  type='text'
                  className = 'MovieEditor__Form__input'
                  placeholder='Enter year'
                  value={this.state.year}
                  onChange={this.handleYearChange}
                  />
                  <select value={this.state.format} onChange={this.handleFormatChange} required className='MovieEditor__Form__format'>
                    <option  value="" hidden >Choose format</option>
                    <option className='MovieForm__option' value="DVD">DVD</option>
                    <option className='MovieForm__option' value='VHS'>VHS</option>
                    <option className='MovieForm__option' value='Blu-Ray'>Blu-Ray</option>
                  </select>

                  <input
                  type='text'
                  className = 'MovieEditor__Form__input'
                  placeholder='Enter actors'
                  value={this.state.actors}
                  сhacked = {this.state.format}
                  onChange={this.handleActorsChange}
                  />
                  <label className="label-actors">*use pattern 'Name Surname, ...' : Mel Brooks, Harrison Ford</label>
                  <div className='MovieEditor__Form__button'>
                  <button className='MovieEditor__Form__button-save' onClick={ this.handleMovieAdd }>Save</button>
                  <button className='MovieEditor__Form__button-close' onClick={this.props.onClose }>Cancel</button>
                  </div>
              </form>
              </div>
              </div>
    );

    if(!this.props.isOpen){
      dialog = null;
    }
    return (
      <div>{dialog}</div>
    )
  }

}

export default Form;
