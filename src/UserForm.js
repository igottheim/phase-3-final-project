import { Form, Button } from "react-bootstrap"

function UserForm({handleSubmit}){

 
    return(
      <>
    <Form onSubmit={(e)=> handleSubmit(e)}>
    <label>
      Username:
      <input type="text" name="name" />
    </label>
    <label>
      Password:
      <input type="password" name="name" />
    </label>
    <Button className= "button" variant="primary" type="submit">
        Login
      </Button>
  </Form>




</>
    )


}

export default UserForm



