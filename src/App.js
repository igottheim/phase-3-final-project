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
  const [categories, setCategories] = useState([])



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

    useEffect(()=>{
      fetch('http://localhost:9296/categories')
      .then(r=> r.json())
      .then(data => setCategories(data))
      }
      ,[])
  
  
  
//SUBMISSION OF CURRENT USER
  function manageSubmit(e)
  {
    e.preventDefault()
    if(e.target[0].value!==""&& e.target[1].value!==""&& e.target[2].value!=="")
    {
    fetch('http://localhost:9296/users?' + new URLSearchParams({
      first_name: e.target[0].value,
      last_name : e.target[1].value,
      username : e.target[2].value,
      password : e.target[3].value
    }))
    .then(r=> r.json())
    .then(data => 
      
      { setCurrentUser(data)
      
        if(data.length>0)
        {
          alert("Login Successful")
          setCurrentTasks(tasks.filter((a)=> a.user_id === data[0].id))
        
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
  if(e.target[0].value!==""&& e.target[1].value!==""&& e.target[2].value!=="" && e.target[3].value!=="")
  {
    fetch('http://localhost:9296/users',{
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
    .then(data => console.log(data))
    alert("New Account Created!")
  }
  else{
    alert("Please enter first name, last name, username, and password")
  }
}

// DELETE TASK
function handleDelete(e){
 
  fetch(`http://localhost:9296/tasks/${e.id}`,
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

   fetch(`http://localhost:9296/tasks/${a.id}`,
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

   fetch(`http://localhost:9296/tasks/${a.id}`,
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
  console.log(array)
 
  let newObj = {
    id: tasks[tasks.length-1].id+1,
    category_id:array,
    name:e.target[1].value,
    user_id: currentUser[0].id,
    priority:parseInt(e.target[2].value),
    "completed?": false
  }
  console.log(newObj)
  console.log(currentUser[0].id)
  
  if(e.target[1].value!=="")
  {
    fetch('http://localhost:9296/tasks?' + new URLSearchParams({newObj}),{
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
  

  return (
    <>
    <NavBar/>
    <Switch>
    <Route exact path = "/UserForm">
  <UserForm handleSubmit ={manageSubmit} handleNewLogin={handleNewLogin}> Hello</UserForm>
  </Route>
    <Route exact path = "/User">
  <User user = {currentUser.length>0? currentUser[0].first_name: null} tasks ={currentTasks} handleDelete ={handleDelete} upPriority={upPriority} downPriority={downPriority} handleSubmit={addNewTask}> </User>
  </Route>
  
  </Switch>
    </>

  )
}

export default App;
