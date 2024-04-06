<template>
    <section class="mx-auto">
        <p class="heading-1 container">Music</p>
        <p class="heading-2 container ">Your personal commercial should be conversational and natural. The statement should not sound memorized and you should take care not to ramble. You want to appear confident, poised, and professional.</p>
        <video class="w-full h-[500px]" controls>
            <source src="../../assets/images/music.mp4" type="video/mp4">
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

