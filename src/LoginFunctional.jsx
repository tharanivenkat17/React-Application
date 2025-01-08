import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

function LoginFunctional() {
    const [state, setState] = useState({
        userFields: {
            email: '',
            password: ''
        },
        errorFields: {},
    });
    const navigate = useNavigate()
// spread operator (...) to quickly copy all part of an existing array or object into another array or object.
    function handleChange(event) {
        const updatedFields = { ...state.userFields };
        updatedFields[event.target.name] = event.target.value;

        setState({
            ...state,
            userFields: updatedFields
        });
        validateForm();  // You can call validation immediately after every change.
    }

    function submitForm(event) {
        event.preventDefault();

        if (validateForm()) { // Only submit if form is valid
            const { email, password } = state.userFields;
            const data = { email, password };

            // Make API call to validate user details
            axios.get(`http://localhost:4200/UserDetails?email=${data.email}`)
                .then((response) => {
                    if (response.data.length === 0) {
                        setState(prevState => ({
                            ...prevState,
                            errorFields: { email: 'No user found with this email' }
                        }));
                    } else {
                        const user = response.data[0];
                        if (user.password === data.password) {
                            // Successful login
                            alert('Login successful!');
                            navigate('/')
                            setState({
                                userFields: { email: '', password: '' }, // Clear the fields
                                errorFields: {} // Reset error fields
                            });
                        } else {
                            setState(prevState => ({
                                ...prevState,
                                errorFields: { password: 'Password does not match' }
                            }));
                        }
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
        const field = state.userFields;
        const error = {};
        let formValid = true;

        // Email Validation
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/;
        if (!emailPattern.test(field['email'])) {
            formValid = false;
            error['email'] = 'Enter a valid email';
        }

        // Password Validation (at least 7 characters, 1 uppercase, 1 number, and 1 special char)
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{7,}$/;
        if (!passwordPattern.test(field['password'])) {
            formValid = false;
            error['password'] = 'Password must be like "Test123@"';
        }

        setState(prevState => ({
            ...prevState,
            errorFields: error,
        }));

        return formValid;
    }

    return (
        <div className='Login'>
            <div className='FlexPage'>
                {/* Image */}
                <div className='Image'>
                    <img className='LoginImage' src="https://img.freepik.com/premium-vector/sign-up-concept-illustration-free-vector_269560-12.jpg?semt=ais_hybrid" alt="img" />
                </div>
                <div className='Form'>
                    <form onSubmit={submitForm} name="form" method='post'>
                        <h2>Sign In Form</h2>

                        <div className='Flex'>
                            <label htmlFor="email">Email Id</label>
                            <input
                                type="text"
                                className="border"
                                name="email"
                                id="email"
                                value={state.userFields.email}
                                placeholder="Enter Email"
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
                                id="password"
                                value={state.userFields.password}
                                placeholder="Enter Password"
                                onChange={handleChange}
                                required
                            />
                            <span>{state.errorFields.password}</span>
                        </div>

                        <br />
                        <div className='button'>
                            <input className="submit" type='submit' value=" Sign In " />
                            <p className='loginbutton'>
                                Click <Link to="/SignUp">Sign Up</Link> to create your account
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginFunctional;
