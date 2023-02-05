import React from "react";
import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
const sign = require("jwt-encode");
const secret = "Create2022!";

export const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};

export const clearAccessToken = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("userDetail");
  localStorage.clear();
};

export const setAccessToken = (token) => {
  localStorage.setItem("accessToken", token);
};

export const isLoggedIn = () => {
  const accessToken = getAccessToken();
  return !!accessToken;
};

export const RequireAuth = ({ children }) => {
  return isLoggedIn() ? children : <Navigate to="/" replace />;
};

export const LoginedIn = ({ children }) => {
  return !isLoggedIn() ? children : <Navigate to="/Home" replace />;
};

export const getUserDetail = () => {
  const jwt = localStorage.getItem("userDetail");
  if (jwt && jwt !== null && jwt !== "") {
    return jwt_decode(jwt);
  }
  return false;
};

export const setUserDetail = (userDetail) => {
  const jwt = sign(userDetail, secret);
  localStorage.setItem("userDetail", jwt);
};