<template>
  <div class="searchbar-container">
    <input class="form-control" type="text" placeholder="Buscar lugares.." v-model="searchTerms" />
    {{ debounceValue }}
    <SearchResult />
  </div>
</template>

<script lang="ts" setup>
import { computed } from "@vue/reactivity";
import { ref } from "vue";
import SearchResult from "../search-result/SearchResult.vue";

const debounceTimeout = ref();
const debounceValue = ref<string>("Hola");

const searchTerms = computed({
  get(): string {
    return debounceValue.value;
  },
  set(value: string) {
    if (debounceTimeout.value) {
      clearTimeout(debounceTimeout.value);
    }

    debounceTimeout.value = setTimeout(() => {
      debounceValue.value = value;
      window.alert("hola");
    }, 500);

    debounceValue.value = value;
  },
});
</script>
<style scoped>
.searchbar-container {
  position: fixed;
  top: 30px;
  left: 30px;
  background-color: white;
  z-index: 99;
  box-shadow: 0px 5px 10px rgb(100, 100, 100);
  width: 300px;
  overflow: hidden;
  padding: 10px;
  border-radius: 10px;
}
</style>
