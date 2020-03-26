import React from 'react';
import './App.css';
import Navbar from './component/navbar';
import {Route, Switch} from 'react-router-dom';

import Login from './pages/Login';
import Signup from './pages/Signup';
import ChoiceWriter from'./pages/ChoiceWriter';
import Error from'./pages/Error';
import ChoiceLogin from './pages/ChoiceLogin';
import NewBooks from './pages/NewBooks';
import RichEditorExample from './component/Editor';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path ="/" component = {() => {
          return (
            <h1>Writing Platform</h1>
          );
        }} />
        <Route exact path ="/signup" component = {Signup} />
        <Route exact path ="/login" component = {Login} />
        <Route exact path ="/choicelogin" component = {ChoiceLogin} />
        <Route exact path ="/writer" component = {ChoiceWriter} />
        <Route exact path ="/writer/newbook" component = {NewBooks} />
        <Route path="/story" component={RichEditorExample}/>
        <Route component = {Error} />
      </Switch>
    </div>
  );
}

export default App;
