import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
//import Scroll from '../components/Scroll';

import {cafes} from './Cafe';

class App extends Component {
  constructor() {
    super()
    this.state = {
      cafes: cafes,
      searchfield: ''
    }
  }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response=> response.json())
  //     .then(users => {this.setState({ cafes: users})});
  // }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { cafes, searchfield } = this.state;
    const filteredcafes = cafes.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !cafes.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <SearchBox searchChange={this.onSearchChange}/>
          
            <CardList cafes={filteredcafes} />
         
        </div>
      );
  }
}

export default App;