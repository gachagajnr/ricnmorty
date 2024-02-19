import axios from "axios";

export const getCharacters = async () => {
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character`
    );
    return response.data.results;
  } catch (error) {
    return error;
  }
};

export const getCharacter = async (characterId) => {};

export const getUser = async (userid) => {};
