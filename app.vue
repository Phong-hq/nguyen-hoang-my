<template>
  <NuxtLayout class="default">
    <div class="w-screen h-screen" v-if="loading"></div>
    <NuxtPage  v-else/>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useAuthStore } from './store/auth';

const authStore = useAuthStore();

const loading = ref(true);
onMounted(async () => {
  try {
    loading.value = true;
    authStore.getMyItinerary();
    authStore.getChessInfo();
    authStore.getMusicInfo();
    authStore.getSportInfo();
    authStore.getAllSections();
    await authStore.getInformation();
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
})
const lazyLoad = ref(false);
</script>
