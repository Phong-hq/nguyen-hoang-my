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
import { useAuthStore } from '~/store/auth';
  import { storeToRefs } from 'pinia';

const authStore = useAuthStore();

const { information, itinerary, chess, music, sport, handMade } = storeToRefs(authStore)
const router = useRouter();
const route = useRoute();
const idActive = ref('about-me-section');
const documentHeight = ref(0);
const state = computed<{id: string, top: number}[]>(() =>{
    const section = document?.querySelectorAll('.section-element');
    let result = [] as any;
    section?.forEach((e: any) => {
        const item = navList.value.find((menu) => e.id == menu.id);
        const obj = {
            id: item?.id || '',
            top: Number(e.offsetTop)
        }
        result.push(obj)
    })
    const body = document.body;
    const html = document.documentElement;
    documentHeight.value = Math.max( body?.scrollHeight || 0 , body?.offsetHeight || 0 , 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
    return result;
});

const navList = computed(() => {
    const a = {label: 'Home', id: 'home-section'};
    const b = {label: 'My itinerary', id: 'my-itinerary-section'};
    const c = {label: 'Play chess', id: 'play-chess-section'};
    const d = {label: 'Music', id: 'music-section'};
    const e = {label: 'Sport', id: 'sport-section'};
    const f = {label: 'Handmade', id: 'handmade-section'};
    let result = [a];
    if(itinerary.value) result.push(b);
    if(chess.value) result.push(c);
    if(music.value) result.push(d);
    if(sport.value) result.push(e);
    if(handMade.value) result.push(f);
    return result;
})

onMounted(async () => {
  await router.isReady();
  goToSection(idActive.value);
  window.addEventListener('scroll', handelScroll)
});
onUnmounted(() => {
  window.removeEventListener('scroll', handelScroll);
})

const handelScroll = (e: any) => {
    const top = window?.top?.scrollY || 0;
    if(documentHeight.value > 0 && (top + 90+ window.innerHeight) >= documentHeight.value) {
        idActive.value = state.value[state.value.length - 1]?.id;
        return;
    }
    idActive.value =  state.value.reduce((result: string, item: any) => result = item?.top <= top + 90 ? item?.id : result, 'home-section');
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

const handleNavClick = (item: any) => {
    if(route.name != 'index') {
        router.push({name: 'index'});
        setTimeout(() => {
            goToSection(item.id);
        }, 500);
    } else  goToSection(item.id);
}

</script>