import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import AddPatient from './components/AddPatient';
import AddClinicals from './components/AddClinicals';
import UpdatePatient from './components/UpdatePatient';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/addPatient" component={AddPatient}/>
        <Route exact path="/addClinicals/:patientId" component={AddClinicals}/>
        <Route exact path="/addPatient/:patientId/:firstName/:lastName/:age/:gender" component={UpdatePatient}/>
      </Switch>
    </div>
  );
}

export default App;
