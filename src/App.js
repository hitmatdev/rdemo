import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavDropdown from 'react-bootstrap/Navbar';

import Header from './components/header/header';
import Leftnav from './components/leftnav/leftnav';
import Home from './components/home/home'
import Products from './components/products/products'
import Services from './components/services/services'
import Contact from './components/contact/contact'

function App() {
  return (
    <main>  
      <Header></Header>
      <div className="row">
        <div className="col-lg-2"><Leftnav></Leftnav></div>
            <div className="col-lg-8">
              <Switch>
                  <Route path="/" component={Home} exact />
                  <Route path="/home" component={Home} />
                  <Route path="/products" component={Products} />
                  <Route path="/services" component={Services} />
                  <Route path="/contact" component={Contact} />
              </Switch>
            </div>
            <div className="col-lg-2"></div>
        </div>
    </main>
    
  );
}

export default App;
