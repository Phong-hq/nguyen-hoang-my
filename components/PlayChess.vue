<template>
    <section class="container mx-auto">
        <p class="heading-1">Play chess</p>
        <div class="grid grid-cols-4 gap-7">
            <img class="w-full h-[428px] row-span-2" src="../assets/images/play-chess/3.jpg" alt="">
            <img class="w-full h-[428px] row-span-2" src="../assets/images/play-chess/4.jpg" alt="">
            <video class="w-full h-[200px]" controls>
                <source src="../assets/images/play-chess/playchess.mp4" type="video/mp4">
            </video>
            <img class="w-full h-[200px]" src="../assets/images/play-chess/1.jpg" alt="">
            <img class="w-full h-[200px]" src="../assets/images/play-chess/2.jpg" alt="">
            <img class="w-full h-[200px]" src="../assets/images/play-chess/5.jpg" alt="">
            <!-- <img class="w-full h-[200px]" src="../assets/images/play-chess/6.jpg" alt="">
            <img class="w-full h-[200px]" src="../assets/images/play-chess/19.jpg" alt="">
            <img class="w-full h-[200px]" src="../assets/images/play-chess/20.jpg" alt="">
            <img class="w-full h-[200px]" src="../assets/images/play-chess/21.jpg" alt=""> -->
            <img class="w-full h-[200px]" src="../assets/images/play-chess/22.jpg" alt="">
            <img class="w-full h-[200px]" src="../assets/images/play-chess/23.jpg" alt="">
            <img class="w-full h-[200px]" src="../assets/images/play-chess/24.jpg" alt="">
            <img class="w-full h-[200px]" src="../assets/images/play-chess/25.jpg" alt="" >
        </div>
    </section>
</template>

<script lang="ts" setup>

const getImageUrl = (name: string | number) => {
    return new URL(`../assets/images/play-chess/${name}.jpg`, import.meta.url).href ;
}
</script>

<style lang="scss">
</style>

