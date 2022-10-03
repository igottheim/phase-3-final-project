import { NavLink} from "react-router-dom";

function NavBar()
{

    return(
        <div className="navBarLink">
        <NavLink exact to = "/App" className='navBarLink'> About  </NavLink>
         <span></span>
        <NavLink to = "/User" className='navBarLink'>  UserLogin  </NavLink>
        <span></span>
        <NavLink to = "/UserForm" className='navBarLink'>  User  </NavLink>
        <span></span>
        
       
       
       
      
        </div>
    )

}

export default NavBar