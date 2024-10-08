<template>
        <div class="relative cursor-pointer">
            <div class="absolute inset-0 sc-full flex-center bg-[#00000080] z-[2] opacity-[0] duration-200 hover:opacity-[1]">
                <p class="text-white">{{ description }}</p>
            </div>
            <slot />
        </div>
</template>

<script setup>
const props = defineProps(['description']);
</script>

<style lang="scss">
</style>

