import axios from 'axios';

const URL= 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng'

const options = {
    params: {
      latitude: '12.91285',
      longitude: '100.87808',
      limit: '30'
    },
    headers: {
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      'x-rapidapi-key': 'b11dbf2958mshbd4a080299735f6p1ac3f3jsn7397a96969f9'
    }
  };


export const getPlacesData = async(lat,lng) => {
    try {
        const {data: {data}} = await axios.get(URL,{
          params: {
            latitude: lat,
            longitude: lng,
            limit: '30'
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': 'b11dbf2958mshbd4a080299735f6p1ac3f3jsn7397a96969f9'
          }
        });
        return data;

    } catch (error){
        console.log(error)
    }
}