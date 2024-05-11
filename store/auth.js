import { defineStore } from 'pinia';
import pb from "@/pocketbase"
import {pbGetItem, COLLECTION} from "@/pocketbase"

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        information: null,
        itinerary: null,
        chess: null,
        music: null,
        sport: null,
        handMade: null,
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
        }
    }
})