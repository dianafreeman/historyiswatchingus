import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class Container extends React.Component {
  render() {
      const style = {
      width: '25vw',
      height: '25vh'
    }
    return (
      <div style={style}>
        <Map google={this.props.google} />
      </div>
    )
  }
}

export default GoogleApiComponent {
{
  apiKey: 'AIzaSyBt7LID-yiMyjdM55ytjy0hsbVX9VOQZos'
}
);

export class Map extends React.Component {
  loadMap() {
    if (this.props && this.props.google) {
      // google is available
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let zoom = 14;
      let lat = 37.774929;
      let lng = -122.419416;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig);
    }
    // ...
  }
}

