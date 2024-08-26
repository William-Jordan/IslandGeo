import { useState } from "react";

import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";

import { apiKey } from "../key.ts";

import "./style/UMap.css";

type Pin = {
  lat: number;
  lng: number;
};

const UMap = () => {
  const [pin, setPin] = useState<Pin | null>(null);

  return (
    <>
      {/* <div style={{ width: "99vw", height: "98vh", cursor: "pointer" }}> */}
      <div className="map">
        <APIProvider apiKey={apiKey}>
          <Map
            defaultZoom={14.7}
            mapId={"623a3234d85bcce9"}
            defaultCenter={{ lat: 43.69649, lng: -70.101694 }}
            onClick={(e) => setPin(e.detail.latLng)}
          >
            <AdvancedMarker key={"mark"} position={pin}>
              <Pin
              // background={"#FBBC04"}
              // glyphColor={"#000"}
              // borderColor={"#000"}
              />
            </AdvancedMarker>
          </Map>
        </APIProvider>
      </div>
    </>
  );
};

export default UMap;
