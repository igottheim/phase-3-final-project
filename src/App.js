import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import User from './User';
import UserForm from './UserForm';
import NavBar from './NavBar';
import { Switch,Route } from 'react-router-dom';
import UserTasks from './UserTasks';


function App() {
  
  const [users, setUsers] = useState([])
  const [tasks, setTasks] = useState([])
  const [currentTasks, setCurrentTasks] = useState([])
  const [currentUser, setCurrentUser] = useState([])



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
  
  
  

  function manageSubmit(e)
  {
    e.preventDefault()

    fetch('http://localhost:9295/users?' + new URLSearchParams({
      first_name: e.target[0].value,
      last_name : e.target[1].value,
      password : e.target[2].value

    }))
    .then(r=> r.json())
    .then(data => setCurrentUser(data))
  }

  console.log(currentUser)
  if(currentUser.length>0)
  {
    let a= tasks.filter((a)=> a.user_id === currentUser[0].id)
    console.log(typeof(a))
  }
  

  return (
    <>
    <NavBar/>
    <Switch>
    <Route exact path = "/UserForm">
  <UserForm handleSubmit ={manageSubmit} > Hello</UserForm>
  </Route>
    <Route exact path = "/User">
  <User user = {currentUser.length>0? currentUser[0].first_name: null} > </User>
  </Route>
  
  </Switch>
    </>

  )
}

export default App;
