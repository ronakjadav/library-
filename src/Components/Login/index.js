import React, { useEffect, useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import './Login.scss';
import { useNavigate } from "react-router-dom";

import { Button, TextField } from '@mui/material';

const Login = (props) => {
  const navigate = useNavigate();
  const redirect = (url) => {
    navigate(url);
  };



  const [user, setUser] = useState({
    email: "",
    password: "",
});

const handleChange = e => {
    const { name, value } = e.target
  console.log(name, value)
    
    setUser ({ 
        ...user,
        [name]: value
    })
}





  return (
    <div className="login">
      <div className="login_box">
        <h1>Login</h1>
    {console.log("user", user)}
        <div className="login_box_inner">
          <TextField label="Email ID" variant="outlined" 
            name="email"
            value={user.email}
            type="email"
            onChange={handleChange}
          />
          <TextField label="Password" variant="outlined" type="password"
           name="password"
           value={user.password}
           onChange={handleChange}
          />
          <Button variant="contained" onClick={() => redirect("Home")}>Login</Button>
          <span className="links" onClick={() => redirect("Registration")}>Registration</span>
        </div>
      </div>
    </div>
  );
}

export default Login;