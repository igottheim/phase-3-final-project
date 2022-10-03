import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import UserForm from "./UserForm";


function User({users, handleClick}){

    let new_array = users.map((a) => <h1 id= "user" onClick = {()=>handleClick(a)}>{a.first_name} {a.last_name} </h1>)

    return (
        <>
        <h1 id= "userTitle"> USERS </h1>
        <div> {new_array}</div>
        </>
    )




}


export default User