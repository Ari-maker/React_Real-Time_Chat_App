/*
* Tekijä Ari Tenhunen
 */

import axios from "axios";

/**
 *
 * @param type
 * @param sw
 * @param ne
 */
export const getPlacesData = async (type, sw, ne) => {
  try {
const { data: {data} } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng
      },
  headers: {
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'x-rapidapi-key': '8c1266121emshf5fa837039404cbp172651jsn87935b868c5'
  }
});

return data;
  } catch (error) {
console.log(error);
  }
}

export const getWeatherData = async (lat, lng) => {
  try {
      const {data}  = await axios.get(
          'https://community-open-weather-map.p.rapidapi.com/find', {
            params: {
              lat: lat,
              lng: lng
            },
            headers: {
              'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
              'x-rapidapi-key': 'f10fecb448msh6be2fbd4b6f9188p1d81f6jsnbe07e004f328'
            }
          });

    return data;
  }catch (error) {
    console.log(error);
  }
}




