<template>
    <section class="!pb-10">
        <div class="w-full grid grid-cols-[30%_70%] h-[400px] relative">
            <file-component class="!h-[400px]" :url="information?.banner" :collection="COLLECTION.INFO" :id="information?.id"/>
            <file-component class="w-full !h-[400px]" :url="information?.introduce_video" muted type="video" :collection="COLLECTION.INFO" :id="information?.id"/>
            <div class="w-full h-[100px] bg-[#ffffff27] backdrop-blur-[133px] absolute bottom-0 left-0">
                <div class="container h-full grid grid-cols-4 mx-auto text-[18px]">
                    <div class="flex flex-col pt-5">
                        <p><span class="font-bold">Name:</span></p>
                        <p>{{ information?.full_name || DEFAULT_VALUE }}</p>
                    </div>
                    <div class="flex flex-col pt-5">
                        <p><span class="font-bold">Year of Birth:</span></p>
                        <p>{{ information?.year_of_birth || DEFAULT_VALUE }}</p>
                    </div>
                    <div class="flex flex-col pt-5">
                        <p><span class="font-bold">Gender:</span></p>
                        <p>{{ information?.gender || DEFAULT_VALUE }}</p>
                    </div>
                    <div class="flex flex-col pt-5">
                        <p><span class="font-bold">school:</span></p>
                        <p>{{ information?.school || DEFAULT_VALUE }}</p>
                    </div>
                </div>

            </div>
        </div>
        <div class="pt-7">
            <p class="text-center text-[32px] font-semibold mb-4">About me</p>
            <p class="text-center max-w-[700px] mx-auto">{{ information?.about_me || '' }}</p>
        </div>
    </section>
</template>

<script setup>
import { useAuthStore } from '~/store/auth';
import { storeToRefs } from 'pinia';
import  {COLLECTION} from "@/pocketbase";

const authStore = useAuthStore();

const { information } = storeToRefs(authStore);

const DEFAULT_VALUE = '----------------------------------------'

onMounted(() => {
})
</script>

