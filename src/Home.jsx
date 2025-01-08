import React from 'react';
import './Home.css';

const toyData = [
  { id: 1, name: 'Building Blocks', price: 249, image: 'https://img.freepik.com/free-photo/business-concept-with-wooden-sticks_23-2147986598.jpg?ga=GA1.1.1399380847.1735539146&semt=ais_hybrid' },
  { id: 2, name: 'Train', price: 599, image: 'https://media.istockphoto.com/id/184919425/photo/antique-steam-engine-and-coal-car-model-train-copy-space.jpg?s=612x612&w=0&k=20&c=xRuP0LqZhRzdIK_xgJ7RkrYza4W5VSRACsqJ3yhTTRQ=' },
  { id: 3, name: 'Toy Car', price: 299, image: 'https://img.freepik.com/premium-photo/color-toy-car_168508-930.jpg?ga=GA1.1.1399380847.1735539146&semt=ais_hybrid' },
  { id: 4, name: 'Teddy Bear', price: 799, image: 'https://img.freepik.com/free-photo/fluffy-toy-texture-close-up_23-2149686878.jpg?ga=GA1.1.1399380847.1735539146&semt=ais_hybrid' },
];

const Home = () => {
  return (
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
  );
}

export default Home;
