import { NavLink, Redirect} from "react-router-dom";

function NavBar()
{

    return(
        <div className="navBarLink">
       
        <NavLink to = "/UserForm" className='navBarLink'>  User  </NavLink>
        <span></span>
        <NavLink to = "/User" className='navBarLink'>  UserLogin  </NavLink>
        <span></span>
        </div>
    )

}

export default NavBar