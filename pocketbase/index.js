import PocketBase from 'pocketbase';

// const pb = new PocketBase('http://127.0.0.1:8090');
const pb = new PocketBase('https://nhm-pb.srv02.dtsmart.dev/');

export const pbGetItem = (collection, filter) => {
    return new Promise( async (resolve, reject) => {
        try {
            const resultList = await pb.collection(collection).getList(1, 1, filter);
            if(resultList?.items && resultList?.items.length > 0) {
                resolve(resultList?.items[0]);
            }
            reject(null);
        } catch (error) {
            reject(error);
            console.log(error)
        }
    })
}

export const pbGetFullList = (collection, filter) => {
    return new Promise( async (resolve, reject) => {
        try {
            const resultList = await pb.collection(collection).getFullList(filter);
            if(resultList && resultList.length > 0) {
                resolve(resultList);
            }
            reject(null);
        } catch (error) {
            reject(error);
            console.log(error)
        }
    })
}

export const COLLECTION = {
    INFO: 'information',
    ITINERARY: 'my_itinerary',
    CHESS: 'play_chess',
    MUSIC: 'music',
    SPORT: 'sport',
    HAND_MAKE: 'hand_made',
    PAGES: 'pages',
    IMAGE_LIBRARY: 'image_library',
    SECTIONS: 'sections',
    COMMUNITY: 'community',
    META: 'meta',
    SLIDER_ITINERARY: 'image_slider_my_itinerary',
    SLIDER_COMMUNITY: 'image_slider_community',
    SPORT_GROUP:'sport_group',
    CHESS_GROUP:'play_chess_group',
}

export default pb;