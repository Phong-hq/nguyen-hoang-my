<template>
    <section class="bg-dark1 h-[500px] bg-[#f1f1f1] mt-[200px] relative my-itinerary">
        <div class="container mx-auto translate-x-1/2 absolute top-[-240px] right-1/2">
            <p class="heading-1 container">My itinerary</p>
            <p class="heading-2">Your personal commercial should be conversational and natural. The statement should not sound memorized and you should take care not to ramble. You want to appear confident, poised, and professional.</p>
            <div class="w-full max-w-[900px] h-[520px] mx-auto relative mt-10">
                <div class="absolute top-[-15px] left-[-15px] w-[calc(100%_+_30px)] h-[150px] bg-primary"></div>
                <swiper
                    :style="{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }"
                    :zoom="true"
                    :navigation="true"
                    :pagination="{
                        clickable: true,
                    }"
                    :autoplay="{
                        delay: 2500,
                        disableOnInteraction: false,
                    }"
                    :modules="modules"
                    class="mySwiper"
                >
                    <!-- <swiper-slide v-for="item in 13" :key="item">
                        <div class="swiper-zoom-container object-cover bg-white">
                            <img class="h-[500px] w-full" :src="getImageUrl(item)" />
                        </div> 
                    </swiper-slide> -->
                    <swiper-slide>
                        <div class="swiper-zoom-container object-cover bg-white">
                            <img class="h-[500px] w-full" src="../../assets/images/my-itinerary/1.jpg" />
                        </div> 
                    </swiper-slide>
                    <swiper-slide>
                        <div class="swiper-zoom-container object-cover bg-white">
                            <img class="h-[500px] w-full" src="../../assets/images/my-itinerary/2.jpg" />
                        </div> 
                    </swiper-slide>
                    <swiper-slide>
                        <div class="swiper-zoom-container object-cover bg-white">
                            <img class="h-[500px] w-full" src="../../assets/images/my-itinerary/3.jpg" />
                        </div> 
                    </swiper-slide>
                    <swiper-slide>
                        <div class="swiper-zoom-container object-cover bg-white">
                            <img class="h-[500px] w-full" src="../../assets/images/my-itinerary/4.jpg" />
                        </div> 
                    </swiper-slide>
                    <swiper-slide>
                        <div class="swiper-zoom-container object-cover bg-white">
                            <img class="h-[500px] w-full" src="../../assets/images/my-itinerary/5.jpg" />
                        </div> 
                    </swiper-slide>
                    <swiper-slide>
                        <div class="swiper-zoom-container object-cover bg-white">
                            <img class="h-[500px] w-full" src="../../assets/images/my-itinerary/6.jpg" />
                        </div> 
                    </swiper-slide>
                    <swiper-slide>
                        <div class="swiper-zoom-container object-cover bg-white">
                            <img class="h-[500px] w-full" src="../../assets/images/my-itinerary/7.jpg" />
                        </div> 
                    </swiper-slide>
                    <swiper-slide>
                        <div class="swiper-zoom-container object-cover bg-white">
                            <img class="h-[500px] w-full" src="../../assets/images/my-itinerary/8.jpg" />
                        </div> 
                    </swiper-slide>
                    <swiper-slide>
                        <div class="swiper-zoom-container object-cover bg-white">
                            <img class="h-[500px] w-full" src="../../assets/images/my-itinerary/9.jpg" />
                        </div> 
                    </swiper-slide>
                    <swiper-slide>
                        <div class="swiper-zoom-container object-cover bg-white">
                            <img class="h-[500px] w-full" src="../../assets/images/my-itinerary/10.jpg" />
                        </div> 
                    </swiper-slide>
                    <swiper-slide>
                        <div class="swiper-zoom-container object-cover bg-white">
                            <img class="h-[500px] w-full" src="../../assets/images/my-itinerary/11.jpg" />
                        </div> 
                    </swiper-slide>
                    <swiper-slide>
                        <div class="swiper-zoom-container object-cover bg-white">
                            <img class="h-[500px] w-full" src="../../assets/images/my-itinerary/12.jpg" />
                        </div> 
                    </swiper-slide>
                    <swiper-slide>
                        <div class="swiper-zoom-container object-cover bg-white">
                            <img class="h-[500px] w-full" src="../../assets/images/my-itinerary/13.jpg" />
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

const getImageUrl = (name: number) => {
    return new URL(`../../assets/images/my-itinerary/${name}.jpg`, import.meta.url).href;
}
</script>

<style lang="scss">
.my-itinerary{
    .swiper-button-prev, .swiper-button-next{
        &::after{
            // color: var(--color-primary);
            color: #c9c9c9;
        }
    }
}
</style>

