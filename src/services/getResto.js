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
      'x-rapidapi-key': '288923edc8msh5e8fadabed7a2f5p136e3ejsned0ca0eae261'
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
            'x-rapidapi-key': '288923edc8msh5e8fadabed7a2f5p136e3ejsned0ca0eae261'
          }
        });
        return data;

    } catch (error){
        console.log(error)
    }
}