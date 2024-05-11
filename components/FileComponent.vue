<template>
    <div class="flex-center sc-full bg-[#919191]" v-if="!url || !collection || !id">
        <img class="max-w-[200px] max-h-[200px] w-[50%] h-[50%]" src="../assets/images/empty.png" alt="">
    </div>
    <img class="w-full" :src="link" alt="" v-else-if="(type || 'img') == 'img'">
    <video class="flex-center sc-full" height="300px" autoplay muted loop id="vid" style="border: solid 1px transparent;" v-else>
        <source :src="link" type="video/mp4">
        Your browser does not support HTML video.
    </video>
</template>

<script setup>
    const props = defineProps(['type', 'url', 'collection', 'id']);
    const link = computed(() => `http://127.0.0.1:8090/api/files/${props.collection}/${props.id}/${props.url}`)
</script>