<template>
    <header class="flex justify-between sticky top-0 left-0 w-full h-[90px] bg-transparent container z-10">
        <div></div>
        <div class="flex items-center justify-end">
            <div 
                class="w-[110px] font-semibold text-right duration-[0.4s] hover:text-primary cursor-pointer tracking-[-1px]" 
                v-for="(item, index) in navList" 
                :key="index"
            >
                {{ item.label }}
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const navList = ref([
    {label: 'Home', value: 'test'},
    {label: 'My Vlog', value: 'test'},
    {label: 'My Story', value: 'test'},
    {label: 'My Life', value: 'test'},
    {label: 'Follow Me', value: 'test'},
])
</script>