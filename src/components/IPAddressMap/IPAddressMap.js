// Modules
import React, { useState } from "react";
import L from "leaflet";

// Components
import { MapContainer, TileLayer, Marker } from "react-leaflet";

// Assets
import markerIcon from "../../assets/images/icon-location.svg";

const IPAddressMap = () => {
  const locationPinIcon = new L.Icon({
    iconUrl: markerIcon,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(46, 56),
  });
  const [position] = useState([51.505, -0.09]);

  return (
    <>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={locationPinIcon}></Marker>
      </MapContainer>
    </>
  );
};

export default IPAddressMap;
