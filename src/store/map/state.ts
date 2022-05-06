import Mapboxgl from "mapbox-gl";

export interface MapState {
  map?: Mapboxgl.Map;
  markers: Mapboxgl.Marker[];
  distance?: number;
  duraction?: number;
}

function state(): MapState {
  return {
    map: undefined,
    markers: [],
  };
}

export default state;
