import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';



export default class LoginScreen extends React.Component {


    constructor(props) {
      super(props);
      this.state = { username: "", password:"", authflag:1 };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      }
  
    handleChange(event) {
      this.setState({ username: event.state.username, password: event.state.password });
      }
  
    handleSubmit(event) {
      event.preventDefault();
      if (this.state.username === 'admin@littech.in' && this.state.password === 'secret') {
      this.props.history.push("/home");
      } else {
      alert('Incorrect Credntials!'+this.state.username+' , '+this.state.password);
      }
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

