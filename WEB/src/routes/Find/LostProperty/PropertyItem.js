import React, { Component } from 'react';
import './PropertyItem.scss';

class PropertyItem extends Component {
    render() {
        const {property} = this.props; 

        return (
            <div className="memberArea">
                <div className="memberArea--Area" key = {property.idx}>
                        <p>member: {property.memberId}</p>
                        <p>title: {property.title}</p>
                        <p>content: {property.content}</p>
                        <img src={property.url} alt="img" />
                </div>
            </div>
        );
    }
}

export default PropertyItem;