<template>
    <section class="!pb-10">
        <div class="w-full flex relative">
            <!-- <div class="shrink-0 min-w-[300px] w-[40%] aspect-[3_/_2]">
                <file-component class="" :url="information?.banner" :collection="COLLECTION.INFO" :id="information?.id"/>
            </div> -->
            <div class="w-full grow relative"  id="bannerRef">
                <a-button class="!w-[50px] h-[50px] !bg-[#ffffffa3] absolute left-10 top-10 z-[1] !border-none"  shape="circle" @click="isMuted = !isMuted">
                    <template #icon>
                        <img class="w-10 h-10 anticon" src="@/assets/images/icons/volume_off.png" alt="" v-if="isMuted">
                        <img class="w-10 h-10 anticon" src="@/assets/images/icons/volume_hight.png" alt="" v-else>
                    </template>
                </a-button>
                <!-- <file-component class="w-full" :url="information?.introduce_video" :vd-autoplay="true" autoplay controls loop type="video" :collection="COLLECTION.INFO" :id="information?.id"/> -->
                <file-component class="w-full" :url="information?.introduce_video" :muted="isMuted" :vd-autoplay="true" autoplay controls loop type="video" :collection="COLLECTION.INFO" :id="information?.id"/>
            </div>
            <div class="w-full h-[80px] md:h-[80px] bg-[#ffffffa3] backdrop-blur-[133px] absolute bottom-0 left-0">
                <div class="flex flex-col md:flex-row h-full items-center justify-center md:justify-between container mx-auto px-5 gap-2">
                    <div class=" flex items-center gap-3 md:gap-7">
                        <a class="hover:text-primary" :href="information?.instagram" target="_blank">
                            <InstagramOutlined class="text-[24px] md:text-[32px]" />
                        </a>
                        <a class="hover:text-primary" :href="information?.facebook" target="_blank">
                            <FacebookOutlined class="text-[24px] md:text-[32px]" />
                        </a>
                        <a class="hover:text-primary" :href="information?.youtube" target="_blank">
                            <YoutubeOutlined class="text-[24px] md:text-[32px]" />
                        </a>
                    </div>
                    <div class="flex items-center gap-7">
                        <a class="flex items-center gap-1 hover:text-primary":href="information?.mail ? `mailto:`+information?.mail : ''">
                            <MailOutlined />
                            {{information?.mail}}
                        </a>
                        <a class="flex items-center gap-1 hover:text-primary" :href="information?.phone ? `tel:`+information?.phone : ''">
                            <PhoneOutlined />
                            {{information?.phone}}
                        </a>
                    </div>
                </div>
                <!-- <div class="container h-full grid grid-cols-4 mx-auto text-[18px]">
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
                </div> -->

            </div>
        </div>
        <div class="pt-7">
            <!-- <p class="text-center text-[32px] font-semibold mb-4">About me</p>
            <p class="text-center max-w-[700px] mx-auto">{{ information?.about_me || '' }}</p> -->
        </div>
    </section>
</template>

<script setup>
import { useAuthStore } from '~/store/auth';
import { storeToRefs } from 'pinia';
import  {COLLECTION} from "@/pocketbase";
import { InstagramOutlined, FacebookOutlined, YoutubeOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons-vue';

const authStore = useAuthStore();

const { information } = storeToRefs(authStore);

const DEFAULT_VALUE = '----------------------------------------'

onMounted(() => {
})

const isMuted = ref(true)

const handleVideoLoad = () => {
    const video = document.querySelector('#bannerRef video')
    video?.play()
}

const bannerRef = ref(null)
</script>

