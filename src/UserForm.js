import { Form, Button } from "react-bootstrap"

function UserForm({handleSubmit}){

 
    return(
      <>
    <Form onSubmit={(e)=> handleSubmit(e)}>
      <div className= 'user-app-reg-1'>
    <h1>Login Here:</h1>
    <h1>
    <label>
   
      <input className='user-input6' type="text" name="name" placeholder="Username" />
    </label>
    <label>

      <input className='user-input6' type="password" name="name" placeholder="Password"/>
    </label>
    <Button className= "todo-button" variant="primary" type="submit">
        Login
      </Button>
      </h1>
      </div>
  </Form>




</>
    )


}

export default UserForm



