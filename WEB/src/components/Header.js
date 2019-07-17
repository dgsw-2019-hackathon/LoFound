import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <Link to="/">로그인</Link>
                <Link to="/find">지도</Link>
                <Link to="/register">회원가입</Link>
                <Link to="/shop">포인트샵</Link>
            </div>
        );
    }
}

export default Header;