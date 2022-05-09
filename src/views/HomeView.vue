<template>
  <div>
    <map-view />
    <search-bar />
    <my-location-btn1 />
  </div>
</template>

<script lang="ts" setup>
import { usePlacesStore } from "@/composables";
import MapView from "@/components/mapview/MapView.vue";
import MyLocationBtn1 from "@/components/my-location-btn/MyLocationBtn.vue";
import SearchBar from "@/components/searchbar/SearchBar.vue";

usePlacesStore();
</script>
