<template>
    <div class="w-full flex !justify-end mt-7"  v-if="url">
        <button class="h-10 bg-primary text-white hover:bg-[#242424] duration-200 px-4" @click="handleClick">
            See more
        </button>
    </div>
</template>

<script lang="ts" setup>

const router = useRouter();

const props = defineProps({
    url: {
        type: String,
        default: ''
    }
})
const handleClick = () => {
    router.push({path: '/detail/' + props.url})
}
</script>