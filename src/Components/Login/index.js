import React, { useEffect, useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import './Login.scss';
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { Button, TextField } from '@mui/material';


import { isEmpty } from "lodash";
// import Loader from "../../../../CommonComponent/Loader";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import * as UserAction from "../../action";
// import Notification from "../Notification";


const Login = (props) => {
  const navigate = useNavigate();
  const redirect = (url) => {
    navigate(url);
  };

  const [isVisble, setIsVisible] = useState(false);
  const [loginDetails, setLoginDetails] = useState({
    userName: "",
    password: "",
  });

  const hotelReducer = useSelector((state) => ({
    token: state.hotelReducer.token,
    loading: state.hotelReducer.loading,
    userDetail: state.hotelReducer.userDetail,
    error_msg: state.hotelReducer.error_msg,
  }));

  useEffect(() => {
    if (!isEmpty(hotelReducer.token)) {
      redirect("/Home");
    }
  }, [hotelReducer.token]);

  const handleChange = (event) => {
    const field = event.target.name;
    let commonData = { ...loginDetails };
    commonData[field] = event.target.value;
    return setLoginDetails(commonData);
  };

  const login = () => {
    props.actions.userAction.login(loginDetails);
  };

  const handleClickShowPassword = () => {
    setIsVisible(!isVisble);
  };



  return (
    <div className="login">
      {/* <Notification /> */}
      <div className="login_box">
        <h1>Login</h1>
        
        
        <ValidatorForm
           className="login_box_inner"
            onSubmit={() => login()}
            autoComplete="off"
          >
        
        
        
        
        <TextValidator
                  sx={{ width: "100%" }}
                  name="userName"
                  type="text"
                  value={loginDetails.userName}
                  validators={["required"]}
                  onChange={handleChange}
                  errorMessages={["Email is required"]}
                />





         <TextValidator
                  sx={{ width: "100%" }}
                  name="password"
                  value={loginDetails.password}
                  validators={["required"]}
                  onChange={handleChange}
                  //type="password"
                  type={isVisble ? "text" : "password"}
                  errorMessages={["Password is required"]}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {isVisble ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
          <Button type="submit" variant="Log In">Login</Button>





          
          <span className="links" onClick={() => redirect("Registration")}>Registration</span>
        </ValidatorForm>
      </div>
      {/* {hotelReducer.loading && <Loader />} */}
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  actions: {
    userAction: bindActionCreators(UserAction, dispatch),
  },
});

export default connect(null, mapDispatchToProps)(Login);