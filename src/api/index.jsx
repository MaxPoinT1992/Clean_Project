import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  const URL = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`;
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "X-RapidAPI-Key": "16f5ed9a54msh81db9f48c80fd25p171f84jsn3c393e5db597",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
