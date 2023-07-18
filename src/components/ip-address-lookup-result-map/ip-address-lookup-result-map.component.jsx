// Modules
import React from "react";
import L from "leaflet";

// Hooks
import { useRef, useEffect, useMemo } from "react";
import { useIpAddress } from "../../hooks";

// Components
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// Images
import markerIconSvg from "../../assets/images/icon-location.svg";

// Style
import {
  IPAddressLookupResultMapWrapper,
  IPAddressLookupResultMapPopupContent,
  IPAddressLookupResultMapPopupImage,
  IPAddressLookupResultMapPopupText,
} from "./ip-address-lookup-result-map.styles";

export const IPAddressLookupResultMap = () => {
  const mapRef = useRef();
  const popupRef = useRef();
  const { searchResult } = useIpAddress();
  const mapPosition = [51.505, -0.09];

  // Get Search Result Coords
  const coords = useMemo(
    () =>
      searchResult
        ? [searchResult.latitude, searchResult.longitude]
        : mapPosition,
    [searchResult]
  );

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
    map?.setView(coords, map.getZoom(), {
      animate: true,
      pan: {
        duration: 2,
      },
    });
  }, [coords]);

  useEffect(() => {
    const map = mapRef.current;
    const popup = popupRef.current;

    if (map && popup) {
      popup.openOn(map);
    }
  }, [mapRef, popupRef]);

  return (
    <IPAddressLookupResultMapWrapper>
      <MapContainer
        ref={mapRef}
        center={coords}
        zoom={13}
        zoomControl={false}
        scrollWheelZoom={true}
        dragging={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
        />
        <Marker position={coords} icon={markerIcon}>
          <Popup ref={popupRef}>
            <IPAddressLookupResultMapPopupContent>
              <IPAddressLookupResultMapPopupImage
                src="https://cdn.ipwhois.io/flags/rw.svg"
                alt={`${searchResult?.country} flag`}
              />
              <IPAddressLookupResultMapPopupText>
                {searchResult?.ip}
              </IPAddressLookupResultMapPopupText>
            </IPAddressLookupResultMapPopupContent>
          </Popup>
        </Marker>
      </MapContainer>
    </IPAddressLookupResultMapWrapper>
  );
};
