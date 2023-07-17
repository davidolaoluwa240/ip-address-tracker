// Modules
import React from "react";
import L from "leaflet";

// Hooks
import { useRef, useEffect, useMemo, useContext } from "react";

// Contexts
import { IPAddressContext } from "../../context";

// Components
import { MapContainer, TileLayer, Marker } from "react-leaflet";

// Images
import markerIconSvg from "../../assets/images/icon-location.svg";

// Style
import { IPAddressLookupResultMapWrapper } from "./ip-address-lookup-result-map.styles";

export const IPAddressLookupResultMap = ({ position = [51.505, -0.09] }) => {
  const mapRef = useRef();
  const { searchResult } = useContext(IPAddressContext);

  // Create Custom Marker
  const markerIcon = useMemo(
    () =>
      new L.Icon({
        iconUrl: markerIconSvg,
        iconSize: new L.Point(46, 56),
      }),
    []
  );

  useEffect(() => {
    // 1). Get Map
    const map = mapRef.current;

    // 2). Change Map View
    map?.setView(position, map.getZoom(), {
      animate: true,
      pan: {
        duration: 2,
      },
    });
  }, [position]);

  return (
    <IPAddressLookupResultMapWrapper>
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
        <Marker position={position} icon={markerIcon}></Marker>
      </MapContainer>
    </IPAddressLookupResultMapWrapper>
  );
};
