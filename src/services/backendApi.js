import axios from "axios";

axios.defaults.baseURL = "https://git.heroku.com/persatyi-superheroes.git";

export const addSuperhero = async (data) => {
  console.log(typeof data.images);
  try {
    const result = await axios.post(
      "/api/heroes",
      { ...data },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("🚀 ~ result", result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
