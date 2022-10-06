import { Form, Button } from "react-bootstrap"

function UserLoginForm({handleNewLogin})
{return(
  <Form onSubmit={(e)=> handleNewLogin(e)}>
    <div className = "user-app-reg">
    <h1>Register Here:</h1>
  <h1>
  <label>
    
    <input className='user-input6' type="text" name="name" placeholder="Name"/>
  </label>
  <label>
  
    <input className='user-input6' type="text" name="name" placeholder="Last Name" />
  </label>
  <label>
  
    <input className='user-input6' type="text" name="name" placeholder="Username"/>
  </label>
  <label>

    <input className='user-input6' type="password" name="name" placeholder="Password"/>
  </label>
  <Button className= "todo-button" variant="primary" type="submit">
      Sign Up!
    </Button>
    </h1>
    </div>
</Form>

)
}

export default UserLoginForm