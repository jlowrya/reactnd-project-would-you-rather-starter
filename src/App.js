import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import users from './data';

function App() {
  console.log('Users: ', users)
  return (
    <div className="App">
       
          <Header />
       
    </div>
  );
}

export default App;
