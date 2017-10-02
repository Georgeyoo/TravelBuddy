var React = require('react');

var Router = require('react-router');
var Route = Router.Route;

var IndexRoute  = Router.IndexRoute;

var Main = require('../src/components/Main');
var Search = require('../src/components/Search');
var Saved = require('../src/components/Saved');

module.exports = (

  <Route path='/' component={Main}>

    <Route path='Search' component={Search} />
    <Route path='Saved' component={Saved} />

    <IndexRoute component={Search} />

  </Route>

);