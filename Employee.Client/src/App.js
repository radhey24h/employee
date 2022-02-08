import React from 'react';
import './App.css';
import Employee from './Employee';
import AddEmployee from './Employee/addEmployee'
import EditEmployee from './Employee/editEmployee'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Router>
        <Routes>
        <Route exact path='/' element={<Employee/>} />
        <Route exact path='/addEmployee' element={<AddEmployee/>} />
        <Route exact path='/editEmployee/:id' element={<EditEmployee/>} />
      </Routes>
    </Router>
  );
}

export default App;
