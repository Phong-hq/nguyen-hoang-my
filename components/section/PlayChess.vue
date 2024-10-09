<template>
    <section class="container mx-auto">
        <p class="heading-1">chess</p>
        <p class="heading-2">{{ chess?.description || '' }}</p>
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
                        <swiper-slide  v-for="item in chess?.main_image" :key="item">
                            <file-component class="max-h-full z-[24125]" :url="item" :collection="COLLECTION.CHESS" :id="chess?.id" />
                        </swiper-slide>
                    </swiper>
                </div>
                <!-- <file-component class="absolute inset-0 sc-full" :url="chess?.main_image" :collection="COLLECTION.CHESS" :id="chess?.id" /> -->
            </div>
        <!-- <div class="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-7">
            <div class="aspect-[3_/_2]" v-for="item in 4" :key="item">
                <file-component class="max-h-full" :url="chess?.list_image?.length ? chess?.list_image[item-1] : ''" :collection="COLLECTION.CHESS" :id="chess?.id" />
            </div>
        </div> -->
        <file-category class="w-full md:w-1/2" :description="chess_group[0]?.title" @click="seeMoreRef?.handleClick()">
            <file-component class=" max-h-full aspect-[3_/_2]" :url="chess_group[0].image" :collection="COLLECTION.CHESS_GROUP" :id="chess_group[0]?.id" :normal="true"/>
        </file-category>
        <!-- <div class="w-full md:w-1/2 relative">
            <div class="absolute inset-0 sc-full flex-center bg-[#00000080] z-[2] opacity-[0] duration-200 hover:opacity-[1]">
                <p class="text-white">asdasf</p>
            </div>
        </div> -->

    </div>
    <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-7 mt-7">
        <file-category class="w-full" :description="chess_group[item]?.title"  v-for="item in 3" :key="item" @click="seeMoreRef?.handleClick()">
            <file-component class=" max-h-full aspect-[3_/_2]" :url="chess_group[item].image" :collection="COLLECTION.CHESS_GROUP" :id="chess_group[item]?.id" :normal="true"/>
        </file-category>
    </div>

    <!-- <div class="w-full grid grid-cols-1 md:grid-cols-4 gap-7 mt-7">
        <div class="aspect-[3_/_2]" v-for="item in 4" :key="item">
            <file-component class="max-h-full" :url="chess?.list_image?.length ? chess?.list_image[item + 3] : ''" :collection="COLLECTION.CHESS" :id="chess?.id" />
        </div>
    </div> -->
        <see-more-btn ref="seeMoreRef" :data="chess" />
    </section>
</template>

<script setup>

import { useAuthStore } from '~/store/auth';
import { storeToRefs } from 'pinia';
import  {COLLECTION} from "@/pocketbase";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Zoom, Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const authStore = useAuthStore();

const { chess, chess_group } = storeToRefs(authStore);
const modules = ref([Zoom, Navigation, Pagination, Autoplay]);
const seeMoreRef = ref(null)

</script>

<style lang="scss">
</style>

