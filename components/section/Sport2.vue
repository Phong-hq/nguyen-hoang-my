<template>
    <section class="container mx-auto">
        <p class="heading-1">Sport</p>
        <p class="heading-2">{{ sport?.description || '' }}</p>
        <div class="flex !grid grid-cols-1 md:grid-cols-2 gap-7">
            <div class="w-full aspect-[3_/_2] relative">
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
            <!-- <file-category class="w-full" :description="sport_group[0]?.title"  @click="seeMoreRef?.handleClick()">
                <file-component class=" max-h-full aspect-[3_/_2]" :url="sport_group[0].image" :collection="COLLECTION.SPORT_GROUP" :id="sport_group[0]?.id" :normal="true"/>
            </file-category> -->

            <file-category class="w-full" :description="sport_group[item-1]?.title" v-for="item in 3" :key="item" @click="seeMoreRef?.handleClick(sport_group[item-1]?.id)">
                <file-component class=" max-h-full aspect-[3_/_2]" :url="sport_group[item-1].image" :collection="COLLECTION.SPORT_GROUP" :id="sport_group[item-1]?.id" :normal="true"/>
            </file-category>
        </div>
        <!-- <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-7 mt-7"> -->
            <!-- <div class="aspect-[3_/_2]" v-for="item in 4" :key="item">
                <file-component class="max-h-full" :url="sport?.list_image?.length ? sport?.list_image[item + 3] : ''" :collection="COLLECTION.SPORT" :id="sport?.id" />
            </div> -->
        <!-- </div> -->
        <!-- <see-more-btn url="sport"/> -->
        <see-more-btn ref="seeMoreRef" :data="sport"/>
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

const { sport, sport_group } = storeToRefs(authStore);
const modules = ref([Zoom, Navigation, Pagination, Autoplay]);


const seeMoreRef = ref(null)

const getSport = (id) => {
    sport.filter(item => item.id == id)
}
</script>

<style lang="scss">
</style>

