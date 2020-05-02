import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './components/LoginPage';
import UsersTable from './components/Contacts';
import { BrowserRouter as Router, Route, Link, Switch,BrowserRouter } from 'react-router-dom';
import TabsApp from './components/Tabs'
import LandingPage from './components/Landingpage'
import GetHelp from './components/Gethelp';
import ContactOrgnization from './components/ContactOrg'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
          <Switch>
          {/* <Route path="//"><LandingPage  /> </Route> */}
            <Route path="/signin/"><SignIn  /> </Route>
            <Route path="/home"><TabsApp  /> </Route> 
            <Route path="/gethelp/"><GetHelp  /> </Route> 
            <Route path="/contact-us/"><ContactOrgnization  /> </Route> 
            <Route path=""><Home></Home></Route>
            
            {/* <Route path="/contacts" ><UsersTable /> </Route> */}
            {/* <Route><div><h1>Salesforce</h1></div></Route> */}
        </Switch>
      </div> 
      </BrowserRouter>
    </div>
  );
}

export default App;
