import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import About from './components/About';
import Data from './components/Data';
import News from './components/News';
import Navbar from './components/CustomNavbar';
import Footer from './components/MFooter';
import './App.css';

class App extends Component {
  render() {
    return (

      <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/data" component={Data} />
        <Route path="/register" component={Register} />
        <Route path="/news" component={News} />
        <Footer/>
      </div>
    </Router>

         );
  }
}

export default App;
