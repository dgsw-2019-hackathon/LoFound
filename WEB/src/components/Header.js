import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <Link to="/">홈</Link>
                <Link to="/login">로그인</Link>
                <Link to="/find">찾기</Link>
                <Link to="/register">회원가입</Link>
            </div>
        );
    }
}

export default Header;