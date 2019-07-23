import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Geolocation from 'react-geolocation';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBt7LID-yiMyjdM55ytjy0hsbVX9VOQZos' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

<Geolocation
  render={({
    fetchingPosition,
    position: { coords: { latitude, longitude } = {} } = {},
    error,
    getCurrentPosition
  }) =>
    <div>
      <button onClick={getCurrentPosition}>Get Position</button>
      {error &&
        <div>
          {error.message}
        </div>}
      <pre>
        latitude: {latitude}
        longitude: {longitude}
      </pre>
    </div>}
/>
 
export default SimpleMap;