import './About.css'
import React, { useEffect, useState } from 'react'

export const About = () => {
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => {
    setOffsetY(window.pageYOffset)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <div className='About'>
      {/* <img src="japan.webp" alt="" /> */}
      {/* <img style={{ borderRadius: '15px', transform: `translate(${0.377 * offsetY}px)` }} src="bg.jpeg" alt="" className="bg" />
      <div className="logo-container" style={{ transform: `translate(-${0.377 * offsetY}px)` }}>
        <div className="sherpa">
          SHERPA 🐑
        </div>
        <div className="spelling">[ sher-puh, shur- ]</div>
      </div> */}
    </div>
  )
}
