import { Link } from "react-router-dom";
const Signup = () => {
    return <form className="login-form" id="login-form">
        <h1>Sign Up</h1>
        <input type="text" placeholder="first name" className="input-field"/><br></br>
        <input type="text" placeholder="last name" className="input-field"/><br></br>
        <input type="email" placeholder="Email" className="input-field"/><br></br>
        <input type="password" placeholder="password" name="" id="" className="input-field"/><br></br>
        <input type="checkbox" id="show-password" name="show-password"/>
        <label htmlFor="show-password">Show Password</label><br></br>
        <button type="submit">Login</button>
        <p>Already have an Account?</p>
        <Link to="/login">Login</Link>
    </form>;
}



export default Signup;