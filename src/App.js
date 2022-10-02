import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  
  const [hikes, setHikes] = useState([])



  //useEffect to pull information from db.json() file
  useEffect(()=>{
  fetch('http://localhost:9294/users')
  .then(r=> r.json())
  .then(data => setHikes(data))
  }
  ,[])

  console.log(hikes)
 
  let new_array = hikes.map((a) => <h1>{a.first_name} {a.last_name} </h1>)

  return (
   <h1> Users = {new_array} </h1>
  );
}

export default App;
