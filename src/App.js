import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserSelectBar from './components/UserSelectBar';
import users from './data';

function App() {
  console.log('Users: ', users)
  return (
    <div className="App">
       
          <UserSelectBar user={users["sarahedo"]}/>
       
    </div>
  );
}

export default App;
