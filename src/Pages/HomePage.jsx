import React from 'react';
import '../Stylesheet/Home.css';
import toyData from '../Const/Home.jsx';

const Home = () => {
  return (
    <div>
      <div className="home-page">
        <div className="banner">
          <h1>Welcome to ToyNest!</h1>
          <p>Discover the perfect toy for every child – where fun, learning, and imagination come to life!</p>
        </div>

        <div className="featured-toys">
          <h2>Featured Toys</h2>
          <div className="toy-list">
            {toyData.map((toy) => (
              <div key={toy.id} className="toy-item">
                <img src={toy.image} alt={toy.name} />
                <h3>{toy.name}</h3>
                <p>₹{toy.price}</p>
                <button className="add-to-cart-button">Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
