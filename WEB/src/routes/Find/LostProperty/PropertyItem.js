import React, { Component } from 'react';

class PropertyItem extends Component {
    render() {
        console.log(this.props+"헤이");
        const {property} = this.props; 

        return (
            <div>
                <div key = {property.idx}>
                        <p>member: {property.memberId}</p>
                        <p>title: {property.title}</p>
                        <img src={property.url} alt="img" />
                        <p>content: {property.content}</p>
                </div>
            </div>
        );
    }
}

export default PropertyItem;