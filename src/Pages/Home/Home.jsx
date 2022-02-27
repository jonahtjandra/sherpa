import React, { useEffect, useState } from 'react'
import './Home.css'

export const Home = () => {
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      return
    }
    setOffsetY(window.pageYOffset)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="home">
      <div className="img-wrapper">
        <div className="parallax-container">

          <img src="/parallax_bg/bg1.png" alt="" className='bg1' style={{ transform: `translateY(${0.5 * offsetY}px)` }} />
          <img src="/parallax_bg/rock1.png" alt="" className='rock1' style={{ transform: `translateY(${-20 + (0.7 * offsetY)}px)` }} />

          <img src="/parallax_bg/girl1.png" alt="" className='girl1' style={{ transform: `translateY(${-10 + (0.6 * offsetY)}px)` }} />

        </div>

        <div className="title">Write your next story.</div>
      </div>
    </div>
  )
}
