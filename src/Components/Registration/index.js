import React, { useEffect, useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import './Registration.scss';

import { Button, TextField } from '@mui/material';

const Registration = (props) => {
    const [user, setUser] = useState({
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = e => {
        const { name, value } = e.target
        console.log(name, value)

        setUser({
            ...user,
            [name]: value
        })
    }

    return (
        <div className="login">
            <div className="login_box">
                <h1>Registration</h1>
                <div className="login_box_inner">
                    <TextField label="Email ID" variant="outlined"
                        name="email"
                        value={user.email}
                        type="email"
                        onChange={handleChange}
                    />
                    <TextField label="Mobile No" type="number" variant="outlined"
                        name="mobile"
                        value={user.mobile}
                        onChange={handleChange}
                    />
                    <TextField label="Password" type="Password" variant="outlined"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                    />
                    <TextField label="Confirm Password" type="Password" variant="outlined"
                        name="confirmpassword"
                        value={user.confirmPassword}
                        onChange={handleChange}
                    />



                    <Button variant="contained">Submit</Button>
                </div>
            </div>
        </div>
    );
}

export default Registration;