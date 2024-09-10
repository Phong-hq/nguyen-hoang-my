<template>
    <div class="w-full flex !justify-end mt-7"  v-if="data?.slug">
        <button class="h-10 bg-primary text-white hover:bg-[#242424] duration-200 px-4" @click="handleClick">
            See more
        </button>
    </div>
</template>

<script setup>

const router = useRouter();

const props = defineProps({
    data: {
        type: Object,
        default: {}
    }
})
const handleClick = () => {
    router.push({path: '/slug/' + props.data?.slug})
}

</script>