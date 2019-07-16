import React, { Component } from 'react';
import axios from 'axios';

class PropertyList extends Component {

    state = {
        property: []
    };

    async componentDidMount(){
        let {data: property } = await axios.get('http://192.168.137.1:7777/losts/');
        this.setState({property});
    }

    render() {
        const { property } = this.state;

        if(property.length > 0)
        {
            return property.map(property => {
                return (
                    <div key = {property.idx}>
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