import { defineStore } from 'pinia';
import pb from "@/pocketbase"
import {pbGetItem, pbGetFullList, COLLECTION} from "@/pocketbase"

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        information: null,
        itinerary: null,
        chess: null,
        chess_group: null,
        music: null,
        sport_group: null,
        sport: null,
        handMade: null,
        sections: null,
        slider_itinerary: null,
        slider_community: null,
        pageDetail: null,
        pageGroup: null,
        community : null,
        meta : null,
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
            await this.getAllSliderItinerary()
            await this.getMyItineraryInfo()
        },
        async getMyItineraryInfo() {
            try {
                const resultList = await pbGetItem(COLLECTION.ITINERARY);
                this.itinerary = resultList;
            } catch (error) {
                console.log(error);
            }
        },
        async getChess() {
            await this.getChessGroup()
            await this.getChessInfo()
        },
        async getChessInfo() {
            try {
                const resultList = await pbGetItem(COLLECTION.CHESS);
                this.chess = resultList;
            } catch (error) {
                console.log(error);
            }
        },
        async getChessGroup() {
            try {
                const resultList = await pbGetFullList(COLLECTION.CHESS_GROUP);
                this.chess_group = resultList;
                console.log(this.chess_group);
                
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
        async getSport() {
            await this.getSportGroup()
            await this.getSportInfo()
        },
        async getSportInfo() {
            try {
                const resultList = await pbGetItem(COLLECTION.SPORT);
                this.sport = resultList;
            } catch (error) {
                console.log(error);
            }
        },
        async getSportGroup() {
            try {
                const resultList = await pbGetFullList(COLLECTION.SPORT_GROUP);
                this.sport_group = resultList;
            } catch (error) {
                console.log(error);
            }
        },
        async getHandMadeInfo() {
            try {
                const resultList = await pbGetItem(COLLECTION.HAND_MAKE);
                this.handMade = resultList;
            } catch (error) {
                console.log(error);
            }
        },
        async getCommunity() {
            await this.getAllSliderCommunity()
            await this.getCommunityInfo()
        },
        async getCommunityInfo() {
            try {
                const resultList = await pbGetItem(COLLECTION.COMMUNITY);
                this.community = resultList;
            } catch (error) {
                console.log(error);
            }
        },
        async getPageMeta() {
            return new Promise( async(resolve, reject) => {          
                try {
                    if(this.meta != null) {
                        resolve(this.meta)
                        return;
                    }
                    const resultList = await pbGetItem(COLLECTION.META);
                    if(resultList) {
                        this.meta = resultList
                        resolve(this.meta)
                    }
                    else reject(false)
                } catch (error) {
                    reject(error);
                    console.log(error);
                }
            })
        },
        async getAllSections() {
            try {
                const resultList = await pbGetFullList(COLLECTION.SECTIONS);
                this.sections = resultList;
            } catch (error) {
                console.log(error);
            }
        },
        async getAllSliderItinerary() {
            try {
                const resultList = await pbGetFullList(COLLECTION.SLIDER_ITINERARY);
                this.slider_itinerary = resultList.sort((a, b) => (a?.order || 0) - (b?.order || 0)) || [];
            } catch (error) {
                console.log(error);
            }
        },
        async getAllSliderCommunity() {
            try {
                const resultList = await pbGetFullList(COLLECTION.SLIDER_COMMUNITY);
                this.slider_community = resultList.sort((a, b) => (a?.order || 0) - (b?.order || 0)) || [];
            } catch (error) {
                console.log(error);
            }
        },
        async getPageDetail(slug) {
            try {
                this.pageDetail = null;
                this.pageGroup = null;
                if(this.sport?.slug == slug) {
                    this.pageDetail = this.sport
                    if(this.sport_group == null) {
                        await this.getSportGroup()                 
                    }
                    this.pageGroup = this.sport_group
                }
        
                else if(this.chess?.slug == slug) {
                this.pageDetail = this.chess
                if(this.chess_group == null) {
                    await this.getChessGroup()                 
                }
                this.pageGroup = this.chess_group
                }
                else {
                    const resultList = await pbGetItem(COLLECTION.PAGES, {filter: `slug="${slug}"`});
                    this.pageDetail = resultList || null;
                }
            } catch (error) {
                console.log(error);
            }
        },
        // async getPageImageList(arr) {
        //     try {
        //         this.pageImageList = [];
        //         let filter = `id="${arr[i]}"`;
        //         // for(let i = 0; i < arr.length; i++) {
        //         //     filter = filter + (i > 0 ? '||' : '') + `id="${arr[i]}"`
        //         // }
        //         const resultList = await pbGetFullList(COLLECTION.IMAGE_LIBRARY, {filter});
        //         this.pageImageList = resultList || [];
        //     } catch (error) {
        //         console.log(error);
        //     }
        // },
        async getPageImageList(slug) {
            try {
                this.pageImageList = [];
                let filter = `slug="${slug}"`;
                // for(let i = 0; i < arr.length; i++) {
                //     filter = filter + (i > 0 ? '||' : '') + `id="${arr[i]}"`
                // }
                const resultList = await pbGetFullList(COLLECTION.IMAGE_LIBRARY, {filter});
                this.pageImageList = resultList.sort((a, b) => (b?.order || 0) - (a?.order || 0)) || [];
                console.log(this.pageImageList, slug);
                
            } catch (error) {
                console.log(error);
            }
        }
    }
})