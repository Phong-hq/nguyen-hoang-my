<template>
  <NuxtLayout class="default">
    <NuxtPage />
  </NuxtLayout>
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
