import axios from 'axios';

const URL= 'https://sherpa-backend-ajiiv.ondigitalocean.app/api/pins/'

export const postMarker = async(marker) => {
    try {
        console.log(marker)
        const {data: {data}} = await axios.post(URL,{
            imageUrl: marker.imageUrl,
            hours: marker.hours,
            title: marker.title,
            desc: marker.desc,
            ranking: marker.ranking,
            lat: marker.lat,
            long: marker.long,
            rating: marker.rating,
            reviews: marker.reviews,
            phone: marker.phone
        });
        return data;

    } catch (error){
        console.log(error)
    }
}