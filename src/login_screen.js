import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';

const axios = require('axios').default;


//import App from './App';



export default class LoginScreen extends React.Component {


    constructor(props) {
      super(props);
      this.state = {
        username: "fred.flintstone@gmail.com", 
        password:"", authflag:1,
        errormsg: "" };
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
      
      
      await axios.post("http://localhost:3000/api/login",logincred, headersParam ).then(res => 
      { 
      axios.get("http://localhost:3000/api/getuserdetails", headersParam )
        .then(res => 
          { this.props.cb(res.data) } //alert(JSON.stringify(res.data))    
           ,fail =>{this.setState({errormsg: fail.response.data.msg })})
    })
      .catch(error => {
        if(error.response)
        {
          if(error.response.data?.msg)
              this.setState({errormsg: error.response.data.msg })
          else
          {
              let errmsg="unknown error "+error.response.status;
              this.setState({errormsg: errmsg})
          }
        }
        else
        {this.setState({errormsg: "Failed to communicate to server"})}
      }
    )  
  }
     
     
    
    render () {

      let alertmessage="";

      if(this.state.errormsg !== "")      
          alertmessage=<Alert variant="filled" severity="error">{this.state.errormsg}</Alert>;

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
            <p />
            {alertmessage}
          </form>
          </Container>
      </div>
    )
  }
  }

