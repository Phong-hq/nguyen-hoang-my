<template>
    <header class="sticky top-0 left-0 w-full h-[90px] bg-white z-10">
        <div class="w-full flex justify-between  sc-full container  mx-auto">
            <div></div>
            <div class="flex items-center justify-end">
                <div 
                    class="pl-[60px] font-semibold text-right duration-[0.4s] hover:text-primary cursor-pointer tracking-[-1px]" 
                    :class="{ '!text-primary': idActive == item.id }"
                    v-for="(item, index) in navList" 
                    :key="index"
                    @click="handleNavClick(item)"
                >
                    {{ item.label }}
                </div>
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const router = useRouter();
const route = useRoute();
const idActive = ref('about-me-section');
const documentHeight = ref(0);
const state = ref<{id: string, top: number}[]>([]);
const navList = ref([
    {label: 'Home', id: 'home-section'},
    // {label: 'About me', id: 'about-me-section'},
    {label: 'My itinerary', id: 'my-itinerary-section'},
    {label: 'Play chess', id: 'play-chess-section'},
    {label: 'Music', id: 'music-section'},
    {label: 'Sport', id: 'sport-section'},
    {label: 'Handmade', id: 'handmade-section'},
])

onMounted(async () => {
  await router.isReady();
    getOffsetTop();
  goToSection(idActive.value);
//   window.addEventListener('resize', setViewportProperty());
  window.addEventListener('scroll', handelScroll)
});
onUnmounted(() => {
//   window.removeEventListener('resize', setViewportProperty());
  window.removeEventListener('scroll', handelScroll);
})

const handelScroll = (e: any) => {
    const top = window?.top?.scrollY || 0;
    if(documentHeight.value > 0 && (top + 90+ window.innerHeight) >= documentHeight.value) {
        idActive.value = state.value[state.value.length - 1].id;
        return;
    }
    idActive.value =  state.value.reduce((result: string, item: any) => result = item?.top <= top + 90 ? item?.id : result, 'photo-section');
}
const goToSection = (a: string) => {
    idActive.value = a;
    let element = document.getElementById(idActive.value);
    if (element) {
        const top = element.offsetTop;
        if (idActive.value === 'home-section') {
            window.scrollTo({top: 0, behavior: 'smooth'})
        } else if(idActive.value === 'my-itinerary-section') {
            window.scrollTo({top: top - 290, behavior: 'smooth'})
        }
        else if (idActive.value !== 'home-section') {
            window.scrollTo({top: top - 90, behavior: 'smooth'})
        }
    }
}
const getOffsetTop = () => {
    const section = document?.querySelectorAll('.section-element');
    section?.forEach((e: any) => {
        const item = navList.value.find((menu) => e.id == menu.id);
        const index = state.value.findIndex((a) => a.id == item?.id);
        const obj = {
            id: item?.id || '',
            top: Number(e.offsetTop)
        }
        if(index == -1) state.value.push(obj);
        else state.value[index] = obj;
        // if(item?.hidden) {
        // }
    })
    const body = document.body;
    const html = document.documentElement;
    documentHeight.value = Math.max( body?.scrollHeight || 0 , body?.offsetHeight || 0 , 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
}

const handleNavClick = (item: any) => {
    if(route.name != 'index') {
        router.push({name: 'index'});
        setTimeout(() => {
            goToSection(item.id);
        }, 500);
    } else  goToSection(item.id);
}

// getOffsetTop();

</script>

<!-- <style ></style> -->