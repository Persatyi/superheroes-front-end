import axios from "axios";

// axios.defaults.baseURL = "https://persatyi-superheroes.herokuapp.com";
axios.defaults.baseURL = "http://localhost:3000";

export const addSuperhero = async (data) => {
  try {
    const result = await axios.post("/api/heroes", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

export const getHeroes = async () => {
  try {
    const result = await axios.get("/api/heroes");
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
