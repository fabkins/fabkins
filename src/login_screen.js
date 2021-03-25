import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
const axios = require('axios').default;


//import App from './App';



export default class LoginScreen extends React.Component {


    constructor(props) {
      super(props);
      this.state = { username: "fred.flintstone@gmail.com", password:"", authflag:1 };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      }
  
    handleChange(event) {
      this.setState({ username: event.state.username, password: event.state.password });
      }
  
    async handleSubmit(event) {
      event.preventDefault();
     

      axios.defaults.headers.post['Content-Type'] = 'application/json';
      let logincred={email: this.state.username ,password: this.state.password}
      
      //let headersParam={ withCredentials: true,      headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json', 'Authorization': `${token}`}}
      let headersParam={ withCredentials: true}
      
      
      await axios.post("http://localhost:3000/api/login",logincred, headersParam ).then(res => { 
        //alert(res.status)
      this.props.cb("sdfsdf")})
      .catch(fail =>alert(JSON.stringify(fail.response.data)))  // use fail.response.status as well.   Should set the login error value
      
      //await axios.get("http://localhost:3000/api/hello", headersParam ).then(res => alert(res.status),fail =>alert("bad"))

    }
     
     
    
    render () {
      return(
      <div >
   <Container maxWidth="sm">
      <form onSubmit={this.handleSubmit} >
          <TextField required id="email-input" 
                    fullWidth label="Email" defaultValue="" 
                    margin="normal"
                    name="username"
                    value={this.state.username}
                    onChange={(event) =>
                      this.setState({
                      [event.target.name]: event.target.value,
                      })}
                    type="email"
                    variant="outlined"/>
          <TextField
            required id="password-input" 
            fullWidth
            label="Password"
            name="password"
            value={this.state.password}
            onChange={(event) =>
              this.setState({
              [event.target.name]: event.target.value,
              })}
            type="password"
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
            /> 
            <Button  color="primary" type="submit"  variant="contained">
              Log in
            </Button>
          </form>
          </Container>
      </div>
    )
  }
  }

