import React, { Component } from 'react';

class Login extends Component {
    state= {
        userId: "",
        password: ""
    }

    handleChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    render() {
        return (
            <div>
                <label> ID</label>
                <input  type="text"
                        name="userId"
                        placeholder="User Id"
                        value={this.state.userId}
                        onChange={this.handleChange}/>
                
                <label> Password</label>
                <input  type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}/>
                
                <button type="button"> Sign in </button>
            </div>
        );
    }
}

export default Login;