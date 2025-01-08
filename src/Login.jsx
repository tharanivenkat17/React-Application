import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

export class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //userFields: Holds the values of form inputs
      userFields: {
        email: '',
        password: ''
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
    this.validateForm();
  }

  submitForm(event) {
    event.preventDefault();
    if (this.validateForm()) { // If form is valid
      let fields = {
        email: '',
        password: ''
      };
      const { email, password } = this.state.userFields;
      const data = { email, password };
      // get the data from the db.json and validate whether email is exist or not
      axios.get(`http://localhost:4200/UserDetails?email=${data.email}`).then((response) => {
        if (response.data.length === 0) {
          this.setState({
            errorFields: { email: 'No user found with this email' }
          });
        } else {
          const user = response.data[0];
          if (user.password === data.password) {
            // Successful login
            alert('Login successful!');
            this.setState({
              userFields: fields,
            });
          } else {
            this.setState({
              errorFields: { password: 'Password does not match' }
            });
          }
        }
      }).catch((error) => {
        console.log("Error while verifying user details:", error);
        this.setState({
          errorFields: { email: 'Unable to verify email at this time' }
        });
      });
    }
    // if (this.validateForm()) { //if true all field should be clear
    //   let fields = {
    //     email: '',
    //     password: ''
    //   };
    //   var data = {
    //     "email": this.state.userFields.email,
    //     "password": this.state.userFields.password
    //   }

    //   // get the data from the db.json and validate whether email is exist or not
    //   axios.get(`http://localhost:4200/UserDetails?email=${data.email}`, data).then((response) => {
    //     console.log(response);
    //     // get the data from the db.json and validate whether email is exist or not
    //     axios.get(`http://localhost:4200/UserDetails?password=${data.password}`, data).then((response1) => {
    //       console.log(response1);
    //       if(response['data.email'].length===0 && response1['data.password'].length){

    //       }
    //     })
    //   })

    //   this.setState({
    //     userFields: fields,
    //   });
    //   alert("Form Submitted");
    //   console.log(`
    //     DETAILS ENTERED:
    //         Email: ${this.state.userFields.email}
    //         password: ${this.state.userFields.password}`);
    // }
  }
  validateForm() {
    let field = this.state.userFields;
    let error = {};
    let formValid = true;
    // Email is valid
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/;
    if (!emailPattern.test(field['email'])) {
      formValid = false;
      error['email'] = 'Enter a valid email';
    }
    // password Validation
    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{7,}$/;
    if (!passwordPattern.test(field['password'])) {
      formValid = false;
      error['password'] = `Password must be like "Test123@"`;
    }
    this.setState({
      errorFields: error,
    })
    return formValid;
  }

  render() {
    return (
        <div className='Login'>
          <div className='FlexPage'>
            {/* Image */}
            <div className='Image'>
              <img className='LoginImage' src="https://img.freepik.com/premium-vector/sign-up-concept-illustration-free-vector_269560-12.jpg?semt=ais_hybrid" alt="img" />
            </div>
            <div className='Form'>
              <form onSubmit={this.submitForm} name="form" method='post'>
                <h2>Sign In Form</h2>

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
                <br />
                <div className='button'>
                  <input className="submit" type='submit' value=" Sign In " />
                  <p className='loginbutton'>Click <Link to="/SignUp" >Sign Up</Link> to create your account</p>
                </div>
              </form>
            </div>
          </div>
        </div>

    )
  }
}

export default Login