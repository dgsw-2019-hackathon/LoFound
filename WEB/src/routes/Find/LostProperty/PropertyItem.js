import React, { Component } from 'react';

class PropertyItem extends Component {
    render() {
        const {property} = this.props; 

        return (
            <div>
                <div key = {property.idx}>
                        <p>member: {property.memberId}</p>
                        <p>title: {property.title}</p>
                        <img src={property.url} alt="init" />
                        <p>content: {property.content}</p>
                </div>
            </div>
        );
    }
}

export default PropertyItem;