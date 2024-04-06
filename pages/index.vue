<template>
  <div class="pb-[0px]">
    <!-- <layout-header/> -->
    <lazy-section-banner class="section-element" id="home-section"  />
    <!-- <lazy-about-me class="section-element" id="about-me-section" /> -->
    <lazy-section-my-itinerary class="section-element"id="my-itinerary-section" />
    <lazy-section-play-chess class="section-element" id="play-chess-section" />
    <lazy-section-music class="section-element" id="music-section" />
    <lazy-section-sport2 class="section-element" id="sport-section" />
    <lazy-section-handmade class="section-element" id="handmade-section" />
  </div>
</template>
  
<script lang="ts" setup>
  import { ref } from 'vue';
  onMounted(() => {
    setTimeout(() => {
      lazyLoad.value = true;
    }, 1000);
  })
  const lazyLoad = ref(false);
</script>
  