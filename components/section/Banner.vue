<template>
    <section class="!pb-10">
        <div class="w-full grid grid-cols-[30%_70%] h-[400px] relative">
            <empty-image />
            <video class="w-full h-[400px]" height="300px" autoplay muted loop id="vid" style="border: solid 1px #000;">
                <source src="../../assets/video/mov_bbb.mp4" type="video/mp4">
                Your browser does not support HTML video.
            </video>
            <!-- <div class="banner">
                <div class="sc-full flex-center flex-col font-bold px-7">
                    <p class="text-[100px] text-white leading-[160px] tracking-[-3px]">Hoang My</p>
                    <div class="w-[700px] h-[1px] bg-white"></div>
                </div>
            </div> -->
            <div class="w-full h-[100px] bg-[#ffffff27] backdrop-blur-[133px] absolute bottom-0 left-0">
                <div class="container h-full grid grid-cols-4 mx-auto text-[18px]">
                    <div class="flex flex-col pt-5">
                        <p><span class="font-bold">Name:</span></p>
                        <p>Nguyễn Hoàng My</p>
                    </div>
                    <div class="flex flex-col pt-5">
                        <p><span class="font-bold">Year of Birth:</span></p>
                        <p>----------------------------------------</p>
                    </div>
                    <div class="flex flex-col pt-5">
                        <p><span class="font-bold">Gender:</span></p>
                        <p>----------------------------------------</p>
                    </div>
                    <div class="flex flex-col pt-5">
                        <p><span class="font-bold">school:</span></p>
                        <p>----------------------------------------</p>
                    </div>
                </div>

            </div>
        </div>
        <div class="pt-7">
            <p class="text-center text-[32px] font-semibold mb-4">About me</p>
            <p class="text-center max-w-[700px] mx-auto">Your personal commercial should be conversational and natural. The statement should not sound memorized and you should take care not to ramble. You want to appear confident, poised, and professional.</p>
        </div>
    </section>
</template>

<script lang="ts" setup>

onMounted(() => {
    // setTimeout(() => {
    //     const vid = document.getElementById('vid') as any
    //     console.log(vid,'ooo');
    //     if(vid) vid.play();
    // }, 3000);
})
</script>

<style lang="scss" scoped>
.banner{
    // background-attachment: fixed;
    // background-image: url(@/assets/images/banner.jpg);
    // background-repeat: no-repeat;
    // background-position: 50% 90px;
    // height: 500px;
    // width: 100%;
}
</style>

