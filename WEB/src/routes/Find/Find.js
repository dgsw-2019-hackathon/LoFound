import React, { Component } from 'react';
import { Map, Polygon, GoogleApiWrapper } from 'google-maps-react';
import { inject, observer } from 'mobx-react';
import PropertyList from './LostProperty/PropertyList';

@inject('store')
@observer
class Find extends Component {
    constructor(props) {
        super(props);
        this.state={
            department: "",
            triangleCoords: [

            ],
        }
      }

      //
    async componentWillMount(){
        const { map } = this.props.store;
        await map.getMap();
    }

     getPlaceId = async () => {
        const { map } = this.props.store;
        // const { department } = this.state;
        await map.getPlaceId(this.state.department);
    }

    changeDepartment = (e) =>{
        console.log(e.target.value);
        this.setState({
            department: e.target.value
        })
    }

    getPollygons = async (triangleCoords) =>{
        const { map } = this.props.store;
        const pollygons = await map.getPollygon();
        console.log(pollygons);

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
    }

    render() {
        const triangleCoords = [
            {lat: 35, lng: 128},
            {lat: 35, lng: 129},
          ];

        // const { maps } = this.props.store.map;
        // console.log(this.props.google);
        // console.log(maps);
        return (
            <div>
                <div>
                    <input type="text"/>
                </div>
                <div>
                    주소<input type="text" onChange={(e) => this.changeDepartment(e)}/>
                    <input type="button" value="보내기" onClick={() => this.getPlaceId()}/>
                </div>
                <PropertyList/>
                <Map 
                    google={this.props.google}
                    style={{width: '100%', height: '100%', position: 'relative'}}
                    zoom={8}
                    initialCenter={{
                    lat: 37,
                    lng: 126
                    }}
                    onGoogleApiLoaded={({map, maps}) => this.getPollygons(triangleCoords)}
                    yesIWantToUseGoogleMapApiInternals={true}
                >
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAjai91TopNgOQxu2Rq0ssPjAbbY5FZBZQ')
  })(Find)