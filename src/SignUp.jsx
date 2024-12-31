import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './SignUp.css';

export class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //userFields: Holds the values of form inputs
            userFields: {
                name: '',
                email: '',
                password: '',
                confirmpassword: ''
            },
            errorFields: {},
        };
        // bind(this) is used in class components to bind the method to the current instance of the class.
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleChange(event) {
        let field = this.state.userFields;
        field[event.target.name] = event.target.value //field[name]= value entered in value
        this.setState({
            userFields: field
        })
    }

    submitForm(event) {
        event.preventDefault();
        if (this.validateForm()) { //if true all field should be clear
            let fields = {
                name: '',
                email: '',
                password: '',
                confirmpassword: ''
            };

            this.setState({
                userFields: fields,
            });
            alert("Form Submitted");
            console.log(`
            DETAILS ENTERED:
                Name: ${this.state.userFields.name}
                Email: ${this.state.userFields.email}
                password: ${this.state.userFields.password}
                confirmpassword: ${this.state.userFields.confirmpassword}`);
        }
    }
    validateForm() {
        let field = this.state.userFields;
        let error = {};
        let formValid = true;
        // name must be alphabetic
        var namePattern = /^[a-zA-Z]+$/;
        if (!namePattern.test(field['name'])) {
            formValid = false;
            error['name'] = 'name must only contain alphabets';
        }
        // Email is valid
        var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/;
        if (!emailPattern.test(field['email'])) {
            formValid = false;
            error['email'] = 'Enter a valid email';
        }
        // password Validation
        var passwordPattern = /^[a-zA-Z0-9!@#$%^&*]{7,}$/;
        if (!passwordPattern.test(field['password'])) {
            formValid = false;
            error['password'] = `password must contain:
                                    upper & lower letters
                                    Include a number
                                    Contain a special character
                                    Be at least 7 characters long
                                `;
        }
        // confirmpassword must be alphabetic
        // var confirmpasswordPattern = /^[a-zA-Z]+$/;

        if (!((field['password']) === (field['confirmpassword']))) {
            formValid = false;
            error['confirmpassword'] = 'confirmpassword must match password';
        }
        this.setState({
            errorFields: error,
        })
        return formValid;
    }
    render() {
        return (
            <div className='SignUp'>
                <div className='FlexPage'>
                    <div className='Image'>
                        <img className='SignUpImage' src="https://img.freepik.com/premium-vector/sign-up-smartphone-man-near-mobile-phone-enters-login-password-authorizations_1002658-5145.jpg?semt=ais_hybrid" alt="img" />
                    </div>
                    <div className='Form'>
                        <form onSubmit={this.submitForm} name="form" method='post'>
                            <h2>Sign-Up Form</h2>
                            <div className='Flex'>
                                <label htmlFor="name">User Name</label>
                                <input type="text"
                                    className="border"
                                    name="name"
                                    id='name'
                                    value={this.state.userFields.name}
                                    placeholder='Enter User Name'
                                    onChange={this.handleChange}
                                    required
                                />
                                <span>{this.state.errorFields.name}</span>
                            </div>
                            <div className='Flex'>
                                <label htmlFor="email">Email Id</label>
                                <input type="text"
                                    className="border" //css
                                    name="email" //input value
                                    id='email' //unique identification value
                                    value={this.state.userFields.email} //binding
                                    placeholder='Enter Email'
                                    onChange={this.handleChange} //handle the change in the input
                                    required //field should not be empty
                                />
                                <span>{this.state.errorFields.email}</span>
                            </div>
                            <div className='Flex'>
                                <label htmlFor="password">Password</label>
                                <input type="password"
                                    className="border"
                                    name="password"
                                    id='password'
                                    value={this.state.userFields.password}
                                    placeholder='Enter Password'
                                    onChange={this.handleChange}
                                    required
                                />
                                <span>{this.state.errorFields.password}</span>
                            </div>
                            <div className='Flex'>
                                <label htmlFor="confirmpassword">Confirm Password</label>
                                <input type="password"
                                    className="border"
                                    name="confirmpassword"
                                    id='confirmpassword'
                                    value={this.state.userFields.confirmpassword}
                                    placeholder='Enter Confirm Password'
                                    onChange={this.handleChange}
                                    required
                                />
                                <span>{this.state.errorFields.confirmpassword}</span>
                            </div>
                            <br />
                            <div className='button'>
                                <input className="submit" type='submit' value=" Sign Up " />
                                <p className='loginbutton'>Already have an account? <Link to="/Login" >Sign In</Link> here</p>
                            </div>
                        </form >
                    </div >
                </div >
            </div>

        )
    }
}
export default SignUp