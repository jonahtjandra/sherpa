import axios from 'axios';

const URL= 'https://sherpa-backend-ajiiv.ondigitalocean.app/api/pins/'

// const options = {
//     params: {
//       latitude: '12.91285',
//       longitude: '100.87808',
//       limit: ''
//     },
//     headers: {
//       'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
//       'x-rapidapi-key': '288923edc8msh5e8fadabed7a2f5p136e3ejsned0ca0eae261'
//     }
//   };


export const deleteMarkersData = async(identification) => {
    try {
        console.log(identification);
        const data = await axios.delete('https://sherpa-backend-ajiiv.ondigitalocean.app/api/pins/',{data:{
        id: identification}});

    } catch (error){
        console.log(error)
    }
}   