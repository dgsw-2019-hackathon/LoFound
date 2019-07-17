import React, { Component } from 'react';
import './PropertyItem.scss';

class PropertyItem extends Component {
    // handleError = (e) => {
    //   console.log(e);
    //   e.style.display="none";
    // }

    render() {
        const {property} = this.props; 

        return (
            <div className="memberArea">
                <div className="memberArea--Area" key = {property.idx}>
                        <p>member: {property.memberId}</p>
                        <p>title: {property.title}</p>
                        <p>content: {property.content}</p>
                        {/* <img src={property.url} onError={() => {console.log()}} alt="img" /> */}
                </div>
            </div>
        );
    }
}

export default PropertyItem;