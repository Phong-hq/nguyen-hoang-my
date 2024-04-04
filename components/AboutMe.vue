<template>
    <section class="container mx-auto">
        <div class="w-full grid grid-cols-2 gap-x-7">
            <div class="w-full  h-[400px] flex relative">
                <img class="max-w-[440px] h-[200px] h-full object-cover object-right-top absolute right-0 top-0" src="@/assets/images/banner.jpg" alt="">
            </div>
            <div class="flex-center !justify-start w-[80%] flex-col text-[18px]">
                <p class="heading-1 !py-7">About me</p>
                <div class="w-full">
                    <p><span class="font-bold">Name:</span> Trần Hoàng My</p>
                    <p><span class="font-bold">Year of Birth:</span> ---</p>
                    <p><span class="font-bold">Gender:</span> ---</p>
                    <p><span class="font-bold">school:</span> ---</p>
                    <p><span class="font-bold">Year of Birth:</span> ---</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.banner{
    background-attachment: fixed;
    background-image: url(@/assets/images/banner.jpg);
    // background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 90px;
    height: 500px;
    width: 100%;
    // width: 1000px;
}
</style>

