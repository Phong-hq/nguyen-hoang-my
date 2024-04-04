<template>
    <section class="bg-dark1">
        <div class="container mx-auto">
            <p class="heading-1">Handmade</p>
            <div class="">
                <!-- <video class="w-full h-[880px]" controls>
                    <source src="../assets/images/handmade/handmade.mp4" type="video/mp4">
                </video> -->
                <!-- <div class="grid grid-cols-4 gap-10">
                    <img class="w-full h-[400px]" src="../assets/images/handmade/2.jpg" alt="">
                    <img class="w-full h-[400px] mt-[50px]" src="../assets/images/handmade/6.jpg" alt="">
                    <img class="w-full h-[400px] mt-[100px]" src="../assets/images/handmade/4.jpg" alt="">
                    <img class="w-full h-[400px] mt-[150px]" src="../assets/images/handmade/5.jpg" alt="">
                </div> -->
                <!-- <img class="w-full h-[200px]" src="../assets/images/handmade/5.jpg" alt="">
                <img class="w-full h-[200px]" src="../assets/images/handmade/7.jpg" alt="">
                <img class="w-full h-[200px]" src="../assets/images/handmade/8.jpg" alt="">
                <img class="w-full h-[200px]" src="../assets/images/handmade/9.jpg" alt=""> -->
                <swiper
                    :style="{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }"
                    :autoplay="{
                        delay: 2500,
                        disableOnInteraction: false,
                    }"
                    :slidesPerView="4"
                    :spaceBetween="24"
                    :zoom="true"
                    :navigation="true"
                    :pagination="{
                        clickable: true,
                    }"
            
                    :modules="modules"
                    class="mySwiper"
                >
                    <!-- <swiper-slide v-for="item in 7" :key="item">
                        <div class=" ">
                            <img class="h-[420px] w-full" :src="getImageUrl(item)" />
                        </div> 
                    </swiper-slide> -->
                    <swiper-slide>
                        <div class=" ">
                            <img class="h-[420px] w-full" src="../assets/images/handmade/6.jpg" />
                        </div> 
                    </swiper-slide>
                    <swiper-slide>
                        <div class=" ">
                            <img class="h-[420px] w-full" src="../assets/images/handmade/5.jpg" />
                        </div> 
                    </swiper-slide>
                    <swiper-slide>
                        <div class=" ">
                            <img class="h-[420px] w-full" src="../assets/images/handmade/4.jpg" />
                        </div> 
                    </swiper-slide>
                    <swiper-slide>
                        <div class=" ">
                            <img class="h-[420px] w-full" src="../assets/images/handmade/1.jpg" />
                        </div> 
                    </swiper-slide>
                    <swiper-slide>
                        <div class=" ">
                            <img class="h-[420px] w-full" src="../assets/images/handmade/2.jpg" />
                        </div> 
                    </swiper-slide>
                    <swiper-slide>
                        <div class=" ">
                            <img class="h-[420px] w-full" src="../assets/images/handmade/3.jpg" />
                        </div> 
                    </swiper-slide>
                    <swiper-slide>
                        <div class=" ">
                            <img class="h-[420px] w-full" src="../assets/images/handmade/7.jpg" />
                        </div> 
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Zoom, Navigation, Pagination, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';

import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const modules = ref([Zoom, Navigation, Pagination, Autoplay]);
const getImageUrl = (name: string | number) => {
    return new URL(`../assets/images/handmade/${name}.jpg`, import.meta.url).href ;
}
</script>

<style lang="scss">
</style>

