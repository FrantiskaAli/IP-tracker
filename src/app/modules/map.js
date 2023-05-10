'use client';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import {useRef, useEffect} from 'react'
import {Icon} from 'leaflet';
const icon = require("../images/icon-map.png")
const myIcon = new Icon({
  iconUrl: "https://pic.onlinewebfonts.com/svg/img_551930.png",
  iconRetinaUrl: "https://pic.onlinewebfonts.com/svg/img_551930.png",
  iconSize: [46,56],     
});


function Map({ position }) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.flyTo(position, 13, {
        duration: 1.5,
      });
    }
  }, [position]);


  return (
    <MapContainer ref={mapRef} center={position} zoom={17} scrollWheelZoom={false} id="map">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position} icon={myIcon} >
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;