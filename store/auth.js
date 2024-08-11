import { defineStore } from 'pinia';
import pb from "@/pocketbase"
import {pbGetItem, pbGetFullList, COLLECTION} from "@/pocketbase"

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        information: null,
        itinerary: null,
        chess: null,
        music: null,
        sport: null,
        handMade: null,
        sections: null,
        pageDetail: null,
        pageImageList: [],
    }),
    actions: {
        async getInformation() {
           try {
               const resultList = await pbGetItem(COLLECTION.INFO);
               this.information = resultList;
           } catch (error) {
               console.log(error);
           }
        },
        async getMyItinerary() {
            try {
                const resultList = await pbGetItem(COLLECTION.ITINERARY);
                this.itinerary = resultList;
            } catch (error) {
                console.log(error);
            }
        },
        async getChessInfo() {
            try {
                const resultList = await pbGetItem(COLLECTION.CHESS);
                this.chess = resultList;
            } catch (error) {
                console.log(error);
            }
        },
        async getMusicInfo() {
            try {
                const resultList = await pbGetItem(COLLECTION.MUSIC);
                this.music = resultList;
            } catch (error) {
                console.log(error);
            }
        },
        async getSportInfo() {
            try {
                const resultList = await pbGetItem(COLLECTION.SPORT);
                this.sport = resultList;
            } catch (error) {
                console.log(error);
            }
        },
        async gethandMadeInfo() {
            try {
                const resultList = await pbGetItem(COLLECTION.HAND_MAKE);
                this.handMade = resultList;
            } catch (error) {
                console.log(error);
            }
        },
        async getAllSections() {
            try {
                const resultList = await pbGetFullList(COLLECTION.SECTIONS);
                this.sections = resultList;
                console.log(this.sections);
            } catch (error) {
                console.log(error);
            }
        },
        async getPageDetail(slug) {
            try {
                this.pageDetail = null;
                const resultList = await pbGetItem(COLLECTION.PAGES, {filter: `slug="${slug}"`});
                this.pageDetail = resultList || null;
            } catch (error) {
                console.log(error);
            }
        },
        async getPageImageList(arr) {
            try {
                this.pageImageList = [];
                let filter = '';
                for(let i = 0; i < arr.length; i++) {
                    filter = filter + (i > 0 ? '||' : '') + `id="${arr[i]}"`
                }
                const resultList = await pbGetFullList(COLLECTION.IMAGE_LIBRARY, {filter});
                this.pageImageList = resultList || [];
            } catch (error) {
                console.log(error);
            }
        }
    }
})