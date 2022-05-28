import { Link } from "react-router-dom";


const Navbar = () => {
    return <nav>
    <ul>
      <li><Link className="nav" to="/home">Home</Link></li>
      <li><Link  className="nav" to="/login">Login</Link></li>
      <li><Link className="nav" to="/signup" >Sign Up</Link></li>
      <li><Link className="nav" to="/admin" >Admin</Link></li>
    </ul>
  </nav>;
}


export default Navbar;