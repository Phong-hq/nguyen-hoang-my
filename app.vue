<template>
  <NuxtLayout class="default">
    <div class="w-screen h-screen" v-if="loading"></div>
    <NuxtPage  v-else/>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useAuthStore } from './store/auth';
import { COLLECTION} from "@/pocketbase"


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
    authStore.getCommunity();
    await authStore.getInformation();
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
})

const setMeta = async () => {
  const data: any = await authStore.getPageMeta();
  useHead({
      title: data?.title,
      meta: [
          {
            name: "description",
            content: data?.description ,
          },
          {
              name: "image",
              content: `https://admin.nguyen-hoang-my.com/api/files/${COLLECTION.META}/${data?.id}/${data?.image}`,
            },
          {
              property: "og:title",
              content: data?.title
            },
            {
              property: "og:description",
              content: data?.description,
            },
            {
              property: "og:image",
              content: `https://admin.nguyen-hoang-my.com/api/files/${COLLECTION.META}/${data?.id}/${data?.image}`,
            },
      ]
  })
}

setMeta()
const lazyLoad = ref(false);
</script>
