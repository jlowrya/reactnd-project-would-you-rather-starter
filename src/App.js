import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserSelectDropDown from './components/UserSelectDropDown'
import users from './data';

function App() {
  console.log('Users: ', users)
  return (
    <div className="App">
       
          <UserSelectDropDown users={users}/>
       
    </div>
  );
}

export default App;
