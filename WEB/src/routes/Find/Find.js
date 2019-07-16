import React, { Component } from 'react';
import axios from 'axios';
import { Map, Polygon, GoogleApiWrapper } from 'google-maps-react';

class Find extends Component {

    async componentDidMount(){
        try {
            await axios.get(`https://maps.googleapis.com/maps/api/js?key=AIzaSyAjai91TopNgOQxu2Rq0ssPjAbbY5FZBZQ&callback=initMap`).then(res => {console.log(res)});
        } catch (err) {
            console.log(err);
        }
    }

    bermudaTriangle = (triangleCoords, google) => {
        // google.map(e =>{
        //         return (
        //             <Polygon
        //                 paths={triangleCoords}
        //                 strokeColor="#FF0000"
        //                 strokeOpacity={0.8}
        //                 strokeWeight={2}
        //                 fillColor='#FF0000'
        //                 fillOpacity={0.35}
        //             />
        //         )
        //     }
        // )
        triangleCoords.forEach(e => {
            return(
                <Polygon
                    paths={triangleCoords[e]}
                    strokeColor="#FF0000"
                    strokeOpacity={0.8}
                    strokeWeight={2}
                    fillColor='#FF0000'
                    fillOpacity={0.35}
                />
            )
        });
    }

    render() {
        const triangleCoords = [
            {lat: 35, lng: 128},
            {lat: 35, lng: 129},
          ];

        return (
            <div>
                안녕 파인드
                <Map 
                    google={this.props.google}
                    style={{width: '100%', height: '100%', position: 'relative'}}
                    zoom={8}
                    initialCenter={{
                    lat: 37,
                    lng: 126
                   }}
                    >
                    <Polygon
                        paths={triangleCoords}
                        strokeColor="#FF0000"
                        strokeOpacity={0.8}
                        strokeWeight={2}
                        fillColor='#FF0000'
                        fillOpacity={0.35}
                />
                    {/* {this.bermudaTriangle(triangleCoords, this.props.google)} */}
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAjai91TopNgOQxu2Rq0ssPjAbbY5FZBZQ')
  })(Find)