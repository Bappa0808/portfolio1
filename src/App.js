// App.js

import React from 'react';
import { BrowserRouter as Router, Switch, Links, Route, Routes, BrowserRouter } from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import 'react-bootstrap/dist/react-bootstrap.min.js';
import './App.css';
import Header from './components/Header';





function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <NavigationBar/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

