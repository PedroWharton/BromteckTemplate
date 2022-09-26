import React from 'react'
import '../stylesheets/components/Banner.scss'

export default function NewBanner() {
  return (
    <header className='banner'>
        <div className="banner-container">
          <div className='banner-contents'>
              <h1 className='banner-title'>
                  Westworld
              </h1>
              <div className='banner-buttons'>
                  <button className="banner-button">Play</button>
                  <button className="banner-button">My List</button>
              </div>

              <h1 className="banner-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi impedit perferendis architecto libero consectetur repudiandae
              </h1>
          </div>
          <img className='banner-image' src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2016/10/WESTWORLD_2.png?w=1000&quality=60&strip=all&ssl=1" alt="Banner image" />
        </div>

        <div className="banner--fadeBottom"/>
    </header>
  )
}
