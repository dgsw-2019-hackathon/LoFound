import React, { Component } from 'react';

class login extends Component {
    render() {
        return (
        <form>
            <h2> Please sign in </h2>
            <label for="inputEmail"> Email address</label>
            <input type="email" id="inputEmail"placeholder="Email address" required autofocus />
            
            <label for="inputPassword"> Password</label>
            <input type="password" id="inputPassword" placeholder="Password" required />
            
            <button type="button"> Sign in </button>
        </form>
        );
    }
}

export default login;