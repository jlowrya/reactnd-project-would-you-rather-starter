import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import users from './data';
import optionCard from './components/OptionCard'
import OptionCard from './components/OptionCard';
import Question from './components/Question'

function App() {
  console.log('Users: ', users)
  return (
    <div className="App">
       
         <Question />
       
    </div>
  );
}

export default App;
