import React from 'react';
import './Register.scss';

const Register = () => {
    return (
        <div className="register">
          <div className="imgForm">
            <div className= "img"></div>
            <h1>회원가입</h1>
          </div>
          <div className="registerForm">
            <label>아이디</label><input type="text"/>
            <label>비밀번호</label><input type="password"/>
            <label>비밀번호 재확인</label><input type="password"/>
            <label>이름</label><input type="text"/>
            <label>이메일</label><input type="email"/>
          </div>
        </div>
    );
};

export default Register;