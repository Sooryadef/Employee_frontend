import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import AddEmployee from './components/Employee/AddEmployee';
import EditEmployee from './components/Employee/EditEmployee';
import View from './components/Employee/View';






function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/Employee/AddEmployee" component={AddEmployee} />
        <Route exact path="/Employee/EditEmployee/:id" component={EditEmployee} />
        <Route exact path="/Employee/:id" component={View} />       
        <Route component={NotFound} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
