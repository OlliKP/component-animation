import React from 'react'
import './Home.css';

const Home = () => {
    return (
      <div className='home-page-container container-fluid d-flex flex-column justify-content-center align-items-center gap-3'>
          <img className="welcome-img img-fluid col-9 col-lg-6" src="https://st4.depositphotos.com/1010735/20860/v/450/depositphotos_208603374-stock-illustration-welcome-poster-spectrum-brush-strokes.jpg" alt="gif of a happy man welcoming the user"/>
          <h1 className='text-center px-2'>to my component-animation prototype</h1>
      </div>
    )
  }

export default Home