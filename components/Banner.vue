<template>
    <section class="flex-center container mx-auto">
        <div class="w-[1000px] relative">
            <div class="banner">
                <div class="sc-full flex-center flex-col font-bold px-7">
                    <p class="text-[100px] text-white leading-[160px] tracking-[-3px]">Hoang My</p>
                    <div class="w-[700px] h-[1px] bg-white"></div>
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

