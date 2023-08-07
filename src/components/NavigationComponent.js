import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css'
import Home from '../routes/Home'
import PatientsInfo from '../routes/PatientsInfo';
import Troubleshooting from '../routes/Troubleshooting';



export default function NavigationComponent() {
  return (
    <Router>
      <div>

        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="">Sunny Smiles</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href=''>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Patients">Patients Info</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Troubleshooting">Troubleshooting</Link>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>



        {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}


        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/patients">
            <PatientsInfo />
          </Route>
          <Route path="/troubleshooting">
            <Troubleshooting />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
