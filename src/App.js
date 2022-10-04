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
  fetch('http://localhost:9296/users')
  .then(r=> r.json())
  .then(data => setUsers(data))
  }
  ,[])

  useEffect(()=>{
    fetch('http://localhost:9296/tasks')
    .then(r=> r.json())
    .then(data => setTasks(data))
    }
    ,[])
  
  
  
//SUBMISSION OF NEW USER
  function manageSubmit(e)
  {
    e.preventDefault()
    if(e.target[0].value!==""&& e.target[1].value!==""&& e.target[2].value!=="")
    {
    fetch('http://localhost:9296/users?' + new URLSearchParams({
      first_name: e.target[0].value,
      last_name : e.target[1].value,
      password : e.target[2].value

    }))
    .then(r=> r.json())
    .then(data => setCurrentUser(data))

    if(currentUser.length>0)
  {
    let a= tasks.filter((a)=> a.user_id === currentUser[0].id)
    setCurrentTasks(a)
    console.log(currentTasks)
  }
    else{
      alert("The name and password is not associated with a current account. Please try again or create a login.")
    }
  }
  else{
    alert("Please enter a first name, last name, and password for an existing user.")
  }
}

  
// LOGIN ATTEMPT
  function handleNewLogin(e)
  {
    e.preventDefault()
  if(e.target[0].value!==""&& e.target[1].value!==""&& e.target[2].value!=="")
  {
    fetch('http://localhost:9296/users',{
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      } ,
      body:JSON.stringify(
    {first_name:e.target[0].value,
      last_name:e.target[1].value,
      password:e.target[2].value

    })})
    .then(r=> r.json())
    .then(data => console.log(data))
  }
  else{
    alert("Please enter first name, last name, and password")
  }
}

// DELETE TASK
function handleDelete(e){
console.log(e)
  fetch(`http://localhost:9296/tasks/${e.id}`,
  {method:"DELETE",
  }
  )
  .then((r)=>r.json())
  .then(()=>
  {
    let new_array = tasks.filter((a)=> a.id !== e.id)

    setTasks([...new_array])
    console.log(tasks)

}
) 
}

//UPDATE PRIORITY
  

  return (
    <>
    <NavBar/>
    <Switch>
    <Route exact path = "/UserForm">
  <UserForm handleSubmit ={manageSubmit} handleNewLogin={handleNewLogin}> Hello</UserForm>
  </Route>
    <Route exact path = "/User">
  <User user = {currentUser.length>0? currentUser[0].first_name: null} tasks ={currentTasks} handleDelete ={handleDelete}> </User>
  </Route>
  
  </Switch>
    </>

  )
}

export default App;
