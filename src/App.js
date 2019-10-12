import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserSelectBox from './components/UserSelectBox'
import users from './data';

function App() {
  console.log('Users: ', users)
  return (
    <div className="App">
       
          <UserSelectBox users={users}/>
       
    </div>
  );
}

export default App;
