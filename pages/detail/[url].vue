<template>
<div class="w-full h-[300px] relative">
  <!-- <empty-image /> -->
  <div class="flex-center sc-full bg-[#919191]"></div>
  <div class="sc-full flex-center flex-col font-bold px-7 absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2">
    <p class="text-[70px] text-white leading-[110px] tracking-[-3px] capitalize">{{ pageDetail?.title || 'Title' }}</p>
    <div class="w-[300px] h-[1px] bg-white"></div>
  </div>
</div>
<div class="container mx-auto py-[70px]">
  <div class="grid grid-cols-3 gap-7">
    <div v-for="item in 12" :key="item" v-if="!pageDetail?.field">
      <div class="aspect-[3_/_2]">
        <empty-image />
      </div>
    </div>
    <div v-for="(item, index) in pageDetail?.field" :key="index" v-else>
      <div class="aspect-[3_/_2]">
        <file-component 
        :class="{'rounded-[50px]': getImageItem(item)?.border == 'rounded'}"
        :url="getImageItem(item)?.image || ''" 
        :collection="COLLECTION.IMAGE_LIBRARY" 
        :id="getImageItem(item)?.id" />
        <p class="mt-2">{{ getImageItem(item)?.note }}</p>
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

const { pageDetail, pageImageList } = storeToRefs(authStore);

  const route = useRoute();
  onMounted( async () => {
    try {
      if(route.params.url) {
        await authStore.getPageDetail(String(route.params.url));
        if(pageDetail.value?.field.length) {
          await authStore.getPageImageList(pageDetail.value?.field);
        }
      }
    } catch (error) {
      
    }
  })

  const getImageItem = (id) => {
    return pageImageList.value?.find((image) => image.id == id)
  }
  const lazyLoad = ref(false);
</script>
  