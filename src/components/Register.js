import React from 'react';

const Register = () => {
  return (
    <div>
      <form>
        Enter NEW username:
        <br />
        <input type="text">
        </input>
        <br />
        Enter NEW ps:
        <br />
        <input type="password">
        </input>
        <br />

        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register;