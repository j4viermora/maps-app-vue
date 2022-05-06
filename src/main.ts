import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import mapboxgl from "mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1IjoiajR2aWVybW9yYSIsImEiOiJja200MDc5Y3YweGV0MnZwaTl6Y2Y0am1rIn0.ZccVOrR2TRP7gdUEsEAzKQ";

if (!navigator.geolocation) {
  alert("Tu navegador no soporta geolocalizacion");
  throw new Error("Tu navegador no soporta geolocalizacion");
}

createApp(App).use(store).use(router).mount("#app");
