<template>
    <section class="container mx-auto">
        <p class="heading-1">Play chess</p>
        <p class="heading-2">{{ chess?.description || '' }}</p>
        <div class="flex gap-7">
            <div class="w-1/2 relative">
                <file-component class="absolute inset-0 sc-full" :url="chess?.main_image" :collection="COLLECTION.CHESS" :id="chess?.id" />
            </div>
        <div class="w-1/2 grid grid-cols-2 gap-7">
            <div class="aspect-[3_/_2]" v-for="item in 4" :key="item">
                <file-component class="max-h-full" :url="chess?.list_image?.length ? chess?.list_image[item-1] : ''" :collection="COLLECTION.CHESS" :id="chess?.id" />
            </div>
        </div>
        </div>
        <see-more-btn url="chess" />
    </section>
</template>

<script setup>

import { useAuthStore } from '~/store/auth';
import { storeToRefs } from 'pinia';
import  {COLLECTION} from "@/pocketbase";

const authStore = useAuthStore();

const { chess } = storeToRefs(authStore);

</script>

<style lang="scss">
</style>

