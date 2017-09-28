import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      locations: []
    }
  }


  // AJAX CALLS GO HERE
  componentDidMount() {
    console.log("Component Mounted!");
  };

  addLocation(event){

    // Prevent form from submitting
    event.preventDefault();

    let data = {
      name: this.refs.name.value
    };

    var request = new Request("http://localhost:3000/api/new-location", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json"}),
      body: JSON.stringify(data)
    });

    //xmlhttprequest()
    fetch(request)
      .then(function(response) {
        response.json()
          .then(function(data) {
            console.log(data);
          })
      })
  }

  searchItems() {

  }

  render() {

    return (
      <div className="search-bar">
        <form>
          <input type="text" ref="name" placeholder="Starting Location..." />
          <button onClick={ this.addLocation.bind(this) }> Add Location! </button>
        </form>

      </div>
    );
  }
}

export default SearchBar;