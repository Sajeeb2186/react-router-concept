import { Link } from "react-router-dom";


export default function Header() {
  return (

   
    
    <div>
        <span>My website</span>
        <nav>
        
        <Link  to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link  to="/about">About</Link>
        <Link  to="/contact">Contact</Link> 


       
    </nav>
    </div>
  )

  
}
