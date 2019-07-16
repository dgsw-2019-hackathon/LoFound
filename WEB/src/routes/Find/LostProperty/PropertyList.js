import React, { Component } from 'react';
import axios from 'axios';

class PropertyList extends Component {

    state = {
        property: []
    };

    componentDidMount(){
        console.log("1");
        this.getProperty();    
        console.log("2");
    }

    getProperty = async () => {
        const property = await axios.get('http://192.168.137.1:7777/losts/');
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
                    <div key = {property.idx}>
                        <p>member: {property.memberId}</p>
                        <p>title: {property.title}</p>
                        <img src={property.url} alt="init" />
                        <p>content: {property.content}</p>
                    </div>
                );
            });
        } else {
            return <h3>No property</h3>
        }
    }
}

export default PropertyList;