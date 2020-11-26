import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/pages/HomePage';
import ProductsPage from './components/pages/ProductsPage';
import ServicesPage from './components/pages/ServicesPage';
import SignupPage from './components/pages/SignupPage';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact strict component={HomePage} />
        <Route path="/products" exact strict component={ProductsPage} />
        <Route path="/services" exact strict component={ServicesPage} />
        <Route path="/sign-up" exact strict component={SignupPage} />
      </Switch>
    </>
  );
};

export default App;