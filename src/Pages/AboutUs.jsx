import React from 'react';
import '../Stylesheet/AboutUs.css';

const AboutUs = () => {
  return (
    <div>
      <div className="header">
        <h1>About Us</h1>
      </div>
      <div className="content">
          <p className='paragraph-welcome'>
            Welcome to ToyNest, ToyNest has the perfect toy for every child.
          </p>
          <p className='paragraph-content'>
            Our mission is simple yet profound – to inspire smiles, foster creativity, and make every moment of playtime both fun and meaningful.
            At ToyNest, we believe in the power of toys to ignite imaginations, promote learning, and build lasting memories that children will cherish for years to come.
            We are dedicated to offering a wide range of carefully curated toys that not only entertain but also help children grow, explore, and discover new possibilities.
            Whether through educational play or imaginative adventures, our goal is to make each toy more than just an item – it’s an experience that sparks joy and leaves a lasting impact.
            Thank you for choosing ToyNest, where every toy is designed to create unforgettable moments of fun, connection, and growth for kids of all ages!
          </p>
          <br />
          <br />
        </div>
    </div>
  );
};

export default AboutUs;
