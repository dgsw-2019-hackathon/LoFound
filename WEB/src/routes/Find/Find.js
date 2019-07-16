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

    // bermudaTriangle = (triangleCoords, google) => {
    //     google.maps.map(e =>{
    //             return (
    //                 <Map 
    //                 google={google}
    //                 style={{width: '100%', height: '100%', position: 'relative'}}
    //                 zoom={8}
    //                 initialCenter={{
    //                 lat: 37,
    //                 lng: 126
    //                }}
    //                >
    //                     <Polygon
    //                         paths={triangleCoords}
    //                         strokeColor="#FF0000"
    //                         strokeOpacity={0.8}
    //                         strokeWeight={2}
    //                         fillColor='#FF0000'
    //                         fillOpacity={0.35}
    //                     />
    //                 </Map>
    //             )
    //         }
    //     )
    // }

    render() {
        const triangleCoords = [
            {lat: 35, lng: 128},
            {lat: 35, lng: 129},
          ];
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
                {/* {
                    this.props.google.maps.Polygon.map(e => {
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
                } */}
                 <Polygon
                                paths={triangleCoords}
                                strokeColor="#FF0000"
                                strokeOpacity={0.8}
                                strokeWeight={2}
                                fillColor='#FF0000'
                                fillOpacity={0.35}
                            />
                    </Map>
                {/* {this.bermudaTriangle(triangleCoords, this.props.google)} */}
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAjai91TopNgOQxu2Rq0ssPjAbbY5FZBZQ')
  })(Find)