import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import User from './User';

function App() {
  
  const [users, setUsers] = useState([])



  //useEffect to pull information from db.json() file
  useEffect(()=>{
  fetch('http://localhost:9294/users')
  .then(r=> r.json())
  .then(data => setUsers(data))
  }
  ,[])

  console.log(users)
  
  function handleClick(a)
  {

      console.log(a.first_name)
  }

  return (
  //  <h1> Users = {new_array} </h1>

  <User users = {users} handleClick={handleClick}/>
  );
}

export default App;
