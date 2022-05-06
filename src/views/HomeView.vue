<template>
  <div><map-view /><my-location-btn1 /></div>
</template>

<script lang="ts" setup>
import { usePlacesStore } from "@/composables";
import MapView from "@/components/mapview/MapView.vue";
import MyLocationBtn1 from "@/components/my-location-btn/MyLocationBtn.vue";

usePlacesStore();
</script>
