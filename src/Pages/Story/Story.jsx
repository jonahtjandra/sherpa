import './Story.css'
import mapboxgl from 'mapbox-gl'; 
import React, { useRef, useEffect, useState } from 'react';
import { Topbar } from '../../Components/Topbar/Topbar';
import { Destination } from '../../Components/Destination/Destination';
import * as geojson from '../../assets/dummy_data/marker.json'

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

  // useEffect(() => {
  //   for (const feature of geojson.features) {
  //     const el = document.createElement('div');
  //     el.className = 'marker';
  //     new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
  //   }
  // });

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
        });
        // console.log(coordinates)
      },[]);

    useEffect(() => {
      // console.log("FUCK")
      getPlacesData(coordinates.lat,coordinates.lng)
          .then((data)=>{
            console.log(data);
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
              <div className="places-container"></div>
              {/* <div className="story-destination">Destination Here</div> */}
            </div>
          </div>
         
      </div>
    </div>
  )
}
