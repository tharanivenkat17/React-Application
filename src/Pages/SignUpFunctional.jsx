import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Stylesheet/SignUp.css';
import axios from 'axios';

function SignUpFunctional() {
    const [state, setState] = useState({
        userFields: {
            name: '',
            email: '',
            password: '',
            confirmpassword: ''
        },
        errorFields: {},
    });
    const navigate = useNavigate();
// spread operator (...) to quickly copy all part of an existing array or object into another array or object.
    function handleChange(event) {
        const updatedFields = { ...state.userFields };
        updatedFields[event.target.name] = event.target.value;
        setState({ ...state, userFields: updatedFields });
        validateForm();
    }

    function submitForm(event) {
        event.preventDefault();

        if (validateForm()) { 
            const { name, email, password } = state.userFields;
            const data = { name, email, password };

            // get the data from the db.json and validate whether email is exist or not
            axios.get(`http://localhost:4200/UserDetails?email=${data.email}`).then((response) => {
                console.log(response)
                    //if the email is already exist length>0 otherwise length==0. if length=0 data post to the db.json
                    if (response['data'].length === 0) {
                        axios.post(`http://localhost:4200/UserDetails`, data).then((response1) => {
                            console.log(response1)
                            alert("Sign-Up Form Submitted Successfully");
                            setState({
                                userFields: { name:'', email: '', password: '', confirmpassword: '' }, 
                                errorFields: {}
                            });
                            navigate('/Login')
                        })

                    } else {
                        alert("Already Exists Email, Please Login")
                        navigate('/Login')
                    }
                })
                .catch((error) => {
                    console.log("Error while verifying user details:", error);
                    setState(prevState => ({
                        ...prevState,
                        errorFields: { email: 'Unable to verify email at this time' }
                    }));
                });
        }
    }

    function validateForm() {
        let field = state.userFields;
        let error = {};
        let formValid = true;

        const namePattern = /^[a-zA-Z]{4,}$/;
        if (!namePattern.test(field['name'])) {
            formValid = false;
            error['name'] = 'Name must be at least 4 characters long';
        }

        const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}$/;
        if (!emailPattern.test(field['email'])) {
            formValid = false;
            error['email'] = 'Please enter a valid email address';
        }

        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{7,}$/;
        if (!passwordPattern.test(field['password'])) {
            formValid = false;
            error['password'] = 'Password must be at least 7 characters long, including uppercase, lowercase, number, and special character';
        }

        if (!field['password'] === field['confirmpassword']) {
            formValid = false;
            error['confirmpassword'] = 'Confirm Password must match the Password';
        }

        setState(prevState => ({
            ...prevState,
            errorFields: error
        }));

        return formValid;
    }

    return (
        <div className='SignUp'>
            <div className='FlexPage'>
                <div className='Image'>
                    <img className='SignUpImage' src="https://img.freepik.com/premium-vector/sign-up-smartphone-man-near-mobile-phone-enters-login-password-authorizations_1002658-5145.jpg?semt=ais_hybrid" alt="img" />
                </div>
                <div className='Form'>
                    <form onSubmit={submitForm} name="form" method='post'>
                        <h2>Sign-Up Form</h2>
                        <div className='Flex'>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                className="border"
                                name="name"
                                id='name'
                                value={state.userFields.name}
                                placeholder='Enter Name'
                                onChange={handleChange}
                                required
                            />
                            <span>{state.errorFields.name}</span>
                        </div>
                        <div className='Flex'>
                            <label htmlFor="email">Email Id</label>
                            <input
                                type="text"
                                className="border"
                                name="email"
                                id='email'
                                value={state.userFields.email}
                                placeholder='Enter Email'
                                onChange={handleChange}
                                required
                            />
                            <span>{state.errorFields.email}</span>
                        </div>
                        <div className='Flex'>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="border"
                                name="password"
                                id='password'
                                value={state.userFields.password}
                                placeholder='Enter Password'
                                onChange={handleChange}
                                required
                            />
                            <span>{state.errorFields.password}</span>
                        </div>
                        <div className='Flex'>
                            <label htmlFor="confirmpassword">Confirm Password</label>
                            <input
                                type="password"
                                className="border"
                                name="confirmpassword"
                                id='confirmpassword'
                                value={state.userFields.confirmpassword}
                                placeholder='Enter Confirm Password'
                                onChange={handleChange}
                                required
                            />
                            <span>{state.errorFields.confirmpassword}</span>
                        </div>
                        <br />
                        <div className='button'>
                            <input className="submit" type='submit' value="Sign Up" />
                            <p className='loginbutton'>Already have an account? <Link to="/Login">Sign In</Link> here</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUpFunctional;
