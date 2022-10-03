import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import UserForm from "./UserForm";


function User({user}){

    return (
        <>
        <h1 id= "userTitle"> USERS </h1>
        <div> {user}</div>
       
        </>
    )




}


export default User