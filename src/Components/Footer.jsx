import React from 'react'
import '../Stylesheet/Footer.css'

function Footer() {
  return (
    <div className="about">
      <h2>About ToyNest</h2>
      <p>
        Our mission is to spread joy by providing toys that inspire creativity, spark imagination, and bring smiles to children of all ages.
      </p>
      <p>
        Location: 17, Tidel Park, Ground Floor, South Block, Taramani, Chennai
      </p>
      <p className='i-footer'>
        <i class="fa-brands fa-x-twitter"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-youtube"></i>
        <i class="fa-brands fa-linkedin-in"></i>
        <i class="fa-brands fa-square-facebook"></i>
      </p>
      <hr />
      <p>&copy; 2024 ToyNest. All Rights Reserved.</p>
    </div>
  )
}

export default Footer