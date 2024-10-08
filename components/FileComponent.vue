<template>
    <div class="flex-center sc-full bg-[#919191]" v-if="!url || !collection || !id">
        <!-- <img class="max-w-[200px] max-h-[200px] w-[50%] h-[50%]" src="../assets/images/empty.png" alt=""> -->
        <a-image
            :alt="alt || ''"
            class="max-w-[200px] max-h-[200px] w-[50%] h-[50%]"
            :src="link"
            :preview="previewType"
        />
    </div>
    <video class="flex-center sc-full" height="300px" ref="videoRef" id="vid" style="border: solid 1px transparent;" v-else-if="isVideo || type == 'video'">
        <source :src="link" type="video/mp4">
        Your browser does not support HTML video.
    </video>
    <!-- <img class="w-full" :src="link" alt=""  v-else-if="type == 'img-full'"> -->
     <div class="w-full" v-else-if="type == 'img-full'">
        <teleport to="body">
            <div class="fixed left-0 bottom-0 bg-[#ffffffbf] w-full z-[9999] flex-center font-semibold text-3xl p-7 px-[20%]" v-if="alt && showAlt">
                {{alt}}
            </div>
        </teleport>
        <img class="" :src="link" alt="" v-if="normal">
         <a-image
            :alt="alt || ''"
            class="w-full"
            :src="link"
            :preview="previewType"
            v-else 
         />
     </div>
    <div class="sc-full overflow-hidden relative" v-else >
        <div class="min-w-full w-auto absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2">
            {{normal  }}
            <img class="" :src="link" alt="" v-if="normal">
            <a-image
                :alt="alt || ''"
                class="w-full"
                :src="link"
                :preview="previewType"
                v-else
            />
        </div>
        <teleport to="body">
            <div class="fixed left-0 bottom-0 bg-[#ffffffbf] w-full z-[9999] flex-center font-semibold text-3xl p-7 px-[20%]" v-if="alt && showAlt">
                {{alt}}
            </div>
        </teleport>
    </div>
</template>

<script setup>
    const props = defineProps(['type', 'url', 'collection', 'id', 'vdAutoplay', 'alt', 'normal']);
    const link = computed(() => `https://admin.nguyen-hoang-my.com/api/files/${props.collection}/${props.id}/${props.url}`);
    const isVideo = computed(() => {
        const videoExtensions = ['.mp4', '.webm', '.ogg', '.avi', '.mov', '.mkv'];
        const extension = props.url.split('.').pop().toLowerCase();
        return videoExtensions.includes('.' + extension);
    });
    const videoRef = ref(null)
    const showAlt = ref(false)
    onMounted(() => {
        if(!props.vdAutoplay && videoRef.value != null) {
            videoRef.value?.pause()
        }
    })

    const previewType = {
        onVisibleChange: (visible, prevVisible) => {
            if(visible) {
                setTimeout(() => {
                    showAlt.value = true
                }, 300);
                
            }
            else {
                showAlt.value = false

            }
        }
    }
</script>