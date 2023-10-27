import './App.css';
import React, { Component } from 'react';
import Scrapper from './Scrapper';


export default class App extends Component {

  render() {

    const navbar = (
      <nav className='navbar navbar-expand-lg'>
        <a className='navbar-brand' href='#'>Web Scrapper</a>
      </nav>
    )

    return (
      <div className='App'>
        {navbar}
        <Scrapper />
      </div>
    )
  }
}

