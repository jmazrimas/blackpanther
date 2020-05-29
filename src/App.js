import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';

import logo from './logo.svg';
import './styles/App.css';

import insta from './images/insta.svg';
import twitter from './images/twitter.svg';

import Book from './components/Book';
import Header from './components/Header';
import Contact from './components/Contact';
import Overview from './components/Overview';
import PackagedServices from './components/PackagedServices';
import Services from './components/Services';
import ImageSection from './components/ImageSection';
import Announcement from './components/Announcement';
import Policies from './components/Policies';

const scrollConfig = {
  offset: 0,
  align: 'top',
  duration: 1000
}

// <div className="flex social-media">
//   <a href="https://www.google.com">
//     <img src={insta} />
//   </a>
//   <a href="https://www.google.com">
//     <img src={twitter} />
//   </a>
// </div>

class App extends Component {
  render() {
    return (
      <div className="app">
      <style>
        @import url('https://fonts.googleapis.com/css?family=Lato:300|Open+Sans:300');
      </style>
        <div className="content">
          <div className='navbar flex space-between-center'>
            <div>
              <button onClick={() => scrollToComponent(this.Book, scrollConfig)}>Book</button>
              <button onClick={() => scrollToComponent(this.Services, scrollConfig)}>Services</button>
              <button onClick={() => scrollToComponent(this.PackagedServices, scrollConfig)}>Packages</button>
              <button onClick={() => scrollToComponent(this.Contact, scrollConfig)}>Contact</button>
              <button onClick={() => scrollToComponent(this.Policies, scrollConfig)}>Policies</button>
            </div>
            <div className="flex social-media">
              <a href="https://www.instagram.com/groomingloungechicago/">
                <img src={insta} />
              </a>
              <a href="https://twitter.com/groomingchicago">
                <img src={twitter} />
              </a>
            </div>
          </div>
        </div>
        <Header ref={(section) => { this.Header = section; }} />
        <Announcement />
        <Book ref={(section) => { this.Book = section; }} />
        <Overview ref={(section) => { this.Overview = section; }} />
        <ImageSection />
        <Services ref={(section) => { this.Services = section; }} />
        <PackagedServices ref={(section) => { this.PackagedServices = section; }} />
        <Contact ref={(section) => { this.Contact = section; }} />
        <Policies ref={(section) => { this.Policies = section; }} />
      </div>
    );
  }
}

export default App;
