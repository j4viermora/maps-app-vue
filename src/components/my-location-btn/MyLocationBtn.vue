<template>
  <button v-if="isBtnReady" class="btn btn-primary" @click="onMyLocationClicked">
    Ir a mi ubicacion
  </button>
</template>

<script lang="ts" setup>
import { usePlacesStore, useMapStore } from "@/composables";
import { computed } from "@vue/reactivity";

const { userLocation, isUserLocationReady } = usePlacesStore();
const { map, isMapReady } = useMapStore();

const isBtnReady = computed<boolean>(() => isUserLocationReady.value && isMapReady.value);

const onMyLocationClicked = () => {
  map.value?.flyTo({
    center: userLocation.value,
    zoom: 14,
  });
};
</script>

<style scoped>
button {
  position: fixed;
  top: 30px;
  right: 30px;
}
</style>
