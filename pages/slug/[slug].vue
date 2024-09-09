<template>
<div class="w-full h-[300px] relative">
  <!-- <empty-image /> -->
  <div class="flex-center sc-full bg-[#919191]"></div>
  <div class="sc-full flex-center flex-col font-bold px-7 absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2">
    <p class="text-[70px] text-white leading-[110px] tracking-[-3px] capitalize">{{ data?.title || 'Title' }}</p>
    <div class="w-[300px] h-[1px] bg-white"></div>
  </div>
</div>
<div class="container mx-auto py-[70px]">
  <div class="grid grid-cols-3 gap-7">
    <div v-for="item in 12" :key="item" v-if="!listImage">
      <div class="aspect-[3_/_2]">
        <empty-image />
      </div>
    </div>
    <div v-for="(item, index) in listImage" :key="index" v-else>
      <div class="aspect-[3_/_2]">
        <file-component 
        type="img-full"
        :class="{'rounded-[50px]': false}"
        :url="item || ''" 
        :collection="collection" 
        controls
        :id="id" />
        <!-- <p class="mt-2">{{ getImageItem(item)?.note }}</p> -->
      </div>
    </div>
  </div>
</div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useAuthStore } from '~/store/auth';
import { storeToRefs } from 'pinia';
import  {COLLECTION} from "@/pocketbase";
  
  const authStore = useAuthStore();

  const { information, itinerary, chess, music, sport, handMade, sections } = storeToRefs(authStore)

  const route = useRoute();

  const listImage = computed(() => data.value?.content || data.value?.list_image || [])

  const data = ref(null);
  const collection = ref('');
  const id = ref('');
  onMounted( async () => {
    try {
      data.value = null;
      const url = String(route.params.slug)
      if(url) {
        if(sport.value?.slug == url) {
          data.value = sport.value
          id.value = sport.value?.id
          collection.value = COLLECTION.SPORT
        }

        else if(chess.value?.slug == url) {
          data.value = chess.value
          collection.value = COLLECTION.CHESS
          id.value = chess.value?.id

        }

        else {
          data.value = sections.value?.find((e) => e.slug == url) || null
          collection.value = COLLECTION.SECTIONS
          id.value = data.value?.id
        }
        
      }
      console.log(id.value,'ssssssssssssssss');
      console.log(collection.value,'ssssssssssssssss');
      console.log(listImage.value,'ssssssssssssssss');
    } catch (error) {
      console.log(error);
      
    }
  })

  // const getImageItem = (id) => {
  //   return pageImageList.value?.find((image) => image.id == id)
  // }
  const lazyLoad = ref(false);
</script>
  