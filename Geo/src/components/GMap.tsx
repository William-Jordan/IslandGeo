import {
  APIProvider,
  Map,
  AdvancedMarker,
  MapCameraChangedEvent,
  Pin,
} from "@vis.gl/react-google-maps";

import { apiKey } from "../key.ts";

type Poi = { key: string; location: google.maps.LatLngLiteral };
type ColorSet = { background: string; center: string; border: string };
type Tack = { poi: Poi; color: ColorSet };

const tacks: Tack[] = [
  {
    poi: { key: "Carter", location: { lat: 43.698658, lng: -70.102725 } },
    color: { background: "red", center: "green", border: "blue" },
  },
  {
    poi: { key: "Julian", location: { lat: 43.696977, lng: -70.104981 } },
    color: { background: "orange", center: "yellow", border: "black" },
  },
  {
    poi: { key: "Nathan", location: { lat: 43.697413, lng: -70.096273 } },
    color: { background: "yellow", center: "blue", border: "green" },
  },
  {
    poi: { key: "William", location: { lat: 43.696797, lng: -70.090549 } },
    color: { background: "green", center: "orange", border: "white" },
  },
];

const GMap = () => (
  <div style={{ width: "99vw", height: "98vh" }}>
    <APIProvider
      apiKey={apiKey}
      onLoad={() => console.log("Maps API has loaded.")}
    >
      <Map
        defaultZoom={14.7}
        mapId={"623a3234d85bcce9"}
        defaultCenter={{ lat: 43.69649, lng: -70.101694 }}
        onCameraChanged={(ev: MapCameraChangedEvent) =>
          console.log(
            "camera changed:",
            ev.detail.center,
            "zoom:",
            ev.detail.zoom
          )
        }
      >
        <TackMarkers tackList={tacks} />
      </Map>
    </APIProvider>
  </div>
);

const TackMarkers = (props: { tackList: Tack[] }) => {
  return (
    <>
      {props.tackList.map((tack: Tack) => (
        <AdvancedMarker key={tack.poi.key} position={tack.poi.location}>
          <Pin
            background={tack.color.background}
            glyphColor={tack.color.center}
            borderColor={tack.color.border}
          />
        </AdvancedMarker>
      ))}
    </>
  );
};

export default GMap;
