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
      searchField: '',
      time: new Date()
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
      this.setState({ time: new Date() });
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  setTime = () => {
    this.setState({ time: new Date() });
  }

  render(){
    setInterval(this.setTime, 1000);

    const { robots, searchField, time } = this.state;

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    });

    return !robots.length?<h1 className='tc'>Loading...</h1>:
    (
      <div className='tc'>
        <h1 className='header'>Robofriends</h1>
        <h5>{time.toLocaleTimeString()}</h5>
        <SearchBox searchChange={this.onSearchChange}/>
        <ScrollBar>
          <CardList robots={filteredRobots}/>
        </ScrollBar>
      </div>
    );
  }
}

export default App;
