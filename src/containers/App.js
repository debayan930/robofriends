import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import ScrollBar from '../components/ScrollBar';
import SearchBox from '../components/SearchBox';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  render(){
    const { robots, searchField } = this.state;

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    });

    return(
      <div className='tc'>
        <h1 className='header'>Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <ScrollBar>
          <CardList robots={filteredRobots}/>
        </ScrollBar>
      </div>
    );
  }
}

export default App;
