import React, { Component } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Home from './Home';
import Categories from './Categories';
import Login from './Login';
import Cart from './Cart';
import SignUp from './SignUp';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

export class Navigation extends Component {
    render() {
        return (
            <div>
                <div className='Header'>
                    <div>
                        <Link to="/" >ToyNest</Link>
                    </div>
                    <div className='Hover'>
                        <Link to="/Categories">
                            <i class="fa-solid fa-layer-group"></i> Categories
                        </Link> &nbsp;&nbsp;
                        <Link to="/About">
                            <i class="fa-solid fa-circle-info"></i> About us
                        </Link> &nbsp;&nbsp;
                        <Link to="/Cart">
                            <i class="fa-solid fa-cart-shopping"></i> Cart
                        </Link> &nbsp;&nbsp;
                        <Link to="/Login">
                            <i class="fa-solid fa-right-to-bracket"></i> Sign In
                        </Link>
                    </div>
                </div>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Categories" element={<Categories />} />
                    <Route path="/SignUp" element={<SignUp />} />
                    <Route path="/Cart" element={<Cart />} />
                    <Route path="/Login" element={<Login />} />

                </Routes>
            </div>

        )
    }
}

export default Navigation