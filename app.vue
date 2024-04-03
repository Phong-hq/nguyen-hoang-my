<template>
  <div>
    <layout-header/>
    <lazy-banner id="home-section"  />
    <lazy-about-me id="about-me-section" />
    <lazy-my-itinerary id="my-itinerary-section" />
    <lazy-play-chess id="play-chess-section" />
    <lazy-sport id="sport-section" />
    <lazy-music id="music-section" />
    <div class="w-full h-[900px]"></div>
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
