<template>
    <section class="bg-dark1">
        <div class="container mx-auto">
            <p class="heading-1">Handmade</p>
            <p class="heading-2">{{ handMade?.description || '' }}</p>
            <!-- <p>option 1</p> -->

            <div class="grid grid-cols-2 gap-7">
                <div class="relative">
                    <file-component class="absolute inset-0 w-full !h-full" :url="handMade?.video" muted type="video" :collection="COLLECTION.HAND_MAKE" :id="handMade?.id"/>
                </div>
                <div class="" v-if="imageLength">
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
                        <swiper-slide  v-for="item in imageLength" :key="item">
                            <div class="flex flex-col gap-y-7">
                                <div class="aspect-square overflow-hidden" v-for="item2 in 3" :key="item2">
                                    <!-- <empty-image /> -->
                                    <file-component class="!h-full" :url="imageUrl(item, item2)" :collection="COLLECTION.HAND_MAKE" :id="handMade?.id" />
                                </div>
                            </div>
                        </swiper-slide>
                    
                    </swiper>
                </div>
            </div>
            <!-- <p>option 2</p> -->
            <!-- <div class="grid grid-cols-3 gap-7 mt-7 !hidden ">
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
            </div> -->
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Zoom, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useAuthStore } from '~/store/auth';
import { storeToRefs } from 'pinia';
import  {COLLECTION} from "@/pocketbase";

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const authStore = useAuthStore();

const { handMade } = storeToRefs(authStore);

const modules = ref([Zoom, Navigation, Pagination, Autoplay]);

const imageLength = computed(() => {
    if(!handMade.value) return 0;
    return ((handMade.value?.image?.length || 0) / 3) + ((handMade.value?.image?.length || 0) % 3 > 0 ? 1 : 0);
})

const imageUrl = (index1, index2) => {
    if(!handMade.value) return '';
    return handMade.value?.image[(index1-1) * 3 + index2] || ''
}

</script>

<style lang="scss">
</style>

