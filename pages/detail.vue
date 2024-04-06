<template>
<div class="w-full h-[300px] relative">
  <!-- <empty-image /> -->
  <div class="flex-center sc-full bg-[#919191]"></div>
  <div class="sc-full flex-center flex-col font-bold px-7 absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2">
    <p class="text-[70px] text-white leading-[110px] tracking-[-3px]">TITLE</p>
    <div class="w-[300px] h-[1px] bg-white"></div>
  </div>
</div>
<div class="container mx-auto py-[70px]">
  <div class="grid grid-cols-3 gap-7">
    <div v-for="item in 12" :key="item">
      <div class="aspect-[3_/_2]">
        <empty-image />
      </div>
      <!-- <div>
        <p></p>
      </div> -->
    </div>
  </div>
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
  