import React from 'react'
import '../Stylesheet/Categories.css';
import categoriesData from '../Const/Categories';


function Categories() {
  return (
    <div className='Categories'>
      <div className="featured-categoriess">
          <h2>Categories of Toys</h2>
          <div className="categories-list">
            {categoriesData.map((categories) => (
              <div key={categories.id} className="categories-item">
                <img src={categories.image} alt={categories.name} />
                <h3>{categories.name}</h3>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Categories
