import React, { Component } from 'react';
import axios from 'axios';
import PropertyItem from './PropertyItem';

class PropertyList extends Component {

    state = {
        property: [],
    };

    async componentDidMount(){
        this.getProperty();
    }

    getProperty = async () => {
        const property = await axios.get('http://192.168.137.1:7777/losts/', {
            headers: { ['x-access-token']: localStorage.getItem('userInfo')}
        });
        console.log(property+"앙");
        this.setState({property});
    }

    render() {
        const { property } = this.state;
        console.log(property+"3번쨰");
        console.log(property.idx+ "4번째");

        if(property.length > 0)
        {
            return property.map(property => {
                return (
                    <PropertyItem property={property}/>
                );
            });
        } else {
            return <h3>No property</h3>
        }
    }
}

export default PropertyList;