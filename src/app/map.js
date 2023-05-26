import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import {Icon} from 'leaflet'
import {useRef, useEffect} from 'react';
const marker = "https://pic.onlinewebfonts.com/svg/img_164074.png"
//import {Icon} from 'leaflet';
//const pointer =  L.icon({
  //iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  //iconUrl: require('leaflet/dist/images/marker-icon.png'),
  //shadowUrl: require('leaflet/dist/images/marker-shadow.png'),

//})

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
      <Marker position={position} icon={new Icon({iconUrl: marker, iconSize: [25, 41], iconAnchor: [12, 41]})}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;