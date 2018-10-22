import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 51.52044,
      lng: -0.10976
    },
    zoom: 14
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '70vw' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBnVw3z9IF1fscqQjlL6jR-zQHaJBgf57c'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={51.52044}
            lng={-0.10976}
            text={'Leather Lane'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;