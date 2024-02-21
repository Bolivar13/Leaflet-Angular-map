import { Component } from '@angular/core';

import { icon, latLng, Layer, marker, tileLayer } from 'leaflet';

@Component({
	selector: 'leafletMarkersDemo',
	templateUrl: './markers-demo.component.html'
})
export class LeafletMarkersDemoComponent {

	// Open Street Map definitions
	LAYER_OSM = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '' });

	// Values to bind to Leaflet Directive
	options = {
		layers: [ this.LAYER_OSM ],
		zoom: 5,
		// Latitude & Longitude
		center: latLng(30.40319 , -9.52874)
	};

	markers: Layer[] = [];

	addMarker() {
		const newMarker = marker(
			[ 30.40319 + 0.1 * (Math.random() - 0.5), -9.52874 + 0.1 * (Math.random() - 0.5) ],
			{
				icon: icon({
					iconSize: [ 25, 41 ],
					iconAnchor: [ 13, 41 ],
					iconUrl: 'assets/leaflet/marker-icon.png',
					iconRetinaUrl: 'assets/leaflet/marker-icon-2x.png',
					shadowUrl: 'assets/leaflet/marker-shadow.png'
				})
			}
		);

		this.markers.push(newMarker);
	}

	removeMarker() {
		this.markers.pop();
	}
}
