import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import TextareaAutosize from 'react-textarea-autosize';
import Chip from '@material-ui/core/Chip';
//import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';



export class NewBooks extends Component {
    state = {
        Title: '',
        description: '',
        genre: '',
        age_grp: '',
        time_prd: '',
        tag: ''
      };
      handleChange = input => e => {
        this.setState({ [input]: e.target.value });
      };
      onNavigateWritingEditor() {
        browserHistory.push("/story");
      }  
      

    render() {
        const { Title, description, genre, age_grp, time_prd, tag } = this.state;
        const values = { Title, description, genre, age_grp, time_prd, tag };
        const handleDelete = () => {
        console.info('You clicked the delete icon.');
      };
      

      
      
      return (
        <MuiThemeProvider >
          <React.Fragment>
            
              <AppBar title="Enter Basic Book Details" />
              <TextField
                hintText="Enter Your Book's Title"
                floatingLabelText="TITLE"
                onChange={this.handleChange('Title')}
                defaultValue={values.Title}              
              />
              <br />
              
              <label>
              STORY DESCRIPTION
              </label>
              <br />
              <TextareaAutosize
                useCacheForDOMMeasurements
                //defaultValue="Enter Story Description"
                placeholder="Enter Story Description..."
                minRows={3}
                cols= "50"
                onChange={this.handleChange('description')}
              />
              <br />
              <br />
              <label>
                Select Genre:&nbsp;&nbsp;&nbsp;  
              </label>
              <select id = "dropdown"
                 onChange={this.handleChange('genre')}
              >
                <option value="mystery">MYSTERY</option>
                <option value="thriller">THRILLER</option>
                <option value="romantic">ROMANTIC</option>
                <option value="action">ACTION</option>
                <option value="tragedy">TRAGEDY</option>
                <option value="fantasy">FANTASY</option>
                <option value="horror">HORROR</option>
                <option value="scifi">SCI-FI</option>
                <option value="youngadult">YOUNG ADULT</option>
              </select>
              <br />
              <br />
              <label>
                Select Age Group of Target Audience:&nbsp;&nbsp;&nbsp;  
              </label>
              <select id = "dropdown"
                 onChange={this.handleChange('age_grp')}
              >
                <option value="N/A">N/A</option>
                <option value="10+">10+</option>
                <option value="12+">12+</option>
                <option value="16+">16+</option>
                <option value="18+">18+</option>
              </select>
              <br />
              <br />
              <label>
                Select Time Period:&nbsp;&nbsp;&nbsp;  
              </label>
              <select id = "dropdown"
                 onChange={this.handleChange('time_prd')}
              >
                <option value="present">Present</option>
                <option value="19 century">19th century</option>
                <option value="16 century">16th century</option>
                <option value="ancient">Ancient General</option>
                <option value="future">Future</option>
              </select>
              <br />
              <br />
              <label> Enter story tags:&nbsp;&nbsp;&nbsp;</label>
              <TextareaAutosize
                useCacheForDOMMeasurements
                //defaultValue="Enter Story Description"
                placeholder="tags"
                onChange={this.handleChange('tag')}
              />
              <br /><br/>
              <Chip 
                label={tag} 
                onDelete={handleDelete}  
              />
              <br /> <br/>
              <RaisedButton
               label="START WRITING!"
               primary={true}
               onClick= {this.onNavigateWritingEditor}
              />
              
          
          </React.Fragment>
        </MuiThemeProvider>
      );
    }
  }
  
  export default NewBooks;
  

