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
      await axios.get('http://192.168.137.1:7777/losts/', {
          headers: { 'x-access-token': localStorage.getItem('userInfo'), 'Content-Type': 'application/json' }
      })
      .then((res) => {
        console.log('success');
        const { property } = this.state;
        console.log(res.data.data+"이거");
        this.setState({
            property: Object.assign(property, res.data.data),
        });
      })
      .catch(err => console.error(err));
    }

    render() {
        const { property } = this.state;

        if(property.length > 0)
        {
            return property.map(property => {
                return (
                    <PropertyItem property={property} key={property.idx}/>
                );
            });
        } else {
            return <h3>No property</h3>
        }
    }
}

export default PropertyList;