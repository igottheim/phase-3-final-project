import { Form, Button } from "react-bootstrap"

function UserLoginForm({handleNewLogin})
{return(
  <Form onSubmit={(e)=> handleNewLogin(e)}>
  <label>
    First Name:
    <input type="text" name="name" />
  </label>
  <label>
    Last Name:
    <input type="text" name="name" />
  </label>
  <label>
    Username:
    <input type="text" name="name" />
  </label>
  <label>
    Password:
    <input type="password" name="name" />
  </label>
  <Button className= "button" variant="primary" type="submit">
      Submit New Login
    </Button>
</Form>

)
}

export default UserLoginForm