import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Polygon } from 'google-maps-react';
import { inject, observer } from 'mobx-react';
import PropertyList from './LostProperty/PropertyList';
import GoogleApiMap from 'google-map-react';
import { runInThisContext } from 'vm';
import { map } from 'rsvp';

@inject('store')
@observer
class Find extends Component {
  constructor(props) {
    super(props);
    this.state = [];
  }

  //
  async componentDidMount() {
    const { map } = this.props.store;
    await map.getMap();
    await map.getPollygon();
  }

  render() {
    // const triangleCoords = [
    //     {lat: 35, lng: 128},
    //     {lat: 35, lng: 129},
    //   ];

    const { pollygon } = this.props.store.map.pollygons;
    console.log(pollygon);
    console.log(this.props.google);
    return (
      <div>
        <div>
          <input type="text" />
        </div>
        <PropertyList />
        <GoogleApiMap
          bootstrapURLKeys={{
            key: 'AIzaSyAjai91TopNgOQxu2Rq0ssPjAbbY5FZBZQ',
            libraries: 'geometry,drawing'
          }}
          google={this.props.google}
          style={{ width: '100%', height: '100vh', position: 'relative' }}
          zoom={15}
          defaultCenter={{ lat: 35.6629059, lng: 128.4137486 }}
          disableDefaultUI={true}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => this.renderPolyLines(map, maps)}
        >
        </GoogleApiMap>
      </div>
    );
  }

  renderPolyLines(map, maps) {
    // console.log(data);
    console.log("다각형 랜더링 시작");
    const { polygons } = this.props.store.map;
    console.log(polygons);
    const triangleCoords = [];
      let newPolygon = new maps.Polygon({
        paths: triangleCoords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
      });
  
      newPolygon.setMap(map);
    }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAjai91TopNgOQxu2Rq0ssPjAbbY5FZBZQ')
})(Find)