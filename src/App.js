import React, {Component} from 'react';

import { SearchBox } from './components/search-box/search-box.component';
import { CardList } from './components/card-list/card-list.component';

import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  }

  handleChange = (e) => { //binds the 'this' concept to the method automatically
    this.setState({ searchField: e.target.value });
  }

  render(){
    const { monsters, searchField } = this.state; // deconstructing concept, equivalent to const monters = this.state.monsters
    const filteredMonsters = monsters.filter(monster =>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monster'
          handleChange={ this.handleChange }
        />
        <CardList monsters={ filteredMonsters }/>
      </div>
    )
  }
}

export default App;
