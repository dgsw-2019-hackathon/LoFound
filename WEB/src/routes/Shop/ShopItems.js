import React, { Component } from 'react';
import './ShopItem.scss';

class ShopItems extends Component {


  render() {
    const {Items, onClick} = this.props;
    console.log(Items);

    return (
      <div className="shopList" onClick={onClick}>
        <p>{Items.name}</p>
        <p>가격: {Items.price}</p>
      </div>
    );
  }
}

export default ShopItems;