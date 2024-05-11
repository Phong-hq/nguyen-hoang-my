<template>
  <div class="pb-[0px]">
    <!-- <layout-header/> -->
    <lazy-section-banner class="section-element" id="home-section" v-show="information"/>
    <!-- <lazy-about-me class="section-element" id="about-me-section" /> -->
    <lazy-section-my-itinerary class="section-element"id="my-itinerary-section" v-if="itinerary"/>
    <lazy-section-play-chess class="section-element" id="play-chess-section" v-if="chess"/>
    <lazy-section-music class="section-element" id="music-section" v-if="music"/>
    <lazy-section-sport2 class="section-element" id="sport-section" v-if="sport"/>
    <lazy-section-handmade class="section-element" id="handmade-section" v-if="handMade"/>
  </div>
</template>
  
<script lang="ts" setup>
  import { ref } from 'vue';
  import { useAuthStore } from '~/store/auth';
  import { storeToRefs } from 'pinia';
  
  const authStore = useAuthStore();

  const { information, itinerary, chess, music, sport, handMade } = storeToRefs(authStore)
</script>
  