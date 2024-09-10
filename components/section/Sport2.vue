<template>
    <section class="container mx-auto">
        <p class="heading-1">Sport</p>
        <p class="heading-2">{{ sport?.description || '' }}</p>
        <div class="flex gap-7">
            <div class="w-full md:w-1/2 relative md:row-span-2">
                <div class="w-full h-[300px] md:h-full">
                    <swiper
                        :style="{
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#fff',
                            'height': '100%'
                        }"
                        :autoplay="{
                            delay: 5000,
                            disableOnInteraction: false,
                        }"
                        :slidesPerView="1"
                        :spaceBetween="24"
                        :zoom="true"
                        :navigation="true"
                        :pagination="{
                            clickable: true,
                        }"
                
                        :modules="modules"
                        class="mySwiper"
                    >
                        <swiper-slide  v-for="item in sport?.main_image" :key="item">
                            <file-component class="max-h-full z-[24125]" :url="item" :collection="COLLECTION.SPORT" :id="sport?.id" />
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
            <div class="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-7">
                <div class="aspect-[3_/_2]" v-for="item in 4" :key="item">
                    <file-component class="max-h-full" :url="sport?.list_image?.length ? sport?.list_image[item-1] : ''" :collection="COLLECTION.SPORT" :id="sport?.id" />
                </div>
            </div>
        </div>
        <div class="w-full grid grid-cols-1 md:grid-cols-4 gap-7 mt-7">
        <div class="aspect-[3_/_2]" v-for="item in 4" :key="item">
            <file-component class="max-h-full" :url="sport?.list_image?.length ? sport?.list_image[item + 3] : ''" :collection="COLLECTION.SPORT" :id="sport?.id" />
        </div>
    </div>
        <!-- <see-more-btn url="sport"/> -->
        <see-more-btn :data="sport"/>
    </section>
</template>

<script setup>
import { useAuthStore } from '~/store/auth';
import { storeToRefs } from 'pinia';
import { COLLECTION } from "@/pocketbase";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Zoom, Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const authStore = useAuthStore();

const { sport } = storeToRefs(authStore);
const modules = ref([Zoom, Navigation, Pagination, Autoplay]);

const getSport = (id) => {
    sport.filter(item => item.id == id)
}
</script>

<style lang="scss">
</style>

