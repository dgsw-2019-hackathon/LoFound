import React, { Component } from 'react';
import './Shop.scss';
import axios from 'axios';
import Items from './ShopItems';
///shop/item [GET] - 물풀
///shop/buy [POST] - request.body -> idx: 물품 IDX, 구입처리
class Shop extends Component {

    state = {
      shopItems: [{

      }],
    };

    async componentDidMount(){
      this.getItems();
      console.log(this.state.shopItems);
    }

    getItems = async () => {
      await axios.get('http://192.168.137.1:7777/shop/item', {
            headers: { 'x-access-token': localStorage.getItem('userInfo')}
        })
        .then(data => {
          data = data.data.data;
          const { shopItems } = this.state;
          this.setState({
            shopItems: Object.assign(shopItems,data),
          });
        })
    }

    handleBuy = async (e, idx) => {
      e.persist();
      console.log(localStorage.getItem("memberId"))
      await axios.post('http://192.168.137.1:7777/shop/buy', {
        headers: { 'x-access-token': localStorage.getItem('userInfo')},
          idx,
          memberId: localStorage.getItem("memberId"),
      })
      .then((res) => {
        alert("구매 성공하셨습니다.");
      })
      .catch((err) => {
        console.log(err);
        alert("포인트가 부족합니다.");
      })
    }

    render() {
      const {shopItems} = this.state;
      console.log(shopItems.length);
        return (
            <div className="Shop">
                <p className="Shop--storeTitle">로습득 스토어</p>
                <div className="Shop--productList">
                      {
                        shopItems.length > 0 &&
                          shopItems.map((item, i) => {
                            return (
                              <Items className="Items" 
                                    Items={item}
                                    key={item.idx}
                                    onClick={(e) => this.handleBuy(e, item.idx)}/>
                            )
                          })
                      }
                </div>
            </div>
        );
    }
}

export default Shop;