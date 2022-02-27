import './About.css'
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";


export const About = () => {
  const [offsetY, setOffsetY] = useState(0)
  const yChange = offsetY
  const handleScroll = () => {
    if (window.pageYOffset < 100) {
      return
    }
    setOffsetY(window.pageYOffset)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <div className='About' /*style={{ transform: `translateY(${-0.5 * offsetY}px)` }}*/>
      <div className="japan-container" >
        <p className='about_text2'>We believe each trip is a new story. At Sherpa, we are creating a place for you to write your next epic.</p>
        <div id="stage" >
          <img src="japan.webp" alt="" id="spinner" className='story_demo' />
        </div>
      </div>

      <img src="fireworks.jpg" alt="" className='img1' style={{ transform: `translateY(${450 - 0.45 * yChange}px)` }} />
      <p className='about_text1' style={{ right: `${0}px`, transform: `translate(${45}vw, ${350 - 0.65 * yChange}px)` }}>Plan the perfect adventure on one platform and share it with the world 🌎.</p>

      <div className='llama_wrapper' style={{ transform: `translateY(${700 - 0.45 * yChange}px)` }}>
        <img src="llama.webp" alt="" className='llama' />
        <Link to="/story" id="link">
          <div className='start_writing'>Let's Go 🏔</div>
        </Link>
      </div>


      <div className='aboutme_container' style={{ 'opacity': -14.5 + (offsetY / 150), transform: `translateY(${300 - 0.45 * yChange}px)` }}>
        <h2 className='aboutus_header'>Story Writers</h2>

        <div className='japan-container'>
          <img src="rendy.jpeg" alt="" id='rendy' className='aboutme' />
          <img src="jonah.jpg" alt="" id='jonah' className='aboutme' />
          <img src="allen.jpg" alt="" id='allen' className='aboutme' />
        </div>

        <div className="aboutme_text">
          <p id='rendy' className='aboutme_child_text'>Rendy Harris</p>
          <p id='jonah' className='aboutme_child_text'>Jonah Tjandra</p>
          <p id='allen' className='aboutme_child_text'>Allen Shen</p>
        </div>
      </div>

      {/* 
      <div className="japan-container">
        <img src="japan.webp" alt="" className='img1' />
        <p className='about_text3'>At Sherpa, we believe trips are best experienced in stories. Sherpa is a place for you to visualize your next story.
          You can plan the perfect story in one platform and decide if you want to share your story as a guide to the rest of the world.
          We will have services ranging from mapping, tagging, filtering, summarizing and we pipeline our data from different high quality
          rapid APIs. We bring the power of the internet to your fingertips in an all in one platform, so you can efficiently plan your story
          and save time instead of browsing at different platforms and writing badly formatted google docs.
          We are also looking to provide Machine Learning services for us to optimize your story, not only giving you the optimized date
          according to weather and price data but also tracking carbon foot print and calculating optimized routes to take between tagged attractions,
          in order for you to maximize and have the best story.</p>
      </div> */}


      {/* At Sherpa, we believe trips are best experienced in stories. Sherpa is a place for you to visualize your next story.
          You can plan the perfect story in one platform and decide if you want to share your story as a guide to the rest of the world.
          We will have services ranging from mapping, tagging, filtering, summarizing and we pipeline our data from different high quality
          rapid APIs. We bring the power of the internet to your fingertips in an all in one platform, so you can efficiently plan your story
          and save time instead of browsing at different platforms and writing badly formatted google docs.
          We are also looking to provide Machine Learning services for us to optimize your story, not only giving you the optimized date
          according to weather and price data but also tracking carbon foot print and calculating optimized routes to take between tagged attractions,
          in order for you to maximize and have the best story. */}
    </div >
  )
}
