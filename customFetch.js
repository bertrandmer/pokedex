export const customFetch = async (https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json) => {
    try {
      const response = await fetch(https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json, { mode: "cors" });
      if (response.ok) {
        const result = await response.json();
        return result;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };