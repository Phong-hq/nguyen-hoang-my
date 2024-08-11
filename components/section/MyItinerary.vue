<template>
    <section class="bg-dark1 h-[500px] bg-[#f1f1f1] mt-[240px] relative my-itinerary">
        <div class="container mx-auto translate-x-1/2 absolute top-[-320px] right-1/2">
            <p class="heading-1 container">My itinerary</p>
            <!-- <p class="heading-2">{{itinerary?.description || ''}}</p> -->
            <div class="w-full max-w-[900px] h-[520px] mx-auto relative mt-10" v-if="itinerary?.image?.length > 0">
                <div class="flex overflow-hidden z-[1]" style="box-shadow: 0px 4px 24px -1px #0000001a;">
                    <div class="shrink-0 w-[30%] bg-white flex items-center z-[1] p-7">
                        <p class="heading-2 text-[18px]">{{itinerary?.description || ''}}</p>
                    </div>
                    <div class="w-[70%]">
                        <swiper
                            :style="{
                                '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',
                            }"
                            :zoom="true"
                            :navigation="false"
                            :pagination="false"
                            :autoplay="{
                                delay: 2500,
                                disableOnInteraction: false,
                            }"
                            :modules="modules"
                            class="mySwiper"
                        >
                            <swiper-slide v-for="item in itinerary?.image" :key="item">
                                <div class="swiper-zoom-container object-cover bg-white">
                                    <file-component class="!h-[500px]" :url="item" :collection="COLLECTION.ITINERARY" :id="itinerary?.id"/>
                                </div> 
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
                <div class="absolute top-[-15px] right-[-15px] w-[100px] h-[100px] bg-primary"></div>
                <div class="absolute bottom-[5px] left-[-15px] w-[100px] h-[100px] bg-primary"></div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
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
const { itinerary } = storeToRefs(authStore);

const modules = ref([Zoom, Navigation, Pagination, Autoplay]);


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

