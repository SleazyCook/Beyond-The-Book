import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <form>
        Enter username:
        <br />
        <input type="text">
        </input>
        <br />

        Enter ps:
        <br />
        <input type="password">
        </input>
        <br />

        <button type="submit">Login</button>
      </form>
      <div>
        
        <br />
        Don't have an account? 
        <Link to="/register">Click here</Link>
      </div>
    </div>
  )
}

export default Login;