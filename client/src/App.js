import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import SearchBar from './components/SearchBar';
import Location from './components/Location';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Travel with a Purpose!",
      locations: []
    }
  }


  // AJAX CALLS GO HERE
  componentDidMount() {
    console.log("Component Mounted!");
  };

  searchItems() {

  }

  render() {

    let title = this.state.title;

    return (
      <div className="App">
        <NavBar />
        <h1> { title } </h1>
        <SearchBar />
        <Location />

      </div>
    );
  }
}

export default App;
