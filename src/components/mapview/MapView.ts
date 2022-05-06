import { defineComponent, onMounted, ref, watch } from "vue";
import Mapboxgl from "mapbox-gl";

import { usePlacesStore, useMapStore } from "@/composables";

export default defineComponent({
  name: "MapView",
  setup() {
    const { setMap } = useMapStore();
    const mapElement = ref<HTMLDivElement>();
    const { isLoading, userLocation, isUserLocationReady } = usePlacesStore();

    const initMap = async () => {
      if (!mapElement.value) return;
      if (!userLocation.value) return;

      await Promise.resolve();

      const map = new Mapboxgl.Map({
        container: mapElement.value, // container ID
        style: "mapbox://styles/mapbox/dark-v10", // style URL
        center: userLocation.value, // starting position [lng, lat]
        zoom: 15, // starting zoom
      });

      const myLocationPopup = new Mapboxgl.Popup().setLngLat(userLocation.value).setHTML(`
        <h4>Aqui estoy</h4>
        <p>Actualmente en alajuela</p>
        <p>${userLocation.value}</p>
      `);

      const myLocationMarker = new Mapboxgl.Marker()
        .setLngLat(userLocation.value)
        .setPopup(myLocationPopup)
        .addTo(map);

      setMap(map);
    };

    onMounted(() => {
      if (isUserLocationReady.value) return initMap();
    });

    watch(isUserLocationReady, (newVal) => {
      if (isUserLocationReady.value) initMap();
    });

    return {
      isLoading,
      userLocation,
      isUserLocationReady,
      mapElement,
    };
  },
});
