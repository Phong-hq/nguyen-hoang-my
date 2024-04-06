<template>
    <div class="w-full flex !justify-end mt-7">
        <button class="h-10 bg-primary text-white hover:bg-[#242424] duration-200 px-4" @click="handleClick">
            See more
        </button>
    </div>
</template>

<script lang="ts" setup>

const router = useRouter();
const handleClick = () => {
    router.push({name: 'detail'})
}
</script>