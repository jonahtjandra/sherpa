import React from 'react'
import { postMarker } from '../../services/postMarkers'
import './Hotels.css'

export const Hotels = (props) => {

  function addHotel() {
    postMarker({
        "imageUrl": props.image,
        "hours": [],
        "title": props.name,
        "desc": "no description for now",
        "ranking": props.ranking,
        "lat": props.lat,
        "long": props.long,
        "phone": "",
        "rating": "",
        "reviews": props.reviews
    })
  }

  return (
    <div className="hotel">
       <div className="add-btn-hotels" onClick={()=>addHotel()}>
            Add
        </div>
        <div className="hotel-name">{props.name}</div>
        <img src={props.image} alt="" className="img" />
        <div className="rating">Rating: {props.rating}</div>
        <div className="ranking">Ranking: {props.ranking}</div>
        <div className="reviews">Number of reviews: {props.reviews}</div>
    </div>
  )
}
