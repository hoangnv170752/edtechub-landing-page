import React, { useEffect, useRef } from "react";

const KampalaHereMap = () => {
  const mapRef = useRef(null);
  const position = { lat: 0.3476, lng: 32.5825 };
  const apiKey = process.env.REACT_APP_HERE_API_KEY; 

  useEffect(() => {
    if (!mapRef.current || !apiKey) return;

    const platform = new window.H.service.Platform({ apikey: apiKey });
    const defaultLayers = platform.createDefaultLayers();

    const map = new window.H.Map(
      mapRef.current,
      defaultLayers.vector.normal.map,
      {
        center: position,
        zoom: 13,
        pixelRatio: window.devicePixelRatio || 1,
      }
    );

    const behavior = new window.H.mapevents.Behavior(
      new window.H.mapevents.MapEvents(map)
    );

    const marker = new window.H.map.Marker(position);
    map.addObject(marker);

    window.addEventListener("resize", () => map.getViewPort().resize());

    return () => {
      map.dispose();
    };
  }, [apiKey]);

  return (
    <div
      ref={mapRef}
      style={{
        width: "100%",
        height: "250px",
        marginTop: "20px",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    />
  );
};

export default KampalaHereMap;