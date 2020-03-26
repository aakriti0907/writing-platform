import React, {Component} from 'react';
import { browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export class Signup extends Component {
    state = {
      firstName: '',
      Contact: '',
      email: '',
      age: '',
      city: '',
      bio: ''
    };

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
      };
    
    onNavigateConfirm() {
        browserHistory.push("/choicelogin");
    }

    render() {
        const { firstName, Contact, email, age, city, bio } = this.state;
        const values = { firstName, Contact, email, age, city, bio };

        return (
            <MuiThemeProvider >
              <React.Fragment>
                
                  <AppBar title="Enter User Details" />
                  <TextField
                    hintText="Enter Your First Name"
                    floatingLabelText="First Name"
                    onChange={this.handleChange('firstName')}
                    defaultValue={values.firstName}              
                  />
                  <br />
                  <TextField
                     hintText="Enter Your Contact"
                    floatingLabelText="Contact"
                    onChange={this.handleChange('Contact')}
                    defaultValue={values.Contact}
                  />
                  <br />
                  <TextField
                     hintText="Enter Your Email"
                     floatingLabelText="Email"
                    onChange={this.handleChange('email')}
                    defaultValue={values.email}
                   />
                  <br />
                  <TextField
                    hintText="Enter Your Occupation"
                    floatingLabelText="Age"
                    onChange={this.handleChange('age')}
                    defaultValue={values.age}             
                    />
                    <br />
                    <TextField
                    hintText="Enter Your City"
                    floatingLabelText="City"
                    onChange={this.handleChange('city')}
                    defaultValue={values.city}           
                    />
                    <br />
                    <TextField
                    hintText="Enter Your Bio"
                    floatingLabelText="Bio"
                    onChange={this.handleChange('bio')}
                    defaultValue={values.bio}            
                    />
                    <br />

                  {/* takes to confirmation page */}
                  <RaisedButton
                    label="Sign Up"
                    primary={false}
                    style={styled.button}
                    onClick={this.onNavigateConfirm}
                    />  
                  <li>
                    <NavLink activeStyle={{color: "red"}} to = "/login">Already a user? LOGIN.</NavLink>
                  </li>
                              
              </React.Fragment>
            </MuiThemeProvider>
          );
      }

}

export default Signup;