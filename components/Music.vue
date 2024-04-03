<template>
    <section class="mx-auto">
        <p class="heading-1">Music</p>
        <video class="w-full h-[500px]" controls>
            <source src="../assets/images/music.mp4" type="video/mp4">
        </video>
    </section>
</template>

<script lang="ts" setup>

const getImageUrl = (name: string | number) => {
    return new URL(`../assets/images/play-chess/${name}.jpg`, import.meta.url).href ;
}
</script>

<style lang="scss">
</style>

