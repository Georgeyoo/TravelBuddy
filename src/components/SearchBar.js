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
      <div className="row valign-wrapper search-bar">
          <form className="col s10">
            <div className="row">
              <div className="input-field col s9">
                <input id="disabled" type="text" className="validate"/ >
                <label for="street">Street</label>
              </div>
            </div>
            <div className="row center-align col s9">
              <a className="waves-effect waves-light btn red" onClick={ this.addLocation.bind(this) }>Find Places</a>
              <a className="waves-effect waves-teal btn-flat">Use my location</a>
            </div>
          </form>
        </div>
    );
  }
}

export default SearchBar;

            // <div className="row">
            //   <div className="input-field col s5">
            //     <input id="city" type="text" className="validate"/ >
            //     <label for="city">City</label>
            //   </div>
            //   <div className="input-field col s2">
            //     <input id="state" type="text" className="validate"/ >
            //     <label for="state">State</label>
            //   </div>
            //   <div className="input-field col s2">
            //     <input id="zip" type="text" className="validate"/ >
            //     <label for="zip">ZIP Code</label>
            //   </div>
            // </div>