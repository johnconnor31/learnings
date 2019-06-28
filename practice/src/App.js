import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route, BrowserRouter, NavLink, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <ul>
      <li>
      <NavLink activeClassName='active' to='/'>Home</NavLink>
      </li>
      <li>
      <NavLink to='/about'>About</NavLink>
      </li>
      <li>
      <NavLink to='/contact'>Contact</NavLink>
      </li>
    </ul>

    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/contact' component={Contact} />
    </BrowserRouter>
  );
}
function Home() {
  return <h2>HOME</h2>;
}
function About (props) {
  return (
    <>
    <h2>there are lot of things to talk about. Namely: </h2>
  <Switch>
    <Route exact path='/about/' component={AboutUs} />
    <Route path='/about/me/' component={AboutYou} />
    <Route path='/about/location/:location' component={CurrentLocation} />
  </Switch>
  </>
  );
}
function Contact() {
  return <h2>Contact</h2>;
}

function AboutUs() {
  return <h4>We are yourself</h4>
}

function AboutYou(props) {
  console.log('about you',props);
  return (
    <>
    <h4>Please write about yourself  </h4>
    <input />
    <button onClick={()=> props.history.push('/')} >Submit</button>
  </>);
}

function  CurrentLocation(props) {
  return <h4>We are currently in {props.match.params.location}</h4>
}

export default App;
