import './Story.css'
import mapboxgl from 'mapbox-gl'; 
import React, { useRef, useEffect, useState } from 'react';
import { Topbar } from '../../Components/Topbar/Topbar';
import { Destination } from '../../Components/Destination/Destination';
import { Restaurant } from '../../Components/Restaurant/Restaurant';
import {getPlacesData} from '../../services/getResto.js';

export const Story = () => {
  mapboxgl.accessToken = 'pk.eyJ1Ijoiam9uYWh0amFuZHJhIiwiYSI6ImNsMDF2Z2ZmazB5NWgzYmxzNG1iaHZ1YWoifQ.JqWDrSROl2qsQK2WQrFXxw';
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-87.629799);
  const [lat, setLat] = useState(41.878113);
  const [zoom, setZoom] = useState(12);

  const [places,setPlaces] = useState([]);
  const [coordinates,setCoordinates] = useState({lat:0,lng:0});

  const [currentMarkers,setCurrentMarkers] = useState([]);
  
  // tab logic
  const [toggleState, setToggleState] = useState(1);

  // useEffect(() => {
  //   for (const feature of geojson) {
  //     const el = document.createElement('div');
  //     el.className = 'marker';
  //     new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
  //   }
  // })

  useEffect(() => {
    if (map.current) return; // initialize map only once
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
      });
    });



    useEffect(() => {
      if (!map.current) return; // wait for map to initialize
        map.current.on('click', (e) => {
          // console.log(e.lngLat.lat)
          setCoordinates({lat:e.lngLat.lat,lng:e.lngLat.lng});
          // console.log(currentMarkers);
          currentMarkers.forEach((marker) => marker.remove())
          // console.log(currentMarkers);
        });
        // console.log(coordinates)
      },[]);

    useEffect(() => {
      // console.log("FUCK")
      // if (currentMarkers!==null) {
        // } 
      getPlacesData(coordinates.lat,coordinates.lng)
          .then((data)=>{
            // console.log(data);
              setPlaces(data);
          })

    }, [coordinates]);

  return (
    <div className="story">
      <Topbar/>
      <div className="story-wrapper">
          <div ref={mapContainer} className="map-container" />
          <div className="story-right-wrapper">
            <div className="story-topbar">

            </div>
            <input placeholder='find anything you want' className="search-story" />
            <div className="boxView">
              <input placeholder='title here' className="story-destination" />
              

              <div className="container-tab">
                <div className="bloc-tabs">
                  <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => setToggleState(1)}
                  >
                    Overview
                  </button>
                  <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => setToggleState(2)}
                  >
                    Restaurants
                  </button>
                  <button
                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => setToggleState(3)}
                  >
                    Accomodation
                  </button>
                </div>

                <div className="content-tabs">
                  <div
                    className={toggleState === 1 ? "content  active-content" : "content"}
                  >
                    Hello, Overview is not fully built yet 👋
                  </div>

                  <div
                    className={toggleState === 2 ? "content  active-content" : "content"}
                  >
                    <div className="places-container">
                      {places.length == 0 ? "Oops, no restaurants yet. Click on the map to explore 🗺": ""}
                      {places.map((place)=> {
                        if (place && place.hours && place.photo && place.num_reviews > 10) {
                          // return <img src={place.photo.images.large.url} alt="" />
                          return <Restaurant hours={place.hours.week_ranges} name={place.name} image={place.photo.images.large.url} rating={place.rating} reviews={place.num_reviews} ranking={place.ranking} phone={place.phone} alt="" /> 
                        }
                      })}
                    </div>
                  </div>
                  <div
                    className={toggleState === 3 ? "content  active-content" : "content"}
                  >
                    Hello, Accomodation is not fully built yet 👋
                  </div>
                </div>
              <div className="places-container">
                {places.map((place)=> {
                  if (place && place.hours && place.photo && place.num_reviews > 10 && place.longitude && place.latitude) {
                    // return <img src={place.photo.images.large.url} alt="" />
                    var marker = new mapboxgl.Marker({
                      color: "#FFFFFF"
                    })
                    marker.setLngLat([place.longitude, place.latitude])
                    marker.setPopup(new mapboxgl.Popup().setHTML(place.name));
                    marker.addTo(map.current);

                    let newmarkers = currentMarkers;
                    newmarkers.push(marker);
                    marker.getElement().addEventListener('click', (e) => { marker.togglePopup(); e.stopPropagation(); }, false);
                    // console.log(currentMarkers);

                    
                    // setCurrentMarkers(newmarkers);

                    return <Restaurant hours={place.hours.week_ranges} name={place.name} image={place.photo.images.large.url} rating={place.rating} reviews={place.num_reviews} ranking={place.ranking} phone={place.phone} alt="" /> 
                  }
                })}
              </div>
              {/* <div className="story-destination">Destination Here</div> */}
            </div>
          </div>
         
      </div>
    </div>
  )
}
