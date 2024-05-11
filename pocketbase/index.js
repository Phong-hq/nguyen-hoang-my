import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export const pbGetItem = (collection) => {
    return new Promise( async (resolve, reject) => {
        try {
            const resultList = await pb.collection(collection).getList(1, 1, {});
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

export const COLLECTION = {
    INFO: 'information',
    ITINERARY: 'my_itinerary',
    CHESS: 'play_chess',
    MUSIC: 'music',
    SPORT: 'sport',
    HAND_MAKE: 'hand_made',
    PAGES: 'pages',
    IMAGE_LIBRARY: 'image_library'
}

export default pb;