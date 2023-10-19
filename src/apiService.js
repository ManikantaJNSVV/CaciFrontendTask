import axios from "axios";

const SWAPI_BASE_URL = "https://swapi.dev/api";

export const fetchStarships = async () => {
  try {
    const response = await axios.get(`${SWAPI_BASE_URL}/starships`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching starships:", error);
    return [];
  }
};
