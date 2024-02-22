import axios from "axios";

export const getCharacters = async () => {
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const getCharacter = async (characterId) => {
  try {
    const character = await axios.get(
      `https://rickandmortyapi.com/api/character/${characterId}`
    );
    return character.data;
  } catch (error) {
    return error;
  }
};
