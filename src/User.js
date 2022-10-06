import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap"
import { RiCloseCircleLine } from 'react-icons/ri';
import { BsFillArrowUpCircleFill, BsFillArrowDownCircleFill } from 'react-icons/bs';


 
function User({user, tasks, handleDelete, upPriority, downPriority, handleSubmit}){
  const [userName, setUserName] = useState(user?.first_name ?? '')

  useEffect(() => {
    console.log('User Change:', user);
    setUserName(user?.first_name ?? '')
  }, [user])

  console.log(user)
  console.log(tasks)

let category1 = tasks.filter((b) => b.category_id === 1).map((a)=> <li key = {a.id} class = "todo-row"> {a.name} Priority: {a.priority} {a.category_id.name} <BsFillArrowUpCircleFill onClick = {()=> upPriority(a)} className = 'up-icon'></BsFillArrowUpCircleFill> <BsFillArrowDownCircleFill onClick = {()=> downPriority(a)} className = 'down-icon'>⬇️</BsFillArrowDownCircleFill><RiCloseCircleLine onClick={()=> handleDelete(a)} className = 'delete-icon'></RiCloseCircleLine></li>) 
let category2 = tasks.filter((b) => b.category_id === 2).map((a)=> <li key = {a.id} class = "todo-row">  {a.name} Priority: {a.priority} {a.category_id.name}   <BsFillArrowUpCircleFill onClick = {()=> upPriority(a)} className = 'up-icon'></BsFillArrowUpCircleFill> <BsFillArrowDownCircleFill onClick = {()=> downPriority(a)} className = 'down-icon'>⬇️</BsFillArrowDownCircleFill><RiCloseCircleLine onClick={()=> handleDelete(a)} className = 'delete-icon'></RiCloseCircleLine></li>)
let category3 = tasks.filter((b) => b.category_id === 3).map((a)=> <li key = {a.id} class = "todo-row">  {a.name} Priority: {a.priority} {a.category_id.name}   <BsFillArrowUpCircleFill onClick = {()=> upPriority(a)} className = 'up-icon'></BsFillArrowUpCircleFill> <BsFillArrowDownCircleFill onClick = {()=> downPriority(a)} className = 'down-icon'>⬇️</BsFillArrowDownCircleFill><RiCloseCircleLine onClick={()=> handleDelete(a)} className = 'delete-icon'></RiCloseCircleLine></li>)
let category4 = tasks.filter((b) => b.category_id === 4).map((a)=> <li key = {a.id} class = "todo-row">  {a.name} Priority: {a.priority} {a.category_id.name}  <BsFillArrowUpCircleFill onClick = {()=> upPriority(a)} className = 'up-icon'></BsFillArrowUpCircleFill> <BsFillArrowDownCircleFill onClick = {()=> downPriority(a)} className = 'down-icon'>⬇️</BsFillArrowDownCircleFill><RiCloseCircleLine onClick={()=> handleDelete(a)} className = 'delete-icon'></RiCloseCircleLine></li>)
let category5 = tasks.filter((b) => b.category_id === 5).map((a)=> <li key = {a.id} class = "todo-row">  {a.name} Priority: {a.priority} {a.category_id.name}   <BsFillArrowUpCircleFill onClick = {()=> upPriority(a)} className = 'up-icon'></BsFillArrowUpCircleFill> <BsFillArrowDownCircleFill onClick = {()=> downPriority(a)} className = 'down-icon'>⬇️</BsFillArrowDownCircleFill><RiCloseCircleLine onClick={()=> handleDelete(a)} className = 'delete-icon'></RiCloseCircleLine></li>)
let category6 = tasks.filter((b) => b.category_id === 6).map((a)=> <li key = {a.id} class = "todo-row">  {a.name} Priority: {a.priority} {a.category_id.name}   <BsFillArrowUpCircleFill onClick = {()=> upPriority(a)} className = 'up-icon'></BsFillArrowUpCircleFill> <BsFillArrowDownCircleFill onClick = {()=> downPriority(a)} className = 'down-icon'>⬇️</BsFillArrowDownCircleFill><RiCloseCircleLine onClick={()=> handleDelete(a)} className = 'delete-icon'></RiCloseCircleLine></li>)
let category7 = tasks.filter((b) => b.category_id === 7).map((a)=> <li key = {a.id} class = "todo-row">  {a.name} Priority: {a.priority} {a.category_id.name}   <BsFillArrowUpCircleFill onClick = {()=> upPriority(a)} className = 'up-icon'></BsFillArrowUpCircleFill> <BsFillArrowDownCircleFill onClick = {()=> downPriority(a)} className = 'down-icon'>⬇️</BsFillArrowDownCircleFill><RiCloseCircleLine onClick={()=> handleDelete(a)} className = 'delete-icon'></RiCloseCircleLine></li>)
let category8 = tasks.filter((b) => b.category_id === 8).map((a)=> <li key = {a.id} class = "todo-row">  {a.name} Priority: {a.priority} {a.category_id.name}   <BsFillArrowUpCircleFill onClick = {()=> upPriority(a)} className = 'up-icon'></BsFillArrowUpCircleFill> <BsFillArrowDownCircleFill onClick = {()=> downPriority(a)} className = 'down-icon'>⬇️</BsFillArrowDownCircleFill><RiCloseCircleLine onClick={()=> handleDelete(a)} className = 'delete-icon'></RiCloseCircleLine></li>)
let category9 = tasks.filter((b) => b.category_id === 9).map((a)=> <li key = {a.id} class = "todo-row">  {a.name} Priority: {a.priority} {a.category_id.name}   <BsFillArrowUpCircleFill onClick = {()=> upPriority(a)} className = 'up-icon'></BsFillArrowUpCircleFill> <BsFillArrowDownCircleFill onClick = {()=> downPriority(a)} className = 'down-icon'>⬇️</BsFillArrowDownCircleFill><RiCloseCircleLine onClick={()=> handleDelete(a)} className = 'delete-icon'></RiCloseCircleLine></li>)
let category10 = tasks.filter((b) => b.category_id === 10).map((a)=> <li key = {a.id} class = "todo-row">  {a.name} Priority: {a.priority} {a.category_id.name}   <BsFillArrowUpCircleFill onClick = {()=> upPriority(a)} className = 'up-icon'></BsFillArrowUpCircleFill> <BsFillArrowDownCircleFill onClick = {()=> downPriority(a)} className = 'down-icon'>⬇️</BsFillArrowDownCircleFill><RiCloseCircleLine onClick={()=> handleDelete(a)} className = 'delete-icon'></RiCloseCircleLine></li>)
let category11 = tasks.filter((b) => b.category_id === 11).map((a)=> <li key = {a.id} class = "todo-row">  {a.name} Priority: {a.priority} {a.category_id.name}   <BsFillArrowUpCircleFill onClick = {()=> upPriority(a)} className = 'up-icon'></BsFillArrowUpCircleFill> <BsFillArrowDownCircleFill onClick = {()=> downPriority(a)} className = 'down-icon'>⬇️</BsFillArrowDownCircleFill><RiCloseCircleLine onClick={()=> handleDelete(a)} className = 'delete-icon'></RiCloseCircleLine></li>)


return (
        <div class = "user-app">

        <h1>
          Welcome {userName}!
        </h1>

        <h1>Add A New Task!</h1>

{/* done1 */}

      <Form onSubmit={(e)=> handleSubmit(e)}>
      <select className='user-input-num2' name="selectList" id="selectList">
        <option value="Bathroom">Bathroom</option>
        <option value="Kitchen">Kitchen</option>
        <option value="Master Bedroom">Master Bedroom</option>
        <option value="Guest BedRoom">Guest BedRoom</option>
        <option value="Patio">Patio</option>
        <option value="Garage">Garage</option>
        <option value="Basement">Basement</option>
        <option value="Frontyard">Frontyard</option>
        <option value="Backyard">Backyard</option>
        <option value="Car">Car</option>
    </select>

    <select className = 'user-input-num' name="selectList" id="selectList">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>

    <label>
      <input className='user-input3' placeholder='Submit Tasks Here' type="text" name="name" />
    </label>
    
    <Button variant="primary" type="submit" className="todo-button">
      Submit Task
    </Button>
  </Form>
{/* done1 */}


         <h2>BATHROOM:</h2> {category1}
         <h2>KITCHEN:</h2> {category2}
         <h2>LIVING ROOM:</h2> {category3}
         <h2>MASTER BEDROOM:</h2> {category4}
         <h2>GUEST BEDROOOM:</h2> {category5}
         <h2>PATIO:</h2> {category6}
         <h2>GARAGE:</h2> {category7}
         <h2>BASEMENT:</h2> {category8}
         <h2>FRONT YARD:</h2> {category9}
         <h2>BACK YARD:</h2> {category10}
         <h2>CAR:</h2> {category11}

       


        </div>
    )




}


export default User