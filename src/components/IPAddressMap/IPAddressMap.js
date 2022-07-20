// Modules
import React from "react";
import L from "leaflet";

// Components
import { MapContainer, TileLayer, Marker } from "react-leaflet";

// Assets
import markerIcon from "../../assets/images/icon-location.svg";

const IPAddressMap = () => {
  const locationPinIcon = new L.Icon({
    iconUrl: markerIcon,
    iconSize: new L.Point(46, 56),
  });

  return (
    <>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        zoomControl={false}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
        />
        <Marker position={[51.505, -0.09]} icon={locationPinIcon}></Marker>
      </MapContainer>
    </>
  );
};

export default IPAddressMap;
