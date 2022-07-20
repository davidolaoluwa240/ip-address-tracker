// Modules
import React, { useRef, useEffect } from "react";
import L from "leaflet";
import { connect } from "react-redux";

// Components
import { MapContainer, TileLayer, Marker } from "react-leaflet";

// Assets
import markerIcon from "../../assets/images/icon-location.svg";

const IPAddressMap = ({ position }) => {
  const mapRef = useRef();

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView(position, mapRef.current.getZoom(), {
        animate: true,
        easeLinearity: 0.35,
      });
    }
  }, [position]);

  const locationPinIcon = new L.Icon({
    iconUrl: markerIcon,
    iconSize: new L.Point(46, 56),
  });

  return (
    <>
      <MapContainer
        ref={mapRef}
        center={position}
        zoom={13}
        zoomControl={false}
        scrollWheelZoom={true}
        dragging={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
        />
        <Marker position={position} icon={locationPinIcon}></Marker>
      </MapContainer>
    </>
  );
};

const mapStateToProps = function (state) {
  return { position: state.search.searchDetail.coords || [51.505, -0.09] };
};

export default connect(mapStateToProps)(IPAddressMap);
