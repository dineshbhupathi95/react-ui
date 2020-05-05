import React from 'react';
import './App.css';
import SignIn from './pages/LoginPage';
import UsersTable from './components/Contacts';
import { BrowserRouter as Router, Route, Link, Switch,BrowserRouter } from 'react-router-dom';
import TabsApp from './components/Tabs'
import Home from './pages/Home';
import BackToTop from './components/Topbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
          <Switch>
          {/* <Route path="//"><LandingPage  /> </Route> */}
            <Route path="/signin/"><SignIn  /> </Route>
            <Route path="/dashboard/"><BackToTop  /> </Route> 
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
