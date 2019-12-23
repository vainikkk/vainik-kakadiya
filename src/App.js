import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home';
import { Route } from 'react-router-dom'
import About from './Components/About';
import Footer from './Components/Footer';
import Blog from './Components/Blog';
import Contact from './Components/Contact/Contact';
import Elements from './Components/Elements';
import PortFolio from './Components/Portfolio';
import SingleBlog from './Components/SingleBlog';
import Services from './Components/Services';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path='/'><Home /></Route>
      <Route path='/about'><About /></Route>
      <Route path='/blog'><Blog /></Route>
      <Route path='/contact'><Contact /></Route>
      <Route path='/elements'><Elements /></Route>
      <Route path='/portfolio'><PortFolio /></Route>
      <Route path='/single-blog'><SingleBlog /></Route>
      <Route path='/services'><Services /></Route>
      <Footer />
    </div>
  );
}

export default App;
