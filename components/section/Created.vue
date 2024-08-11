<template>
    <section :class="{'bg-dark1': index % 2 == 0}">
        <div class="container mx-auto">
            <p class="heading-1">Handmade</p>
            <p class="heading-2">{{ data?.description || '' }}</p>
            <div class="grid grid-cols-4 gap-7">
                <div class=""       
                    v-for="(img, i) in data.content" 
                    :key="i"
                >
                    <file-component 
                        :url="img" 
                        :collection="COLLECTION.SECTIONS" 
                        :id="data?.id" 
                        controls
                        type="img-full"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
// import { Swiper, SwiperSlide } from 'swiper/vue';
// import { Zoom, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useAuthStore } from '~/store/auth';
import { storeToRefs } from 'pinia';
import  {COLLECTION} from "@/pocketbase";

// Import Swiper styles
// import 'swiper/css';

// import 'swiper/css/zoom';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

const props = defineProps({
    data: {
        type: Object,
        default: {}
    },
    index: {
        type: Number,
        default: 0
    }
})

const authStore = useAuthStore();

const { handMade } = storeToRefs(authStore);

// const modules = ref([Zoom, Navigation, Pagination, Autoplay]);

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

