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
    <div class="grid grid-cols-3 gap-7" v-if="!pageGroup || pageGroup?.length == 0">
      <div v-for="item in 12" :key="item" v-if="!pageImageList?.length">
        <div class="aspect-[3_/_2]">
          <empty-image />
        </div>
      </div>
      <div v-for="(item, index) in pageImageList" :key="index" v-else>
        <div class="aspect-[3_/_2]">
          <file-component 
          :alt="item.note || ''"
          type="img-full"
          :class="{'rounded-[50px]': item.border == 'rounded'}"
          :url="item.image || ''" 
          :collection="COLLECTION.IMAGE_LIBRARY" 
          controls
          :id="item.id" />
          <p class="mt-2">{{ item.note }}</p>
        </div>
      </div>
    </div>
    <template v-else>
      <div v-for="item in pageGroup" :key=item.id>
        <p class="heading-1 !text-[24px]">{{ item?.title || '' }}</p>
        <div class="grid grid-cols-3 gap-7">
          <div class="aspect-[3_/_2]" v-for="(item, index) in getImageListGroup(item?.group_name || '')" :key="index">
            <file-component 
            :alt="item.note || ''"
            type="img-full"
            :class="{'rounded-[50px]': item.border == 'rounded'}"
            :url="item.image || ''" 
            :collection="COLLECTION.IMAGE_LIBRARY" 
            controls
            :id="item.id" />
            <p class="mt-2">{{ item.note }}</p>
          </div>
        </div>

      </div>
    </template>
  </div>
  </template>
    
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { useAuthStore } from '~/store/auth';
  import { storeToRefs } from 'pinia';
  import  {COLLECTION} from "@/pocketbase";
  
  const authStore = useAuthStore();
  
  const { pageDetail, pageImageList, pageGroup } = storeToRefs(authStore);
  
    const route = useRoute();
    onMounted( async () => {
      try {
        if(route.params.url) {
          await authStore.getPageDetail(String(route.params.url));
          // if(pageDetail.value?.field.length) {
          // }
          await authStore.getPageImageList(route.params.url);
        }
      } catch (error) {
        
      }
    })
  
    const getImageListGroup = (group) => {
      return pageImageList.value.filter((e) => e.group == group)
    }
  </script>
    