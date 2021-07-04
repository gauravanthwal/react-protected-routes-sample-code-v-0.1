import React from "react";
import {Link} from 'react-router-dom'

const Register = () => {
  return (
    <div>
      <h3 className="text-center mb-3 mt-3">Register </h3>
      <form style={{ maxWidth: "500px", margin: "0 auto" }}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Name"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Email"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Password"
          />
        </div>
        <div className="btn btn-success">Login</div>
        <br />
        Already have an Account? <Link to='/login'>Login</Link>
      </form>
    </div>
  );
};

export default Register;
