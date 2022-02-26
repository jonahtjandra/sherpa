import React, { useEffect, useState } from 'react'
import { DestinationCard } from '../Cards/DestinationCard'
import './Destination.css'

export const Destination = () => {
  return (
    <div className='Destination'>
        <div className="title-destination">
            Featured Destinations
        </div>
        <div className="cards-container">
          <div className="card1">
            <DestinationCard img="italy.jpeg" dest="Italy" bgcolor="rgb(137, 151, 80)"/>
          </div>
          <div className="card2"><DestinationCard img="paris.jpeg" dest="Paris" bgcolor="rgb(192, 85, 85)"/></div>
          <div className="card3"><DestinationCard img="whistler.jpeg" dest="Mt.Whistler" bgcolor="rgb(172, 172, 172)"/></div>
          <div className="card4"><DestinationCard img="arizona.png" dest="Arizona" bgcolor="sandybrown"/></div>
        </div>
        {/* <div className="more">Browse more</div> */}
    </div>
  )
}
