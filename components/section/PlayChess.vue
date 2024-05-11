<template>
    <section class="container mx-auto">
        <p class="heading-1">Play chess</p>
        <p class="heading-2">{{ chess?.description || '' }}</p>
        <div class="grid grid-cols-4 gap-7">
            <div class="row-span-2 col-span-2">
                <file-component class="!h-full" :url="chess?.main_image" :collection="COLLECTION.CHESS" :id="chess?.id" />
            </div>
            <div class="aspect-[3_/_2]" v-for="item in 4" :key="item">
                <file-component :url="chess?.list_image?.length ? chess?.list_image[item-1] : ''" :collection="COLLECTION.CHESS" :id="chess?.id" />
            </div>
        </div>
        <!-- <div class="w-full flex justify-end">
        </div> -->
        <see-more-btn />
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

