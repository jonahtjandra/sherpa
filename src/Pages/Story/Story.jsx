import './Story.css'
import mapboxgl from 'mapbox-gl'; 
import React, { useRef, useEffect, useState } from 'react';
import { Topbar } from '../../Components/Topbar/Topbar';
import { Destination } from '../../Components/Destination/Destination';
import { Restaurant } from '../../Components/Restaurant/Restaurant';
import { Hotels } from '../../Components/Hotels/Hotels';
import {getPlacesData} from '../../services/getResto.js';
import { getHotelsData } from '../../services/getHotels.js';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import { postMarker } from '../../services/postMarkers';
import { getMarkersData } from '../../services/getMarkers.js';
import { Overviewresto } from '../../Components/OverviewResto/Overviewresto';




export const Story = () => {
  mapboxgl.accessToken = 'pk.eyJ1Ijoiam9uYWh0amFuZHJhIiwiYSI6ImNsMDF2Z2ZmazB5NWgzYmxzNG1iaHZ1YWoifQ.JqWDrSROl2qsQK2WQrFXxw';
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-87.629799);
  const [lat, setLat] = useState(41.878113);
  const [zoom, setZoom] = useState(12);

  const [coordinates,setCoordinates] = useState({lat:-99999,lng:-99999});
  const [resto,setResto] = useState([]);
  const [hotel,setHotels] = useState([]);
  const [savedMarker,setSavedMarker] = useState([]);

  const [currentMarkers,setCurrentMarkers] = useState([]);
  const [currentHotelMarkers,serCurrentHotelMarkers] = useState([]);
  const [currentUserMarkers,setCurrentUserMarkers] = useState([]);

  const [proxy, setProxy] = useState(0);
  
  
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
    // console.log(places)
    if (map.current) return; // initialize map only once
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
      });

      const geocoder =
        new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
       });

      document.getElementById('geocoder').appendChild(geocoder.onAdd(map.current));
    });

    useEffect(() => {
      if (!map.current) return; // wait for map to initialize
        map.current.on('click', (e) => {
          setCoordinates({lat:e.lngLat.lat,lng:e.lngLat.lng});
        });
      }, []);

    useEffect(() => {
      // console.log("FUCK")
      // if (currentMarkers!==null) {
        // } 
      
      if (toggleState === 2){
        if (coordinates.lat !== -99999 && coordinates.lng !== -99999) {
          currentMarkers.forEach((marker) => {
            console.log("marker: " + resto)
            marker.remove()
          })
          currentHotelMarkers.forEach((marker) => marker.remove())
          getPlacesData(coordinates.lat,coordinates.lng)
              .then((data)=>{
                // console.log(data);
                  setResto(data);
          })
          }
        }
        

    }, [coordinates]);

    useEffect(() => {
      if (toggleState === 3){
        currentHotelMarkers.forEach((marker) => marker.remove())
        currentMarkers.forEach((marker) => marker.remove())
        getHotelsData(coordinates.lat,coordinates.lng)
          .then((data)=>{
              //console.log(data);
              setHotels(data);
          })
      }

    }, [coordinates, proxy]);



    useEffect(() =>{
      if(toggleState === 3){
        currentMarkers.forEach((marker) => marker.remove())
      }
      else if (toggleState === 2){
        currentHotelMarkers.forEach((marker) => marker.remove())
      }
      else if(toggleState === 1){
        currentMarkers.forEach((marker) => marker.remove())
        currentHotelMarkers.forEach((marker) => marker.remove())
      }
    },[toggleState])

    useEffect(() =>{
      currentUserMarkers.forEach((marker) => marker.remove())
      getMarkersData()
      .then((data)=>{
        setSavedMarker(data);
     })
    },[toggleState, proxy])
    

    function renderProxy() {
      console.log("PROXZY")
      setProxy(proxy+1)
    }

  return (
    <div className="story">
      <Topbar/>

      <div className="story-wrapper">
          <div ref={mapContainer} className="map-container" />
          <div className="story-right-wrapper">
            <div className="story-topbar">

            </div>
            <div id="geocoder"/>
            <div className="boxView">
              <input placeholder='title here' className="story-destination" />
              

              <div className="container-tab">
                <div className="bloc-tabs">
                  <button
                    className={toggleState === 1 ? "tabs active-tabs1" : "tabs"}
                    onClick={() => setToggleState(1)}
                  >
                    Overview
                  </button>
                  <button
                    className={toggleState === 2 ? "tabs active-tabs2" : "tabs"}
                    onClick={() => setToggleState(2)}
                  >
                    Restaurants
                  </button>
                  <button
                    className={toggleState === 3 ? "tabs active-tabs3" : "tabs"}
                    onClick={() => setToggleState(3)}
                  >
                    Accomodation
                  </button>
                </div>

                <div className="content-tabs">
                  <div
                    className={toggleState === 1 ? "content  active-content" : "content"}
                  >
                    <div className="places-container">
                    {savedMarker.data?.map((saved)=>{
                      console.log(savedMarker)
                        if(saved){
                          const marker = new mapboxgl.Marker({
                            color: "#000000"
                          })
                          marker.setLngLat([saved.long, saved.lat])
                          marker.setPopup(new mapboxgl.Popup().setHTML(saved.title));
                          marker.addTo(map.current);

                          let newmarkers = currentUserMarkers;
                          newmarkers.push(marker);
                          marker.getElement().addEventListener('click', (e) => { marker.togglePopup(); e.stopPropagation(); }, false);
                          // console.log(currentMarkers);
                          
                          // setCurrentMarkers(newmarkers);
                            console.log(saved._id);
                          return <Overviewresto render={renderProxy} hours={saved.hours} name={saved.title} image={saved.imageUrl} rating={saved.rating} reviews={saved.reviews} ranking={saved.ranking} phone={saved.phone} id = {saved._id} alt="" /> 
                        }
                        
                        else {
                          const marker = new mapboxgl.Marker({
                            color: "#000000"
                          })
                          marker.setLngLat([saved.long, saved.lat])
                          marker.setPopup(new mapboxgl.Popup().setHTML(saved.title));
                          marker.addTo(map.current);

                          let newmarkers = currentUserMarkers;
                          newmarkers.push(marker);
                          marker.getElement().addEventListener('click', (e) => { marker.togglePopup(); e.stopPropagation(); }, false);
                          // console.log(currentMarkers);
                         
                          // setCurrentMarkers(newmarkers);

                          return <Hotels name={saved.name} image={saved.imageUrl} ranking={saved.ranking} reviews={saved.reviews} rating={saved.rating} alt="" /> 
                        }
                    })}
                    </div>
                    
                    
                  </div>

                  <div
                    className={toggleState === 2 ? "content  active-content" : "content"}
                  >
                    <div className="places-container">
                      {resto.length == 0 ? "Oops, no restaurants yet. Click on the map to explore 🗺": ""}
                      {toggleState === 2 && resto.map((resto)=> {
                        if (resto && resto.hours && resto.photo && resto.num_reviews > 10 && resto.longitude && resto.latitude) {
                          // return <img src={place.photo.images.large.url} alt="" />
                          const marker = new mapboxgl.Marker({
                            color: "#F94144"
                          })
                          marker.setLngLat([resto.longitude, resto.latitude])
                          marker.setPopup(new mapboxgl.Popup().setHTML(resto.name));
                          marker.addTo(map.current);

                          let newmarkers = currentMarkers;
                          newmarkers.push(marker);
                          marker.getElement().addEventListener('click', (e) => { marker.togglePopup(); e.stopPropagation(); }, false);
                          // console.log(currentMarkers);

                          
                          // setCurrentMarkers(newmarkers);

                          return <Restaurant lat={resto.latitude} lng={resto.longitude} hours={resto.hours.week_ranges} name={resto.name} image={resto.photo.images.large.url} rating={resto.rating} reviews={resto.num_reviews} ranking={resto.ranking} phone={resto.phone} alt="" /> 
                        }
                      })}
                    </div>
                  </div>
                  <div
                    className={toggleState === 3 ? "content  active-content" : "content"}
                  >
                     <div className="places-container">
                      {hotel && hotel.length == 0 ? "Oops, no hotels yet 🏡. Click on the map to explore 🗺": ""}
                      {toggleState === 3 && map.current.on('click') && hotel.map((hotel)=> {
                        if (hotel && hotel.photo && hotel.num_reviews > 10 && hotel.longitude && hotel.latitude) {
                          // return <img src={place.photo.images.large.url} alt="" />
                          const markerhotel = new mapboxgl.Marker({
                            color: "#43AA8B"
                          })
                          markerhotel.setLngLat([hotel.longitude, hotel.latitude])
                          markerhotel.setPopup(new mapboxgl.Popup().setHTML(hotel.name));
                          markerhotel.addTo(map.current);

                          let newhotelmarkers = currentHotelMarkers;
                          newhotelmarkers.push(markerhotel);
                          markerhotel.getElement().addEventListener('click', (e) => { markerhotel.togglePopup(); e.stopPropagation(); }, false);
                          return <Hotels lat={hotel.latitude} long={hotel.longitude} name={hotel.name} image={hotel.photo.images.large.url} rating={hotel.rating} reviews={hotel.num_reviews} ranking={hotel.ranking} alt="" /> 
                        }
                      })}
                    </div>
                  </div>
                </div>
              <div className="places-container">
                  
              </div>
            </div>
          </div>
         
      </div>
    </div>
    </div>
  )
}
