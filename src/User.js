import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import UserForm from "./UserForm";


function User({user, tasks, handleDelete, upPriority, downPriority}){

  
    
  
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
       
        </>
    )




}


export default User