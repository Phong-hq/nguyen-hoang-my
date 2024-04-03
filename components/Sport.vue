<template>
    <section class="bg-dark1">
        <div class="container mx-auto">
            <p class="heading-1">Sport</p>
            <div class="grid grid-cols-2 gap-7">
                <video class="w-full h-[880px]" controls>
                    <source src="../assets/images/sport/sport.mp4" type="video/mp4">
                </video>
                <div class="grid grid-cols-2 grid-rows-4 gap-7">
                    <img class="w-full h-[428px] row-span-2" src="../assets/images/sport/2.jpg" alt="">
                    <img class="w-full h-[200px]" src="../assets/images/sport/3.jpg" alt="">
                    <img class="w-full h-[200px]" src="../assets/images/sport/4.jpg" alt="">
                    <img class="w-full h-[200px]" src="../assets/images/sport/5.jpg" alt="">
                    <img class="w-full h-[200px]" src="../assets/images/sport/7.jpg" alt="">
                    <img class="w-full h-[200px]" src="../assets/images/sport/8.jpg" alt="">
                    <img class="w-full h-[200px]" src="../assets/images/sport/9.jpg" alt="">

                </div>
            </div>
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

