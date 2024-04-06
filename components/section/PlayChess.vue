<template>
    <section class="container mx-auto">
        <p class="heading-1">Play chess</p>
        <p class="heading-2">Your personal commercial should be conversational and natural. The statement should not sound memorized and you should take care not to ramble. You want to appear confident, poised, and professional.</p>
        <div class="grid grid-cols-4 gap-7">
            <div class="row-span-2 col-span-2">
                <empty-image />
            </div>
            <div class="aspect-[3_/_2]" v-for="item in 4" :key="item">
                <empty-image />
            </div>
        </div>
        <!-- <div class="w-full flex justify-end">
        </div> -->
        <see-more-btn />
    </section>
</template>

<script lang="ts" setup>

const getImageUrl = (name: string | number) => {
    return new URL(`../assets/images/play-chess/${name}.jpg`, import.meta.url).href ;
}
</script>

<style lang="scss">
</style>

