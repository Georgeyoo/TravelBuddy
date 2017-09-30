import React, { Component } from 'react';
import Panel from './Panel';
import Map from './Map';

class Location extends Component {
	render() {
		return (
			<Map 
          isMarkerShown={false} 
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
			<Panel />
		)
	}
}

export default Location;