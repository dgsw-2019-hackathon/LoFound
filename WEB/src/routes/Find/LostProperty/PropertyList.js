import React, { Component } from 'react';
import axios from 'axios';
import PropertyItem from './PropertyItem';

class PropertyList extends Component {

    state = {
        property: [
            {
                idx: 0,
                title: '2',
                memberId: '3',
                content: "4",
            }
        ],
    };

    async componentDidMount(){
        this.getProperty();
    }

    getProperty = async () => {
        await axios.get('http://192.168.137.1:7777/losts/', {
            headers: { 'x-access-token': localStorage.getItem('userInfo')}
        })
        .then((res) => {
            res = JSON.stringify(res);
            console.log(res);
            console.log(res.idx);
            console.log(res.title);
            console.log(res.memberId);
            console.log(res.content);
            const { property } = this.state;
            this.setState({
                property: property.concat({ idx: res.idx,
                                            title: res.title,
                                            memberId: res.memberId,
                                            content: res.content})
            });
            console.log(property+"z");
        })
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