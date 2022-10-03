import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import User from './User';
import UserForm from './UserForm';
import NavBar from './NavBar';
import { Switch,Route } from 'react-router-dom';


function App() {
  
  const [users, setUsers] = useState([])
  const [tasks, setTasks] = useState([])



  //useEffect to pull information from db.json() file
  useEffect(()=>{
  fetch('http://localhost:9295/users')
  .then(r=> r.json())
  .then(data => setUsers(data))
  }
  ,[])

  useEffect(()=>{
    fetch('http://localhost:9295/tasks')
    .then(r=> r.json())
    .then(data => setTasks(data))
    }
    ,[])
  

  console.log(tasks)
  
  function handleClick(a)
  {

      console.log(a.first_name)
  }


  function manageSubmit(e)
  {
    e.preventDefault()
    console.log(users)

   let matchingUser = users.filter((a)=> a.first_name === e.target[0].value && e.target[1].value === a.last_name && e.target[2].value === a.password)
   console.log(matchingUser)
  console.log(e.target[0].value)
  console.log(e.target[1].value)
  console.log(e.target[2].value)


  }

  return (
    <>
    <NavBar/>
    <Switch>
    <Route path = "/User">
  <User users = {users} handleClick={handleClick}/>
  </Route>
  <Route path = "/UserForm">
  <UserForm handleSubmit ={manageSubmit} > Hello</UserForm>
  </Route>
  </Switch>
    </>

  )
}

export default App;
