const Login = () => {
    return <form className="login-form" id="login-form">
        <h1>Login</h1>
        <input type="email" placeholder="Email" className="input-field"/><br></br>
        <input type="password" placeholder="password" name="" id="" className="input-field"/><br></br>
        <input type="checkbox" id="show-password" name="show-password"/>
        <label htmlFor="show-password">Show Password</label><br></br>
        <button type="submit">Login</button>
        <p>Don't have an account?</p>
        <a href="google.com">Create Account</a>
    </form>;
}



export default Login;