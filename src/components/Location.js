import React, { Component } from 'react';
// import Panel from './Panel';
import Map from './Map';
import Results from './Results';

class Location extends Component {
	render() {
		return (
			<div className="row">
				<div className="col s6">
					<h4>Map</h4>
					<Map 
						isMarkerShown={false} 
						googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
						loadingElement={<div style={{ height: `100%` }} />}
						containerElement={<div style={{ height: `450px` }} />}
						mapElement={<div style={{ height: `100%`, width: `100%` }} />}
					/>
				</div>
				<div className="col s6 padding-right">
					<h4>Results</h4>
					<Results />
				</div>
			</div>
		)
	}
}

export default Location;