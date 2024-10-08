<template>
  <div class="pb-[0px]">
    <lazy-section-banner class="section-element" id="home-section" v-show="information"/>
    <lazy-section-my-itinerary class="section-element"id="my-itinerary-section" :data="itinerary" :images="slider_itinerary" :collection="COLLECTION.SLIDER_ITINERARY" :image-id="itinerary?.id" v-if="itinerary"  title="My itinerary"/>
    <lazy-section-play-chess class="section-element" id="play-chess-section" v-if="chess"/>
    <lazy-section-music class="section-element" id="music-section" v-if="music"/>
    <lazy-section-sport2 class="section-element" id="sport-section" v-if="sport"/>
    <lazy-section-my-itinerary class="section-element" id="community-section" :data="community" :images="slider_community" :collection="COLLECTION.SLIDER_COMMUNITY" :image-id="community?.id" v-if="community" title="Community"/>
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
import  {COLLECTION} from "@/pocketbase";

definePageMeta({
  // middleware: [
  //   async function (to, from) {
  //     const authStore = useAuthStore()
  //     const data = await authStore.getPageMeta();
      
  //     useHead({
  //       title: data?.title,
  //       meta: [
  //         {
  //           name: "description",
  //           content: data?.description ,
  //         },
  //         {
  //           name: "image",
  //           content: `https://admin.nguyen-hoang-my.com/api/files/${COLLECTION.META}/${data?.id}/${data?.image}`,
  //         },
  //         {
  //           property: "og:title",
  //           content: data?.title
  //         },
  //         {
  //           property: "og:description",
  //           content: data?.description,
  //         },
  //         {
  //           property: "og:image",
  //           content: `https://admin.nguyen-hoang-my.com/api/files/${COLLECTION.META}/${data?.id}/${data?.image}`,
  //         },
  //       ]
  //     })
      
  //   },
  // ],
});
  
  const authStore = useAuthStore();

  const { information, itinerary, chess, music, sport, handMade, sections, community, slider_itinerary, slider_community } = storeToRefs(authStore)
</script>
  