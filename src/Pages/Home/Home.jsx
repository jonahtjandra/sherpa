import React, { useEffect, useState } from 'react'
import './Home.css'

export const Home = () => {
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => {
    setOffsetY(window.pageYOffset)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="home">
        <div className="img-wrapper">
            <img src="bg-light.jpg" className="title-img" />
            <div className="title">Stories everywhere you go</div>
        </div>
    </div>
  )
}
