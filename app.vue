<template>
  <div class="pb-[0px]">
    <layout-header/>
    <lazy-banner class="section-element" id="home-section"  />
    <lazy-about-me class="section-element" id="about-me-section" />
    <lazy-my-itinerary class="section-element"id="my-itinerary-section" />
    <lazy-play-chess class="section-element" id="play-chess-section" />
    <lazy-sport class="section-element" id="sport-section" />
    <lazy-music class="section-element" id="music-section" />
    <lazy-handmade class="section-element" id="handmade-section" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
onMounted(() => {
  setTimeout(() => {
    lazyLoad.value = true;
    console.log(lazyLoad.value,'ad.value');
    
  }, 1000);
})
const lazyLoad = ref(false);
</script>
