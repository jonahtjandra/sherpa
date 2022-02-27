import axios from 'axios';

const URL= 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng'

export const postMarker = async(marker) => {
    try {
        const {data: {data}} = await axios.get(URL,{
          params: marker,
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': 'https://sherpa-backend-ajiiv.ondigitalocean.app/api/pins/'
          }
        });
        return data;

    } catch (error){
        console.log(error)
    }
}