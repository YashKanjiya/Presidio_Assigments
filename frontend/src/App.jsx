import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import PropertyList from './components/Buyer/PropertyList';
import MyProperties from './components/Seller/MyProperties';
import AddProperty from './components/Seller/AddProperty';
import EditProperty from './components/Seller/EditProperty';

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/properties" component={PropertyList} />
      <Route path="/my-properties" component={MyProperties} />
      <Route path="/add-property" component={AddProperty} />
      <Route path="/edit-property/:id" component={EditProperty} />
    </Switch>
  </Router>
);

export default App;

