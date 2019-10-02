import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
//IMPORT COMPONENTS HERE
import Main from './components/MainPage/Main';
import NavBar from './components/NavBar/NavBar';
import CandidatesPage from './components/CandidatesPage/CandidatesPage';
import CandidateHomePage from './components/CandidateHomePage';
import EmployerHomePage from './components/EmployerHomePage';
import CreateProfile from './components/CreateUserProfile';
import EmployerPositions from './components/EmployerPositions/EmployerPositions';
import AddPositionForm from './components/AddPositionForm/AddPositionForm';
import CandidateProfile from './components/CandidateProfile/CandidateProfile'

import 'materialize-css/dist/css/materialize.min.css';


function App() {
  return (
    <Router>
      <div className="App">
          <Route path="/" component={NavBar} />
          <Route exact path="/" component={Main} />
          <Route exact path="/employerHome" component={EmployerHomePage} />
          <Route exact path="/employerHome/positions" component={EmployerPositions} />
          {/* <Route exact path="/employer/positions/:id" component={SortedCandidatesList} /> */}
          <Route exact path="/employer/addPosition" component={AddPositionForm} />
          <Route exact path="/candidates" component={CandidatesPage} />
          <Route exact path='/candidateProfile/:id' component={CandidateProfile} />
          <Route exact path="/candidateHome" component={CandidateHomePage} />
          <Route exact path="/candidateHome/createprofile" component={CreateProfile} />
      </div>
    </Router>
  )
}

export default App;
