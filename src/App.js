import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';

import Header from './components/Header';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Overview from './components/Overview';
import PackagedServices from './components/PackagedServices';
import Services from './components/Services';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Header />
        <Overview />
        <Services />
        <PackagedServices />
        <Contact />
      </div>
    );
  }
}

export default App;
