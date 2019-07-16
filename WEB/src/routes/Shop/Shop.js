import React, { Component } from 'react';
import './Shop.scss';

class Shop extends Component {
    render() {
        return (
            <div className="Shop">
                <p className="Shop--storeTitle">로습득 스토어</p>
                <div className="Shop--productList">
                    <div className="shop--productList--first">
                        <div>양파</div>
                        <div>돼지고기</div>
                        <div>양파</div>
                        <div>양파</div>
                    </div>
                    <div className="shop--productList--sec">
                        <div>양파</div>
                        <div>돼지고기</div>
                        <div>양파</div>
                        <div>양파</div>
                    </div>
                    <div className="shop--productList--first">
                        <div>양파</div>
                        <div>돼지고기</div>
                        <div>양파</div>
                        <div>양파</div>
                    </div>
                    <div className="shop--productList--first">
                        <div>양파</div>
                        <div>돼지고기</div>
                        <div>양파</div>
                        <div>양파</div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Shop;