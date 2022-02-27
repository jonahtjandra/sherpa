import React from 'react'
import './Hotels.css'

export const Hotels = (props) => {
  return (
    <div className="hotel">
        <div className="hotel-name">{props.name}</div>
        <img src={props.image} alt="" className="img" />
        <div className="rating">Rating: {props.rating}</div>
        <div className="ranking">Ranking: {props.ranking}</div>
        <div className="reviews">Number of reviews: {props.reviews}</div>
    </div>
  )
}
