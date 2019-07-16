import React, { Component } from 'react';
import { Map, Polygon, GoogleApiWrapper } from 'google-maps-react';
import { inject, observer } from 'mobx-react';
import PropertyList from './LostProperty/PropertyList';

@inject('store')
@observer
class Find extends Component {
    constructor(props) {
        super(props);
        this.state=[];
      }

    async componentDidMount(){
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
        const triangleCoords = [];
          console.log(this.props.google);
        return (
            <div>
                안녕 파인드
                <PropertyList/>
                <Map 
                    google={this.props.google}
                    style={{width: '100%', height: '100%', position: 'relative'}}
                    zoom={8}
                    initialCenter={{
                    lat: 37,
                    lng: 126
                }}
                >
                {
                    this.props.store.map.pollygons.map(e => {
                        return(
                            <Polygon
                                paths={triangleCoords}
                                strokeColor="#FF0000"
                                strokeOpacity={0.8}
                                strokeWeight={2}
                                fillColor='#FF0000'
                                fillOpacity={0.35}
                            />
                        )
                    })
                }
                 {/* <Polygon
                                paths={triangleCoords}
                                strokeColor="#FF0000"
                                strokeOpacity={0.8}
                                strokeWeight={2}
                                fillColor='#FF0000'
                                fillOpacity={0.35}
                            /> */}
                    </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAjai91TopNgOQxu2Rq0ssPjAbbY5FZBZQ')
  })(Find)