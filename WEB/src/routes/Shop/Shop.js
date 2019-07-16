import React, { Component } from 'react';
import './Shop.scss';

class Shop extends Component {
    render() {
        return (
            <div className="Shop">
                <p className="Shop--storeTitle">로습득 스토어</p>
                <div className="Shop--productList">
                    <p>안녕하세요 저는 정채연을 좋아하는 평범한 고등학생입니다</p>
                </div>
            </div>
        );
    }
}

export default Shop;