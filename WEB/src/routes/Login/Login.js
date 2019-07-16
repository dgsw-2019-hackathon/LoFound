import React, {
    Component
} from 'react';
import axios from 'axios';

class Login extends Component {
    state = {
        userId: "",
        password: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = async (e) => {
        const {
            userId: id,
            password: pw
        } = this.state;
        await axios.post('http://192.168.137.1:7777/auth/login', {
              id,
              pw})
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        return ( 
          <div>
            <label> ID </label> 
            <input  type = "text"
                    name = "userId"
                    placeholder = "User Id"
                    value = {
                      this.state.userId
                    }
                    onChange = {
                        this.handleChange
                    }
                    />

            <label> Password </label> 
            <input  type = "password"
                    name = "password"
                    placeholder = "Password"
                    value = {
                        this.state.password
                    }
                    onChange = {
                        this.handleChange
                    }
                    />

            <button type = "button"
                    onClick = {
                      this.handleSubmit
                    }> Sign in </button> 
          </div>
        );
    }
}

export default Login;