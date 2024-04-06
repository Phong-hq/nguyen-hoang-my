<template>
    <section class="bg-dark1">
        <div class="container mx-auto">
            <p class="heading-1">Handmade</p>
            <p class="heading-2">Your personal commercial should be conversational and natural. The statement should not sound memorized and you should take care not to ramble. You want to appear confident, poised, and professional.</p>
            <p>option 1</p>

            <div class="grid grid-cols-2 gap-7">
                <div class="col-span-1">
                    <video class="sc-full aspect-square border-1" height="300px" autoplay muted loop id="vid" style="border: solid 1px #000;">
                        <source src="../../assets/video/mov_bbb.mp4" type="video/mp4">
                        Your browser does not support HTML video.
                    </video>
                </div>
                <!-- <div class="grid grid-cols-3 gap-4">
                    <div class="aspect-square" v-for="item in 8" :key="item">
                        <empty-image />
                    </div>
                </div> -->
                <div class="">
                    <swiper
                        :style="{
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#fff',
                        }"
                        :autoplay="{
                            delay: 2500,
                            disableOnInteraction: false,
                        }"
                        :slidesPerView="3"
                        :spaceBetween="24"
                        :zoom="true"
                        :navigation="true"
                        :pagination="{
                            clickable: true,
                        }"
                
                        :modules="modules"
                        class="mySwiper"
                    >
                        <swiper-slide  v-for="item2 in 6" :key="item2">
                            <div class="flex flex-col gap-y-7">
                                <div class="aspect-square" v-for="item in 3" :key="item">
                                    <empty-image />
                                </div>
                            </div>
                        </swiper-slide>
                    
                    </swiper>
                </div>
            </div>
            <p>option 2</p>
            <div class="grid grid-cols-3 gap-7 mt-7">
                <div class="col-span-1">
                    <video class="sc-full aspect-[3_/_3] border-1" height="300px" autoplay muted loop id="vid" style="border: solid 1px #000;">
                        <source src="../../assets/video/mov_bbb.mp4" type="video/mp4">
                        Your browser does not support HTML video.
                    </video>
                </div>
                <div class="col-span-2">
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
                        <swiper-slide  v-for="item2 in 6" :key="item2">
                            <div class="flex flex-col gap-y-7">
                                <div class="aspect-square" v-for="item in 2" :key="item">
                                    <empty-image />
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
            <!-- <div class="">
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
            </div> -->
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

