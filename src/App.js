import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';

import logo from './logo.svg';
import './styles/App.css';

import Book from './components/Book';
import Header from './components/Header';
import Contact from './components/Contact';
import Overview from './components/Overview';
import PackagedServices from './components/PackagedServices';
import Services from './components/Services';

const scrollConfig = {
  offset: 0,
  align: 'top',
  duration: 1000
}

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="content">
          <div className='navbar flex left-center'>
            <button onClick={() => scrollToComponent(this.Book, scrollConfig)}>Book</button>
            <button onClick={() => scrollToComponent(this.Services, scrollConfig)}>Services</button>
            <button onClick={() => scrollToComponent(this.PackagedServices, scrollConfig)}>Packaged Services</button>
            <button onClick={() => scrollToComponent(this.Contact, scrollConfig)}>Contact</button>
          </div>
        </div>
        <Header ref={(section) => { this.Header = section; }} />
        <Book ref={(section) => { this.Book = section; }} />
        <Overview ref={(section) => { this.Overview = section; }} />
        <Services ref={(section) => { this.Services = section; }} />
        <PackagedServices ref={(section) => { this.PackagedServices = section; }} />
        <Contact ref={(section) => { this.Contact = section; }} />
      </div>
    );
  }
}

export default App;
