import React from 'react'
import './Restaurant.css'

export const Restaurant = (props) => {
    function getHours(openTime, closeTime) {
        const open_hr = (openTime/60) % 24
        const open_min = (openTime/60 - Math.floor(openTime/60))*60
        const close_hr = (closeTime/60) % 24
        const close_min = (closeTime/60 - Math.floor(closeTime/60))*60
        if (close_hr == 24) closeTime = 0 
        let o_hr = open_hr.toString()
        let o_min = open_min.toString()
        let c_hr = close_hr.toString()
        let c_min = close_min.toString()
        console.log(o_hr)
        if (o_hr.length < 2) {
            o_hr =  "0" + o_hr
        }
        if (o_min.length < 2) {
            o_min = "0" + o_min
        }
        if (c_hr.length < 2) {
            c_hr =  "0" + c_hr
        }
        if (c_min.length < 2) {
            c_min = "0" + c_min
        }
        const res = o_hr + ":" + o_min + (open_hr < 12 ? "AM" : "PM") + " - " + c_hr + ":" + c_min + (close_hr < 12 ? "AM" : "PM")
        return res
    }
  return (
    <div className="restaurant">
        <div className="restaurant-name">{props.name}</div>
        <img src={props.image} alt="" className="img" />
        <div className="rating">Rating: {props.rating}</div>
        <div className="ranking">Ranking: {props.ranking}</div>
        <div className="contact">Contact: {props.phone}</div>
        <div className="reviews">Number of reviews: {props.reviews}</div>
        <ul className="business-hours">
            <li className="hours">
                {props.hours[0] && props.hours[0].length != 0 ? `Monday: ${getHours(props.hours[0][0].open_time, props.hours[0][0].close_time)}` : "Monday: Closed"}
            </li>
            <li className="hours">
                {props.hours[1] && props.hours[1].length != 0 ? `Tuesday: ${getHours(props.hours[1][0].open_time, props.hours[1][0].close_time)}`: "Tuesday: Closed"}
            </li>
            <li className="hours">
                {props.hours[2] && props.hours[2].length != 0 ? `Wednessday: ${getHours(props.hours[2][0].open_time, props.hours[2][0].close_time)}`: "Wednessday: Closed"}
            </li>
            <li className="hours">
                {props.hours[3] && props.hours[3].length != 0 ? `Thursday: ${getHours(props.hours[3][0].open_time, props.hours[3][0].close_time)}`: "Thursday: Closed"}
            </li>
            <li className="hours">
                {props.hours[4] && props.hours[4].length != 0 ? `Friday: ${getHours(props.hours[4][0].open_time, props.hours[4][0].close_time)}`: "Friday: Closed"}
            </li>
            <li className="hours">
                {props.hours[5] && props.hours[5].length != 0 ? `Saturday: ${getHours(props.hours[5][0].open_time, props.hours[5][0].close_time)}`: "Saturday: Closed"}
            </li>
            <li className="hours">
                {props.hours[6] && props.hours[6].length != 0 ? `Sunday: ${getHours(props.hours[6][0].open_time, props.hours[6][0].close_time)}`: "Sunday: Closed"}
            </li>
        </ul>
    </div>
  )
}