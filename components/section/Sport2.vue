<template>
    <section class="container mx-auto">
        <p class="heading-1">Sport</p>
        <p class="heading-2">{{ sport?.description || '' }}</p>
        <div class="grid grid-cols-4 gap-7">
            <div class="row-span-2 col-span-2">
                <file-component class="!h-full" :url="sport?.main_image" :collection="COLLECTION.SPORT" :id="sport?.id" />

            </div>
            <div class="aspect-[3_/_2]" v-for="item in 4" :key="item">
                <file-component :url="sport?.list_image?.length ? sport?.list_image[item-1] : ''" :collection="COLLECTION.SPORT" :id="sport?.id" />
            </div>
        </div>
        <see-more-btn url="sport"/>
    </section>
</template>

<script setup>
import { useAuthStore } from '~/store/auth';
import { storeToRefs } from 'pinia';
import  {COLLECTION} from "@/pocketbase";

const authStore = useAuthStore();

const { sport } = storeToRefs(authStore);
</script>

<style lang="scss">
</style>

