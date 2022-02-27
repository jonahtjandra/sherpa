import React from 'react'
import { deleteMarkersData } from '../../services/deleteMarkers'
import './Overviewresto.css'

export const Overviewresto = (props) => {
    function getHours(openTime, closeTime) {
        const open_hr24 = Math.floor(openTime/60) % 24
        const open_min = (openTime/60 - Math.floor(openTime/60))*60
        const close_hr24 = Math.floor(closeTime/60) % 24
        const close_min = (closeTime/60 - Math.floor(closeTime/60))*60
        if (close_hr24 == 24) closeTime = 0
        const open_hr = open_hr24%12
        const close_hr = close_hr24%12
        let closePM = false
        if (close_hr > 12) {
            closePM = true
        }
        let openPM = false
        if (openPM > 12) {
            openPM = true
        }
        let o_hr = open_hr.toString()
        let o_min = open_min.toString()
        let c_hr = close_hr.toString()
        let c_min = close_min.toString()
        console.log(o_hr)
        if (o_hr.length < 2 && openPM) {
            o_hr =  "0" + o_hr
        }
        if (o_min.length < 2) {
            o_min = "0" + o_min
        }
        if (c_hr.length < 2 && closePM) {
            c_hr =  "0" + c_hr
        }
        if (c_min.length < 2) {
            c_min = "0" + c_min
        }
        const res = o_hr + ":" + o_min + (open_hr24 < 12 ? "AM" : "PM") + " - " + c_hr + ":" + c_min + (close_hr24 < 12 ? "AM" : "PM")
        return res
    }

    // function addRestaurant() {
    //     let hours = []
    //     let weeks = ["Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday", "Sunday"]
    //     for (let i = 0; i < 7; ++i) {
    //         hours.push(props.hours[0] && props.hours[0].length != 0 ? `${weeks[i]}: ${getHours(props.hours[0][0].open_time, props.hours[0][0].close_time)}` : `${weeks[i]}: Closed`)
    //     }
    //     postMarker({
    //         "imageUrl": props.image,
    //         "hours": hours,
    //         "title": props.name,
    //         "desc": "no description for now",
    //         "ranking": props.ranking,
    //         "lat": props.lat,
    //         "long": props.lng,
    //         "phone": props.phone,
    //         "rating": props.rating,
    //         "reviews": props.reviews
    //     })
    // }
    // props.addChange()

    function delRestaurant(){
        deleteMarkersData(props.id);
    }

  return (
    <div className="overview">
        <div className="del-btn-overview" onClick={()=>delRestaurant()}>
            Remove
        </div>
        <div className="restaurant-name">{props.name}</div>
        <img src={props.image} alt="" className="img" />
        <div className="rating">Rating: {props.rating}</div>
        <div className="ranking">Ranking: {props.ranking}</div>
        <div className="contact">Contact: {props.phone}</div>
        <div className="reviews">Number of reviews: {props.reviews}</div>
        <ul className="business-hours">
            <li className="hours">
                {props.hours[0]}
            </li>
            <li className="hours">
                {props.hours[1]}
            </li>
            <li className="hours">
                {props.hours[2]}
            </li>
            <li className="hours">
                {props.hours[3]}
            </li>
            <li className="hours">
                {props.hours[4]}
            </li>
            <li className="hours">
                {props.hours[5]}
            </li>
            <li className="hours">
                {props.hours[6]}
            </li>
        </ul>
    </div>
  )
}
