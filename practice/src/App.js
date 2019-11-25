import React from 'react';
import {  Route, BrowserRouter, NavLink, Switch } from 'react-router-dom';
import MouseMoveWithoutHooks from './mouseMoveWithoutHooks';
import MouseMove from './mouseMove';
import WhyDidYouUpdate from './whyDidYouUpdate';
import BenchMark from './BenchMark';
import ImagesCollage from './ImagesCollage';
import ImagesCollageWithHooks from './ImagesCollageWithHooks';
import LockBackground from './LockBackground';
import ContextButton from './ContextButton';
import ContextButtonWithHook from './ContextWithHook';
import FlexBox from './FlexBox';

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
      <li>
        <NavLink to='/mouseMoveRegular'>Move Mouse</NavLink>
      </li>
      <li>
      <NavLink to='/mouseMove'>Move Mouse with hooks</NavLink>
      </li>
      <li>
        <NavLink to='/Benchmark'>Benchmark</NavLink>
      </li>
      <li>
        <NavLink to='/yUpdate'>Check Why You Updated</NavLink>
      </li>
      <li>
        <NavLink to='/imagesCollage'>Images Collage</NavLink>
      </li>
      <li>
        <NavLink to='/imagesCollageWithHooks'>Images Collage with hooks</NavLink>
      </li>
      <li>
        <NavLink to='/lockableScroll'>Lockable scroll hook</NavLink>
      </li>
      <li>
        <NavLink to = '/context'>Context</NavLink>
      </li>
      <li>
        <NavLink to = '/contextWithHook'>Context with hook</NavLink>
      </li>
      <li>
        <NavLink to = '/flexBox'>Flex</NavLink>
      </li>
    </ul>

    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/contact' component={Contact} />
    <Route path='/mouseMoveRegular' component={MouseMoveWithoutHooks} />
    <Route path='/mouseMove' component={MouseMove} />
    <Route path='/Benchmark' render={() => <BenchMark start={Date.now()} />} />
    <Route path='/yUpdate' component={WhyDidYouUpdate} />
    <Route path='/imagesCollage' component={ImagesCollage} />
    <Route path='/imagesCollageWithHooks' component={ImagesCollageWithHooks} />
    <Route path='/lockableScroll' component={LockBackground} />
    <Route path='/context' component={ContextButton} />
    <Route path='/contextWithHook' component={ContextButtonWithHook} />
    <Route path='/flexBox' component={FlexBox} />
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
