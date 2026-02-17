import { Link, NavLink } from 'react-router';
const Navbar=()=>{

    const links=
    <>
    <li><NavLink to='/'>Home</NavLink></li>       
    <li><NavLink to='/plant'>Products</NavLink></li>       
    <li><Link to='/myprofile'>About</Link></li> 
    <li><Link to='/myprofile'>Contacts</Link></li> 
</>
return(

)
}