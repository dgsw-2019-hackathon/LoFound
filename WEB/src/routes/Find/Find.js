import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Polygon, Marker } from 'google-maps-react';
import { inject, observer } from 'mobx-react';
import PropertyList from './LostProperty/PropertyList';
import GoogleApiMap  from 'google-map-react';
import { runInThisContext } from 'vm';
import { map } from 'rsvp';

@inject('store')
@observer
class Find extends Component {
    constructor(props) {
        super(props);
        this.state = {
            department: "",
            triangleCoords: [

            ],
            place: "",
            map: "",
            maps: "",
            marker: "",
        }
    }


    async componentDidMount() {
        const { map } = this.props.store;
        await map.getMap();
        await map.getPollygon(this.state.department);
        await map.getLosts();
    }

    getPlaceId = async () => {
        console.log('위치 정보 조회');
        const { map } = this.props.store;
        await map.getPlaceId(this.state.department);
        this.setState({
            place: map.placeId
        })
        console.log(this.state.place);
        const maps = this.state.maps;
        const viewMap = this.state.map;
        await map.getPollygon(this.state.place);
        const polygonResult = map.pollygons;
        console.log(polygonResult.lat);
        console.log(polygonResult.lng);

        this.setState({
            marker: new maps.Marker({
                position: {
                    lat: polygonResult.lat,
                    lng: polygonResult.lng,
                },
                text: this.state.department,
                map: viewMap,
            })
        });

        this.state.marker.setMap(viewMap);

        // return(
        // //     <GoogleApiMap
        // //     lat= {35.6629059}
        // //     lng={128.4137486}
        // //     text="My Marker"
        // //   />
        //     <CurrentPin
        //         lat={35.6629059}
        //         lng={128.4137486}
        //     />   
        // )
    }

    changeDepartment = (e) => {
        console.log(e.target.value);
        this.setState({
            department: e.target.value
        })
    }

    // getPollygons = async (triangleCoords) =>{
    //     const { map } = this.props.store;
    //     const pollygons = await map.getPollygon();
    //     console.log(pollygons);

    //     return(
    //         <Polygon
    //         paths={triangleCoords}
    //         strokeColor="#FF0000"
    //         strokeOpacity={0.8}
    //         strokeWeight={2}
    //         fillColor='#FF0000'
    //         fillOpacity={0.35}
    //     />
    //     )
    // }

    async renderPolyLines(viewMap, maps) {
        console.log("다각형 랜더링 시작");

        const losts = await this.props.store.map.getLosts();

        console.log(losts);
        console.log(Array.isArray(losts));
        if(Array.isArray(losts)){
            losts.forEach(async (element) => {
                const startPolly = await this.props.store.map.getPollygon(element.startPlaceId);
                const endPolly = await this.props.store.map.getPollygon(element.endPlaceId);

                const polygons = [startPolly];
                polygons.push({
                    lat: startPolly.lat,
                    lng: endPolly.lng,
                });
                polygons.push(endPolly);
                polygons.push({
                    lat: endPolly.lat,
                    lng: startPolly.lng,
                })
                console.log(polygons);

                if (polygons !== undefined && polygons !== null) {
                    console.log(polygons);
                    const triangleCoords = [polygons];
                    console.log(triangleCoords);

                    let newPolygon = new maps.Polygon({
                        paths: triangleCoords,
                        strokeColor: '#FF0000',
                        strokeOpacity: 0.8,
                        strokeWeight: 2,
                        fillColor: '#FF0000',
                        fillOpacity: 0.35,
                    });
        
                    newPolygon.setMap(viewMap);
                }
                else{
                    console.log('폴리곤 빔');
                }
            });
        }
        console.log('지도 정보 저장');
        this.setState({
            map,
            maps
        });
    }

    render() {
        const pollygon = this.props.store.map.pollygons;
        console.log(pollygon);
        // console.log(this.props.google);
        return (
            <div>
                <div>
                    <input type="text" />
                </div>
                <div>
                    주소<input type="text" onChange={(e) => this.changeDepartment(e)} />
                    <input type="button" value="보내기" onClick={() => this.getPlaceId()} />
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
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAjai91TopNgOQxu2Rq0ssPjAbbY5FZBZQ')
})(Find)