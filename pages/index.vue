<template>
  <div class="pb-[0px]">
    <lazy-section-banner class="section-element" id="home-section" v-show="information"/>
    <lazy-section-my-itinerary class="section-element"id="my-itinerary-section" v-if="itinerary"/>
    <lazy-section-play-chess class="section-element" id="play-chess-section" v-if="chess"/>
    <lazy-section-music class="section-element" id="music-section" v-if="music"/>
    <lazy-section-sport2 class="section-element" id="sport-section" v-if="sport"/>
    <!-- <lazy-section-handmade class="section-element" id="handmade-section" v-if="handMade"/> -->
     <template  v-for="(item, index) in sections" :key="item.id">
       <lazy-section-created 
        class="section-element" 
        :id="`created-section-${item?.id}`" 
        :data="item"
        :index="index"
        v-if="item"
       />
     </template>
  </div>
</template>
  
<script setup>
  import { ref } from 'vue';
  import { useAuthStore } from '~/store/auth';
  import { storeToRefs } from 'pinia';
  
  const authStore = useAuthStore();

  const { information, itinerary, chess, music, sport, handMade, sections } = storeToRefs(authStore)
</script>
  