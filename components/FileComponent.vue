<template>
    <div class="flex-center sc-full bg-[#919191]" v-if="!url || !collection || !id">
        <!-- <img class="max-w-[200px] max-h-[200px] w-[50%] h-[50%]" src="../assets/images/empty.png" alt=""> -->
        <a-image
            class="max-w-[200px] max-h-[200px] w-[50%] h-[50%]"
            :src="link"
        />
    </div>
    <video class="flex-center sc-full" height="300px" ref="videoRef" id="vid" style="border: solid 1px transparent;" v-else-if="isVideo || type == 'video'">
        <source :src="link" type="video/mp4">
        Your browser does not support HTML video.
    </video>
    <!-- <img class="w-full" :src="link" alt=""  v-else-if="type == 'img-full'"> -->
    <a-image
        class="w-full"
        :src="link"
            v-else-if="type == 'img-full'"
    />
    <div class="sc-full overflow-hidden relative" v-else >
        <div class="min-w-full w-auto absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2">
            <!-- <img class="" :src="link" alt=""> -->
            <a-image
                class="w-full"
                :src="link"
            />
        </div>
    </div>
</template>

<script setup>
    const props = defineProps(['type', 'url', 'collection', 'id', 'vdAutoplay']);
    const link = computed(() => `https://admin.nguyen-hoang-my.com/api/files/${props.collection}/${props.id}/${props.url}`);
    const isVideo = computed(() => {
        const videoExtensions = ['.mp4', '.webm', '.ogg', '.avi', '.mov', '.mkv'];
        const extension = props.url.split('.').pop().toLowerCase();
        return videoExtensions.includes('.' + extension);
    });
    const videoRef = ref(null)
    onMounted(() => {
        if(!props.vdAutoplay && videoRef.value != null) {
            videoRef.value?.pause()
        }
    })
</script>