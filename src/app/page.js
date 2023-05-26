'use client'
import Info from './info'
import bg from './images/pattern-bg-desktop.png'
import button from './images/icon-arrow.svg'
import dynamic from 'next/dynamic'
import {useState, useEffect} from 'react';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
const Map= dynamic(() => import('./map'), { ssr: false });


export default function Home() {


 const apiKey = "at_sD33mvFr5C0oUMZ5YqcaHwsF5UHhV&ipAddress="
  const [clientsIP ,setClientsIP]  = useState(null)
  const [lat, setLat] = useState(51.505);
  const [lng, setLng] = useState(-0.09);
  
  useEffect(() => {
    axios.get('https://api.ipify.org')
    .then((response) => {
    axios.get("https://geo.ipify.org/api/v2/country,city?apiKey=" + apiKey + response.data)
    .then((data)=>
   {   setClientsIP(data);
      console.log(data)}
    )
},[]);
  }, []);
  useEffect(() => {
    if (clientsIP) {
      setLat(clientsIP?.data?.location?.lat)
      setLng(clientsIP?.data?.location?.lng);
    }
  }, [clientsIP])
  
  const [searchedDetails, setSearchedDetails]  = useState("")
const handleChange = (e) => {
  setSearchedDetails(e.target.value);
}
const handleClick =()=>{
  axios.get("https://geo.ipify.org/api/v2/country,city?apiKey=" + apiKey + searchedDetails)
  .then((data)=>
 { 
  setClientsIP(data);
  setLat(clientsIP?.data?.location?.lat)
  setLng(clientsIP?.data?.location?.lng);  
  console.log(data)})
  .catch(function (error) {
    if (error.response) {
      alert('Only search fo IP address in valid format 000.000.000.000')
    } 
   
  });
}

  return (
    <main>
       <header id="header" style={{backgroundImage: `url(${bg.src})`}}>
        <h1>IP Address Tracker</h1>
        <section id="searchArea">
        <input id="search" type="text" placeholder="Search for any IP address or domain" onChange={(e)=>handleChange(e)}/>
        <button onClick={()=>handleClick()} id="srcBtn" style={{backgroundImage: `url(${button.src})`}}></button> 
        </section>
      </header>
   <Info {...{ip: clientsIP?.data.ip ,location: clientsIP?.data?.location?.city, timezone: `UTC ${clientsIP?.data.location.timezone}`, isp:clientsIP?.data.isp}}
      />
<Map position={[lat,lng]}/>
 
    </main>
  )
}
