<template>
    <section class="mx-auto">
        <p class="heading-1 container">Music</p>
        <p class="heading-2 container ">{{ music?.description || '' }}</p>
        <file-component class="w-full !h-[500px]" :url="music?.video" type="video" controls :collection="COLLECTION.MUSIC" :id="music?.id" />
    </section>
</template>

<script setup>
import { useAuthStore } from '~/store/auth';
import { storeToRefs } from 'pinia';
import  {COLLECTION} from "@/pocketbase";

const authStore = useAuthStore();

const { music } = storeToRefs(authStore);
</script>

<style lang="scss">
</style>

