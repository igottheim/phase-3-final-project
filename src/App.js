import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages';
import About from './Pages/about';
import ContactUs from './Pages/contact';
import Services from './Pages/services';
import SignUp from './Pages/signup';
import TodoList from './ToDoComponents/TodoList';

import { useState, useEffect } from 'react';
import User from './User';
import UserForm from './UserForm';

import UserLoginForm from './UserLoginForm';
import ScrollToTop from './ScrollToTop';

function App() {
  const [users, setUsers] = useState([])
  const [tasks, setTasks] = useState([])
  const [currentTasks, setCurrentTasks] = useState([])
  const [currentUser, setCurrentUser] = useState([])
  const [categories, setCategories] = useState([])



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

    useEffect(()=>{
      fetch('http://localhost:9295/categories')
      .then(r=> r.json())
      .then(data => setCategories(data))
      }
      ,[])
  
  //SUBMISSION OF CURRENT USER
  function manageSubmit(e)
  {
    e.preventDefault()
    if(e.target[0].value!==""&& e.target[1].value!=="")
    {
    fetch('http://localhost:9295/users?' + new URLSearchParams({
      username: e.target[0].value,
      password_digest : e.target[1].value
    }))
    .then(r=> r.json())
    .then(data => 
      { 
       
        
      
        if(data.length!==0)
        {
         
          setCurrentUser(data)
          console.log(data)
          console.log(currentUser)
          alert("Login Successful")
          setCurrentTasks(tasks.filter((a)=> a.user_id === data.id))
          console.log(currentTasks)
        
        }
          else{
            alert("The name and password is not associated with a current account. Please try again or create a login.")
          }
      
      
      })
  
  }
  else{
    alert("Please enter a first name, last name, username, and password for an existing user.")
  }
}

  
// LOGIN ATTEMPT
  function handleNewLogin(e)
  {
    e.preventDefault()

    fetch('http://localhost:9295/usersFind?' + new URLSearchParams({
   
      username : e.target[2].value,
    }))
    .then(r=> r.json())
    .then( (data) =>  {

      if(data.length===0)
      {
        if(e.target[0].value!==""&& e.target[1].value!==""&& e.target[2].value!=="" && e.target[3].value!=="")
        {
          fetch('http://localhost:9295/users',{
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            } ,
            body:JSON.stringify(
          {first_name:e.target[0].value,
            last_name:e.target[1].value,
            username:e.target[2].value,
            password:e.target[3].value
      
          })})
          .then(r=> r.json())
          .then( (data) => {setCurrentUser(data)
            setCurrentTasks([])
          })
          alert("New Account Created!")
        }
        else{
          alert("Please enter first name, last name, username, and password")
        } 
      }
      else
      {
        alert("USERNAME ALREADY EXISTS. PLEASE TRY AGAIN!")
      }
    } )

}

// DELETE TASK
function handleDelete(e){
 
  fetch(`http://localhost:9295/tasks/${e.id}`,
  {method:"DELETE"
  })
  .then((r)=>r.json())
  .then(()=> setCurrentTasks(currentTasks.filter((item)=> e.id !== item.id)))
}

//UPDATE PRIORITY
function upPriority(a)
{

  let updateLike =  currentTasks.filter((item)=> a.id === item.id)
  console.log(updateLike[0].priority+=1)

  let newTaskArray = currentTasks.map((item)=>
  {
   if (item.id === updateLike.id)
   {
     return updateLike
   }
   else {

     return item
   }})

   fetch(`http://localhost:9295/tasks/${a.id}`,
        {
          method: "PATCH",
          headers:{"Content-Type":"application/json",
        },    
        body:JSON.stringify(a),
      })
      .then(r => r.json())
      .then (setTasks(newTaskArray))
}

function downPriority(a)
{
  

  let updateLike =  currentTasks.filter((item)=> a.id === item.id)
  if(updateLike[0].priority>0)
  {
  console.log(updateLike[0].priority-=1)
 
  let newTaskArray = currentTasks.map((item)=>
  {
   if (item.id === updateLike.id)
   {
     return updateLike
   }
   else {

     return item
   }})

   fetch(`http://localhost:9295/tasks/${a.id}`,
        {
          method: "PATCH",
          headers:{"Content-Type":"application/json",
        },    
        body:JSON.stringify(a),
      })
      .then(r => r.json())
      .then (setTasks(newTaskArray))
    }
}

function addNewTask(e)
{
  e.preventDefault()
  let array = categories.find((a)=> a.name === e.target[0].value).id

  let newObj = {
    id: tasks[tasks.length-1].id+1,
    category_id:array,
    name:e.target[2].value,
    user_id: currentUser.id,
    priority:parseInt(e.target[1].value),
    "completed?": false
  }
  console.log(newObj)
  console.log(currentUser.id)
  
  if(e.target[1].value!=="")
  {
    fetch('http://localhost:9295/tasks?' + new URLSearchParams({newObj}),{
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      } ,
      body:JSON.stringify(newObj)})
    .then(r=> r.json())
    .then(()=>
      
      setCurrentTasks([...currentTasks, newObj]))
      setTasks([...tasks,newObj])
  }


}


  return(
    <Router>
      <ScrollToTop />
      <Navbar />
        <Switch>

        <Route path="/" exact component={Home} >
        <div className='user-app'>
          <TodoList />
        </div>     
        </Route>

        <Route path="/about" component={About} />

        <Route path="/contactus" component={ContactUs} >
        <User user = {currentUser} tasks ={currentTasks} handleDelete ={handleDelete} upPriority={upPriority} downPriority={downPriority} handleSubmit={addNewTask}> </User>
        </Route>

        <Route path="/services" component={Services}>
        <UserForm handleSubmit ={manageSubmit} /> 
        
        </Route>

        <Route path="/signup" exact component={SignUp}>
        <UserLoginForm handleNewLogin={handleNewLogin}/> 
          
        </Route>

        </Switch>
    </Router>
  );  
}

export default App;
