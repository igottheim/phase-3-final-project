import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap"
import UserForm from "./UserForm";



function User({user, tasks, handleDelete, upPriority, downPriority, handleSubmit}){

  console.log(tasks)
    
  
let category1 = tasks.filter((b) => b.category_id === 1).map((a)=> <li key = {a.id}> {a.name} Priority: {a.priority} {a.category_id.name} <button onClick = {()=> upPriority(a)}> ⬆️</button> <button onClick = {()=> downPriority(a)}>⬇️</button><button onClick={()=> handleDelete(a)}>DELETE</button></li>)
let category2 = tasks.filter((b) => b.category_id === 2).map((a)=> <li key = {a.id}>  {a.name} Priority: {a.priority} {a.category_id.name}   <button onClick = {()=> upPriority(a)}> ⬆️</button> <button onClick = {()=> downPriority(a)}>⬇️</button><button onClick={()=> handleDelete(a)}>DELETE</button></li>)
let category3 = tasks.filter((b) => b.category_id === 3).map((a)=> <li key = {a.id}>  {a.name} Priority: {a.priority} {a.category_id.name}   <button onClick = {()=> upPriority(a)}> ⬆️</button> <button onClick = {()=> downPriority(a)}>⬇️</button><button onClick={()=> handleDelete(a)}>DELETE</button></li>)
let category4 = tasks.filter((b) => b.category_id === 4).map((a)=> <li key = {a.id}>  {a.name} Priority: {a.priority} {a.category_id.name}  <button onClick = {()=> upPriority(a)}> ⬆️</button> <button onClick = {()=> downPriority(a)}>⬇️</button><button onClick={()=> handleDelete(a)}>DELETE</button></li>)
let category5 = tasks.filter((b) => b.category_id === 5).map((a)=> <li key = {a.id}>  {a.name} Priority: {a.priority} {a.category_id.name}   <button onClick = {()=> upPriority(a)}> ⬆️</button> <button onClick = {()=> downPriority(a)}>⬇️</button><button onClick={()=> handleDelete(a)}>DELETE</button></li>)
let category6 = tasks.filter((b) => b.category_id === 6).map((a)=> <li key = {a.id}>  {a.name} Priority: {a.priority} {a.category_id.name}   <button onClick = {()=> upPriority(a)}> ⬆️</button> <button onClick = {()=> downPriority(a)}>⬇️</button><button onClick={()=> handleDelete(a)}>DELETE</button></li>)
let category7 = tasks.filter((b) => b.category_id === 7).map((a)=> <li key = {a.id}>  {a.name} Priority: {a.priority} {a.category_id.name}   <button onClick = {()=> upPriority(a)}> ⬆️</button> <button onClick = {()=> downPriority(a)}>⬇️</button><button onClick={()=> handleDelete(a)}>DELETE</button></li>)
let category8 = tasks.filter((b) => b.category_id === 8).map((a)=> <li key = {a.id}>  {a.name} Priority: {a.priority} {a.category_id.name}   <button onClick = {()=> upPriority(a)}> ⬆️</button> <button onClick = {()=> downPriority(a)}>⬇️</button><button onClick={()=> handleDelete(a)}>DELETE</button></li>)
let category9 = tasks.filter((b) => b.category_id === 9).map((a)=> <li key = {a.id}>  {a.name} Priority: {a.priority} {a.category_id.name}   <button onClick = {()=> upPriority(a)}> ⬆️</button> <button onClick = {()=> downPriority(a)}>⬇️</button><button onClick={()=> handleDelete(a)}>DELETE</button></li>)
let category10 = tasks.filter((b) => b.category_id === 10).map((a)=> <li key = {a.id}>  {a.name} Priority: {a.priority} {a.category_id.name}   <button onClick = {()=> upPriority(a)}> ⬆️</button> <button onClick = {()=> downPriority(a)}>⬇️</button><button onClick={()=> handleDelete(a)}>DELETE</button></li>)
let category11 = tasks.filter((b) => b.category_id === 11).map((a)=> <li key = {a.id}>  {a.name} Priority: {a.priority} {a.category_id.name}   <button onClick = {()=> upPriority(a)}> ⬆️</button> <button onClick = {()=> downPriority(a)}>⬇️</button><button onClick={()=> handleDelete(a)}>DELETE</button></li>)


return (
        <>
       
        <div> Tasks for {user}
        <ul>BATHROOM: {category1}</ul>
        <ul>KITCHEN: {category2}</ul>
        <ul>LIVING ROOM: {category3}</ul>
        <ul>MASTER BEDROOM: {category4}</ul>
        <ul>GUEST BEDROOOM: {category5}</ul>
        <ul>PATIO: {category6}</ul>
        <ul>GARAGE: {category7}</ul>
        <ul>BASEMENT: {category8}</ul>
        <ul>FRONT YARD: {category9}</ul>
        <ul>BACK YARD: {category10}</ul>
        <ul>CAR: {category11}</ul>
        </div>
       

<span> ADD A NEW TASK!</span>
        <Form onSubmit={(e)=> handleSubmit(e)}>
        <select name="selectList" id="selectList">
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
    <label>
      TASK:
      <input type="text" name="name" />
    </label>
    <select name="selectList" id="selectList">
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
    <Button className= "button" variant="primary" type="submit">
        SUBMIT TASK
      </Button>
  </Form>
        </>
    )




}


export default User