import axios from "axios";

export const getData = async () => {
  try {
    const response = await axios.get("/assets/sample.json");
    return response.data.entries.filter((item) => item.releaseYear >= 2010);
  } catch (error) {
    console.error("Error cargando los datos", error);
    return [];
  }
};
