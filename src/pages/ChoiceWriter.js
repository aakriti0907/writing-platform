import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import styled from 'styled-components';
import { browserHistory } from 'react-router';

export class ChoiceLogin extends Component {

    onNavigateNewbooks() {
        browserHistory.push("/writer/newbook");
      }

    render() {
    return (
        <MuiThemeProvider >
          <React.Fragment>
            <AppBar title="Welcome Author" />
            
            <br />
          
            <RaisedButton
               label="Start A New Book!"
               primary={true}
               style={styled.button}
               onClick={this.onNavigateNewbooks}
            />
              <br />
              <br />
              <br />
            <RaisedButton
               label="Update Existing Book!"
               primary={true}
               style={styled.button}
               onClick={this.onNavigateNewbooks}
            />
          
          </React.Fragment>
        </MuiThemeProvider>
      );
    }
}

export default ChoiceLogin ;